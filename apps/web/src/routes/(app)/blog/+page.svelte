<script lang="ts">
	import type { Post } from '$lib/types';
	import BlogCard from '$lib/components/BlogCard.svelte';

	let props: { data: { posts: Post[]; url: string } } = $props();

	const title = 'Blog - Abdelilah Ouaadouch';
	const description =
		'Technical articles about Go, Rust, TypeScript, and fullstack development. Tips, tutorials, and insights from a fullstack developer.';
	const url = `https://personal-website.ar7al.workers.dev/blog`;
	const image = `https://personal-website.ar7al.workers.dev/og/image/blog/og.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Go, Golang, Rust, TypeScript, Blog, Technical Articles, Web Development, API Development, Tutorials"
	/>
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:creator" content="@Abdelilah4dev" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Blog",
		"name": "Abdelilah Ouaadouch's Blog",
		"description": "${description}",
		"url": "${url}",
		"author": {
			"@type": "Person",
			"name": "Abdelilah Ouaadouch",
			"url": "https://ar7al.com"
		}
	}
	</script>`}
</svelte:head>

<!-- Blog Header -->
<header class="space-y-4">
	<h1 class="font-display text-3xl font-semibold text-white md:text-4xl">
		Blog
		<span class="block text-xl font-normal normal-case text-gray-300 md:text-2xl">
			Technical Articles & Tutorials
		</span>
	</h1>
	<p class="text-base text-gray-300 md:text-lg">
		Thoughts on Go, Rust, TypeScript, and building software that works. Deep dives into
		technical challenges, tutorials, and lessons learned from real projects.
	</p>
</header>

<!-- Blog Posts -->
<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl">
		<span>$</span> ls ./posts
	</h2>

	{#if props.data.posts.length > 0}
		<div class="space-y-4">
			{#each props.data.posts as post}
				<BlogCard {post} />
			{/each}
		</div>
	{:else}
		<div class="corner-brackets bg-[#131313] p-8 text-center">
			<p class="text-gray-400">
				No posts yet. Check back soon for technical articles and tutorials.
			</p>
			<p class="mt-2 text-sm text-gray-500">
				In the meantime, check out my
				<a href="https://github.com/AbdelilahOu" class="text-blue-400 hover:text-blue-300">
					GitHub
				</a>
				for code and projects.
			</p>
		</div>
	{/if}
</section>

<!-- Topics I Write About -->
<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl">
		<span>$</span> cat ./topics
	</h2>
	<div class="corner-brackets bg-[#131313] p-5">
		<div class="flex flex-wrap gap-3">
			{#each ['Go/Golang', 'Rust', 'TypeScript', 'APIs', 'System Design', 'Developer Tools', 'Database Optimization', 'Desktop Apps'] as topic}
				<span class="border border-neutral-600 px-3 py-1 text-gray-300">{topic}</span>
			{/each}
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-neutral-800 pt-8">
	<a
		href="/"
		class="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
	>
		<span>{"<-"}</span>
		<span>Back to Home</span>
	</a>
</footer>
