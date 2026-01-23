<script lang="ts">
	import type { Component } from 'svelte';
	import type { PostMetadata } from '$lib/types';

	let { data }: { data: { content: Component; meta: PostMetadata; slug: string } } = $props();

	let meta = $derived(data.meta);
	let slug = $derived(data.slug);
	let url = $derived(`https://ar7al.com/blog/${slug}`);
	let title = $derived(`${meta.title} - Abdelilah Ouaadouch`);

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content="{meta.tags.join(', ')}, Blog, Abdelilah Ouaadouch" />
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content="/og.png" />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />
	<meta property="article:published_time" content={meta.date} />
	<meta property="article:author" content="Abdelilah Ouaadouch" />
	{#each meta.tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content="/og.png" />
	<meta name="twitter:creator" content="@Abdelilah4dev" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": "${meta.title}",
		"description": "${meta.description}",
		"url": "${url}",
		"datePublished": "${meta.date}",
		"author": {
			"@type": "Person",
			"name": "Abdelilah Ouaadouch",
			"url": "https://ar7al.com"
		},
		"publisher": {
			"@type": "Person",
			"name": "Abdelilah Ouaadouch",
			"url": "https://ar7al.com"
		},
		"keywords": "${meta.tags.join(', ')}"
	}
	</script>`}
</svelte:head>

<div class="min-h-screen w-screen bg-[#0d0d0d] px-4 py-8">
	<div class="m-auto w-full max-w-3xl space-y-8">
		<!-- Back Navigation -->
		<nav class="flex items-center gap-6 text-sm md:text-base">
			<a
				href="/blog"
				class="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
			>
				<span>{"<"}</span>
				<span>Back to Blog</span>
			</a>
		</nav>

		<!-- Post Header -->
		<header class="space-y-4">
			<h1 class="font-display text-3xl font-semibold text-white md:text-4xl">
				{meta.title}
			</h1>
			<div class="flex flex-wrap items-center gap-4 text-sm text-gray-400">
				<time>{formatDate(meta.date)}</time>
				<div class="flex flex-wrap gap-2">
					{#each meta.tags as tag}
						<span class="bg-neutral-700 px-2 py-1 text-xs text-gray-300">{tag}</span>
					{/each}
				</div>
			</div>
		</header>

		<!-- Post Content -->
		<article class="prose prose-invert prose-lg max-w-none">
			<data.content />
		</article>

		<!-- Footer -->
		<footer class="space-y-6 border-t border-neutral-800 pt-8">
			<div class="corner-brackets bg-[#131313] p-5">
				<p class="text-gray-300">
					Thanks for reading! If you found this helpful, feel free to share it or connect with me
					on
					<a
						href="https://x.com/Abdelilah4dev"
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-400 hover:text-blue-300"
					>
						Twitter
					</a>.
				</p>
			</div>

			<a
				href="/blog"
				class="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
			>
				<span>{"<"}</span>
				<span>Back to all posts</span>
			</a>
		</footer>
	</div>
</div>

<style>
	/* Markdown content styling */
	:global(.prose h2) {
		color: #fff;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.prose h3) {
		color: #fff;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	:global(.prose p) {
		color: #d1d5db;
		margin-bottom: 1rem;
		line-height: 1.75;
	}

	:global(.prose a) {
		color: #60a5fa;
	}

	:global(.prose a:hover) {
		color: #93c5fd;
	}

	:global(.prose ul),
	:global(.prose ol) {
		color: #d1d5db;
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
	}

	:global(.prose strong) {
		color: #fff;
		font-weight: 600;
	}

	:global(.prose code) {
		background-color: #202020;
		padding: 0.125rem 0.375rem;
		font-size: 0.875em;
		color: #f9fafb;
	}

	:global(.prose pre) {
		position: relative;
		background-color: #131313 !important;
		padding: 1.25rem;
		overflow-x: auto;
		margin-bottom: 1rem;
		--size: 13px;
		--width: 2px;
		--color: gray;
		/* Corner brackets as background on the element itself - stays fixed when scrolling */
		background-color: #131313;
		background-image:
			/* Top-left corner */
			linear-gradient(var(--color), var(--color)),
			linear-gradient(var(--color), var(--color)),
			/* Top-right corner */
			linear-gradient(var(--color), var(--color)),
			linear-gradient(var(--color), var(--color)),
			/* Bottom-left corner */
			linear-gradient(var(--color), var(--color)),
			linear-gradient(var(--color), var(--color)),
			/* Bottom-right corner */
			linear-gradient(var(--color), var(--color)),
			linear-gradient(var(--color), var(--color));
		background-size:
			var(--size) var(--width),
			var(--width) var(--size),
			var(--size) var(--width),
			var(--width) var(--size),
			var(--size) var(--width),
			var(--width) var(--size),
			var(--size) var(--width),
			var(--width) var(--size);
		background-position:
			0 0,
			0 0,
			100% 0,
			100% 0,
			0 100%,
			0 100%,
			100% 100%,
			100% 100%;
		background-repeat: no-repeat;
		/* background-attachment: scroll is default - keeps corners fixed to visible area */
	}

	:global(.prose pre code) {
		background-color: transparent;
		padding: 0;
	}

	:global(.prose blockquote) {
		border-left: 4px solid #4b5563;
		padding-left: 1rem;
		color: #9ca3af;
		font-style: italic;
	}

	:global(.prose hr) {
		border-color: #374151;
		margin: 2rem 0;
	}
</style>
