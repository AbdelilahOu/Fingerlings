<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let props: {
		data: {
			featuredProjects: Project[];
		};
	} = $props();

	const languages = ['Golang', 'Rust', 'Typescript', 'Javascript', 'Html', 'Css'];
</script>

<svelte:head>
	<title>Test - Projects SSR - Abdelilah Ouaadouch</title>
	<meta name="description" content="Test variant: Projects data with SSR mode." />
	<meta name="keywords" content="test, SSR, projects, rendering" />
	<link rel="canonical" href={"https://personal-website.ar7al.workers.dev/test/projects-ssr"} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={"https://personal-website.ar7al.workers.dev/test/projects-ssr"} />
	<meta property="og:title" content="Test - Projects SSR - Abdelilah Ouaadouch" />
	<meta property="og:description" content="Test variant: Projects data with SSR mode." />
	<meta property="og:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />
	<meta property="og:locale" content="en" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={"https://personal-website.ar7al.workers.dev/test/projects-ssr"} />
	<meta name="twitter:title" content="Test - Projects SSR - Abdelilah Ouaadouch" />
	<meta name="twitter:description" content="Test variant: Projects data with SSR mode." />
	<meta name="twitter:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta name="twitter:creator" content="@Abdelilah4dev" />
</svelte:head>

<section class="space-y-4">
	<h1 class="font-display text-3xl font-semibold uppercase text-white md:text-4xl">
		Abdelilah Ouaadouch
	</h1>
</section>

<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl"><span>$</span> ls ./projects</h2>
	<div class="space-y-4">
		{#each props.data.featuredProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<footer class="font-display m-auto my-4 flex h-11 items-center justify-center text-center text-sm uppercase text-white md:text-md">
	Projects Only - SSR
</footer>
