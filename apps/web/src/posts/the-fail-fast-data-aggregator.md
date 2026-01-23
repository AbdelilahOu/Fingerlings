---
title: Errgroup - The fail-fast data aggregator
description: Learn Golang's concurrency control (errgroup), Context Propagation & Functional Options.
date: '2026-01-23'
tags:
  - Go/Golang
  - Kata 01
  - Go Concurrency
published: true
---

As I'm in the process of learning more about Golang and Golang's concurrency model, I'm building a lot of CLI tools, backend services, etc.

I'm relying on this [Github repo](https://github.com/MedUnes/go-kata) that explores those concepts using problem solving, for example the first Kata is about building a fail-fast data aggregator using solely [errgroup](https://pkg.go.dev/golang.org/x/sync/errgroup).

Package errgroup provides synchronization, error propagation and context cancellation for groups of goroutines working on subtasks.

## The scenario

Imagine we want to build a dashboard, for this dashboard we must fetch data from two independent services, and we must fetch them in parallel, however, if either fails or global timeout is reached, the entire operation must abort immediately.

## The Challenge

Create a `DashboardAggregator` struct and a method `Aggregate(id int)` that orchestrates this fetching.

Requirements:
- The Aggregator must be configurable (timeout, logger).
- Both services must be queried concurrently.
- Fail if timeout is surpassed
- Result should combine both outputs: `output 1 | output 2`

## The solution

Before I got into this challenge, I thought that using goroutines with `sync.WaitGroup` is enough and that it's the only solution, to be fair it was the only way I knew, but `sync.WaitGroup` doesn't fail-fast, let's say we run 100 goroutines using `sync.WaitGroup` our program will have to wait for all those 100 goroutines to finish which isn't what we want, if one fails we stop.

### Create the aggregator with functional options

Our Aggregator is pretty straightforward:

```go
package main

import (
	...
)

type DashboardAggregator struct {
	timeout time.Duration
	logger  *slog.Logger
}

func NewUserAggregator(timeout time.Duration, logger *slog.Logger) *DashboardAggregator {
	userAggr := &DashboardAggregator{
		timeout,
		logger,
	}

	return userAggr
}
```

This code works fine, but imagine we have more options, more configuration, what if some options are optional, do we keep passing those options to the function? Of course not, that's absurd, it will become big and ugly. 

There are a bunch of ways to achieve this but you can read this [article](https://dave.cheney.net/2014/10/17/functional-options-for-friendly-apis) which goes into more details about this.

The solution to this is using Functional Options, functions that mutate the struct options directly and return the same type so that we don't have to worry about typing errors in Golang. 

```go
type Option func(*DashboardAggregator)

func WithTimeout(t time.Duration) Option {
	return func(a *DashboardAggregator) {
		a.timeout = t
	}
}

func WithLogger() Option {
	return func(a *DashboardAggregator) {
		a.logger = slog.Default()
	}
}
```

Here's the full code of our struct definition and its configuration:

```go
package main

import (
	...
)

type Option func(*DashboardAggregator)

type DashboardAggregator struct {
	timeout time.Duration
	logger  *slog.Logger
}

func WithTimeout(t time.Duration) Option {
	return func(a *DashboardAggregator) {
		a.timeout = t
	}
}

func WithLogger() Option {
	return func(a *DashboardAggregator) {
		a.logger = slog.Default()
	}
}

func NewUserAggregator(options ...Option) *DashboardAggregator {
	userAggr := &DashboardAggregator{}

	for _, opt := range options {
		opt(userAggr)
	}

	return userAggr
}

```

### The Aggregate method

Now for the main part, this is where errgroup shines, we use `errgroup.WithContext` which gives us a group and a derived context, when any goroutine in the group returns an error the context gets cancelled automatically, I didn't know this was possible before and I was manually handling cancellation which was a mess.

```go
func (a *DashboardAggregator) Aggregate(ctx context.Context, id int) (string, error) {
	ctx, cancel := context.WithTimeout(ctx, a.timeout)
	defer cancel()

	g, ctx := errgroup.WithContext(ctx)
	var profile, orders string
	var err error

	g.Go(func() error { profile, err = fetchProfile(ctx, id); return err })
	g.Go(func() error { orders, err = fetchOrder(ctx, id); return err })

	if err := g.Wait(); err != nil {
		a.logger.Error(err.Error())
		return "", err
	}

	a.logger.Info("fetched success")
	return fmt.Sprintf("%s | %s", profile, orders), nil
}
```

so `g.Go` spawns a goroutine and tracks it, and `g.Wait` waits for all of them to finish and returns the first error if any, the cool thing is if one fails the context cancels and other goroutines can check `ctx.Done()` to bail out early, no more waiting for stuff that doesn't matter anymore

### The fetch functions

these are just mock functions that simulate API calls, in real life you'd have HTTP requests or database queries here, they use select to either return data or respect context cancellation.

```go
func fetchProfile(ctx context.Context, id int) (string, error) {
	select {
	case <-time.After(2 * time.Second):
		return "Name: Alice", nil
	case <-ctx.Done():
		return "", ctx.Err()
	}
}

func fetchOrder(ctx context.Context, id int) (string, error) {
	select {
	case <-time.After(500 * time.Millisecond):
		return "Order: 5", nil
	case <-ctx.Done():
		return "", ctx.Err()
	}
}
```

the select statement is listening on both channels at the same time, if context gets cancelled before the timer fires we return the context error immediately, this is how you make your goroutines respect cancellation and not just keep running in the background doing useless work.

### Putting it all together

```go
func main() {
	a := NewUserAggregator(WithLogger(), WithTimeout(1*time.Second))
	result, err := a.Aggregate(context.Background(), 1)
	if err != nil {
		fmt.Printf("error: %s", err.Error())
	}
	fmt.Print(result)
}
```

so with a 1 second timeout and fetchProfile taking 2 seconds, this will fail with `context deadline exceeded` which is exactly what we want, we set the timeout to 1 second but one of our services takes 2 seconds so we bail out early, fail fast, don't waste resources waiting for something that won't matter anyway

## Takeaway

honestly this kata taught me a lot about how Go handles concurrency properly, before this I was just throwing goroutines everywhere with WaitGroup and hoping for the best, now I know better.

- use `errgroup` instead of `sync.WaitGroup` when you need error propagation and cancellation
- functional options keep your constructors clean, especially when you have a lot of optional config
- always pass context and respect `ctx.Done()` in your goroutines, your future self will thank you
