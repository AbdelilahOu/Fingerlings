<script lang="ts">
	const testPages = [
		{ path: 'static-prerender', label: 'Static - Prerender', desc: 'No data fetching' },
		{ path: 'static-ssr', label: 'Static - SSR', desc: 'No data fetching' },
		{ path: 'projects-prerender', label: 'Projects - Prerender', desc: 'Projects data only' },
		{ path: 'projects-ssr', label: 'Projects - SSR', desc: 'Projects data only' },
		{ path: 'blog-prerender', label: 'Blog - Prerender', desc: 'Blog posts only' },
		{ path: 'blog-ssr', label: 'Blog - SSR', desc: 'Blog posts only' },
		{ path: 'github-prerender', label: 'GitHub - Prerender', desc: 'GitHub contributions only' },
		{ path: 'github-ssr', label: 'GitHub - SSR', desc: 'GitHub contributions only' },
		{ path: 'all-prerender', label: 'All Data - Prerender', desc: 'Projects + Blog + GitHub' },
		{ path: 'all-ssr', label: 'All Data - SSR', desc: 'Projects + Blog + GitHub' }
	];
</script>

<svelte:head>
	<title>Rendering Test Pages - Abdelilah Ouaadouch</title>
	<meta
		name="description"
		content="Test pages for debugging prerender vs SSR rendering behavior"
	/>
	<meta
		name="keywords"
		content="test, rendering, prerender, SSR, debugging, performance"
	/>
	<link rel="canonical" href={"https://personal-website.ar7al.workers.dev/test"} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={"https://personal-website.ar7al.workers.dev/test"} />
	<meta property="og:title" content="Rendering Test Pages - Abdelilah Ouaadouch" />
	<meta
		property="og:description"
		content="Test pages for debugging prerender vs SSR rendering behavior"
	/>
	<meta property="og:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />
	<meta property="og:locale" content="en" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={"https://personal-website.ar7al.workers.dev/test"} />
	<meta name="twitter:title" content="Rendering Test Pages - Abdelilah Ouaadouch" />
	<meta
		name="twitter:description"
		content="Test pages for debugging prerender vs SSR rendering behavior"
	/>
	<meta name="twitter:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta name="twitter:creator" content="@Abdelilah4dev" />
</svelte:head>

<section class="space-y-4">
	<h1 class="font-display text-3xl font-semibold uppercase text-white md:text-4xl">
		Rendering Test Pages
	</h1>
	<p class="text-base text-gray-300">
		Click on any variant to test prerender vs SSR behavior
	</p>
</section>

<section class="space-y-4">
	<div class="grid gap-4 md:grid-cols-2">
		{#each testPages as page}
			<a
				href="/test/{page.path}"
				class="corner-brackets group block bg-[#131313] p-4 transition-colors hover:bg-[#1a1a1a]"
			>
				<h3 class="font-semibold text-white transition-colors group-hover:text-green-400">
					{page.label}
				</h3>
				<p class="text-sm text-gray-400">{page.desc}</p>
			</a>
		{/each}
	</div>
</section>

<footer
	class="font-display m-auto my-4 flex h-11 items-center justify-center text-center text-sm uppercase text-white md:text-md"
>
	Test variants for debugging rendering issues
</footer>
