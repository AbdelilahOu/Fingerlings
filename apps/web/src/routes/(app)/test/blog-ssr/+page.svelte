<script lang="ts">
	import type { Post } from '$lib/types';
	import BlogCard from '$lib/components/BlogCard.svelte';

	let props: {
		data: {
			latestPosts: Post[];
		};
	} = $props();
</script>

<svelte:head>
	<title>Test - Blog SSR - Abdelilah Ouaadouch</title>
	<meta name="description" content="Test variant: Blog posts data with SSR mode." />
	<meta name="keywords" content="test, SSR, blog, rendering" />
	<link rel="canonical" href={"https://personal-website.ar7al.workers.dev/test/blog-ssr"} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={"https://personal-website.ar7al.workers.dev/test/blog-ssr"} />
	<meta property="og:title" content="Test - Blog SSR - Abdelilah Ouaadouch" />
	<meta property="og:description" content="Test variant: Blog posts data with SSR mode." />
	<meta property="og:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />
	<meta property="og:locale" content="en" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={"https://personal-website.ar7al.workers.dev/test/blog-ssr"} />
	<meta name="twitter:title" content="Test - Blog SSR - Abdelilah Ouaadouch" />
	<meta name="twitter:description" content="Test variant: Blog posts data with SSR mode." />
	<meta name="twitter:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta name="twitter:creator" content="@Abdelilah4dev" />
</svelte:head>

<section class="space-y-4">
	<h1 class="font-display text-3xl font-semibold uppercase text-white md:text-4xl">
		Abdelilah Ouaadouch
	</h1>
</section>

<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl"><span>$</span> head ./latest-posts</h2>
	{#if props.data.latestPosts.length > 0}
		<div class="space-y-4">
			{#each props.data.latestPosts as post}
				<BlogCard {post} />
			{/each}
		</div>
	{:else}
		<div class="corner-brackets bg-[#131313] p-5 text-center">
			<p class="text-gray-400">No blog posts yet. Check back soon!</p>
		</div>
	{/if}
</section>

<footer class="font-display m-auto my-4 flex h-11 items-center justify-center text-center text-sm uppercase text-white md:text-md">
	Blog Only - SSR
</footer>
