<script lang="ts">
	import type { ContributionData } from '$lib/types';
	import GithubGraph from '$lib/components/GithubGraph.svelte';

	let props: {
		data: {
			githubContributions: Promise<ContributionData | null>;
			year: number;
		};
	} = $props();
</script>

<svelte:head>
	<title>Test - GitHub SSR - Abdelilah Ouaadouch</title>
	<meta name="description" content="Test variant: GitHub contributions data with SSR mode." />
	<meta name="keywords" content="test, SSR, github, contributions, rendering" />
	<link rel="canonical" href={"https://personal-website.ar7al.workers.dev/test/github-ssr"} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={"https://personal-website.ar7al.workers.dev/test/github-ssr"} />
	<meta property="og:title" content="Test - GitHub SSR - Abdelilah Ouaadouch" />
	<meta property="og:description" content="Test variant: GitHub contributions data with SSR mode." />
	<meta property="og:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />
	<meta property="og:locale" content="en" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={"https://personal-website.ar7al.workers.dev/test/github-ssr"} />
	<meta name="twitter:title" content="Test - GitHub SSR - Abdelilah Ouaadouch" />
	<meta name="twitter:description" content="Test variant: GitHub contributions data with SSR mode." />
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

<footer class="font-display m-auto my-4 flex h-11 items-center justify-center text-center text-sm uppercase text-white md:text-md">
	GitHub Only - SSR
</footer>
