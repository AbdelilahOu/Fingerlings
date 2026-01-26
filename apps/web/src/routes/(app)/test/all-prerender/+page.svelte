<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import type { ContributionData, Post } from '$lib/types';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import GithubGraph from '$lib/components/GithubGraph.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';

	let props: {
		data: {
			featuredProjects: Project[];
			latestPosts: Post[];
			githubContributions: Promise<ContributionData | null>;
			year: number;
		};
	} = $props();
</script>

<svelte:head>
	<title>Test - All Data Prerender - Abdelilah Ouaadouch</title>
	<meta name="description" content="Test variant: All data (projects, blog, GitHub) with prerender mode." />
	<meta name="keywords" content="test, prerender, projects, blog, github, rendering" />
	<link rel="canonical" href={"https://personal-website.ar7al.workers.dev/test/all-prerender"} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={"https://personal-website.ar7al.workers.dev/test/all-prerender"} />
	<meta property="og:title" content="Test - All Data Prerender - Abdelilah Ouaadouch" />
	<meta property="og:description" content="Test variant: All data (projects, blog, GitHub) with prerender mode." />
	<meta property="og:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />
	<meta property="og:locale" content="en" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={"https://personal-website.ar7al.workers.dev/test/all-prerender"} />
	<meta name="twitter:title" content="Test - All Data Prerender - Abdelilah Ouaadouch" />
	<meta name="twitter:description" content="Test variant: All data (projects, blog, GitHub) with prerender mode." />
	<meta name="twitter:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta name="twitter:creator" content="@Abdelilah4dev" />
</svelte:head>

<section class="space-y-4">
	<h1 class="font-display text-3xl font-semibold uppercase text-white md:text-4xl">
		Abdelilah Ouaadouch
	</h1>
</section>

<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl"><span>$</span> git log --stat</h2>
	<div class="corner-brackets bg-[#131313] p-5">
		{#await props.data.githubContributions}
			<p class="mb-4 text-white">
				Total Contributions in {props.data.year}:
				<span class="font-semibold text-gray-400">...</span>
			</p>
			<div class="text-gray-400">Loading contributions...</div>
		{:then contributions}
			<p class="mb-4 text-white">
				Total Contributions in {props.data.year}:
				<span class="font-semibold text-green-400">
					{contributions?.totalGH ?? 0}
				</span>
			</p>
			{#if contributions}
				<GithubGraph data={contributions} year={props.data.year} />
			{:else}
				<div class="text-gray-400">Unable to load contributions</div>
			{/if}
		{:catch}
			<p class="mb-4 text-white">
				Total Contributions in {props.data.year}:
				<span class="font-semibold text-gray-400">0</span>
			</p>
			<div class="text-gray-400">Unable to load contributions</div>
		{/await}
	</div>
</section>

<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl"><span>$</span> ls ./projects</h2>
	<div class="space-y-4">
		{#each props.data.featuredProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
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
	All Data - Prerendered
</footer>
