<script lang="ts">
	const languages = ['Golang', 'Rust', 'Typescript', 'Javascript', 'Html', 'Css'];
	const frameworks = [
		'Next.js', 'Tauri', 'Hono.js', 'Nuxt.js', 'Gin', 'Chi', 'Actix', 'Express.js', 'Tailwindcss'
	];
	const tools = ['Docker', 'Git', 'Github', 'Postman'];
</script>

<svelte:head>
	<title>Test - Static Prerender - Abdelilah Ouaadouch</title>
	<meta name="description" content="Test variant: Static content with prerender mode. No data fetching." />
	<meta name="keywords" content="test, prerender, static, rendering" />
	<link rel="canonical" href={"https://personal-website.ar7al.workers.dev/test/static-prerender"} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={"https://personal-website.ar7al.workers.dev/test/static-prerender"} />
	<meta property="og:title" content="Test - Static Prerender - Abdelilah Ouaadouch" />
	<meta property="og:description" content="Test variant: Static content with prerender mode. No data fetching." />
	<meta property="og:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />
	<meta property="og:locale" content="en" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={"https://personal-website.ar7al.workers.dev/test/static-prerender"} />
	<meta name="twitter:title" content="Test - Static Prerender - Abdelilah Ouaadouch" />
	<meta name="twitter:description" content="Test variant: Static content with prerender mode. No data fetching." />
	<meta name="twitter:image" content={`https://personal-website.ar7al.workers.dev/og/image/og.png`} />
	<meta name="twitter:creator" content="@Abdelilah4dev" />
</svelte:head>

<section class="space-y-4">
	<h1 class="font-display text-3xl font-semibold uppercase text-white md:text-4xl">
		Abdelilah Ouaadouch
		<span class="block text-xl font-normal normal-case text-gray-300 md:text-2xl">
			Fullstack Developer
		</span>
	</h1>
</section>

<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl"><span>$</span> cat ./skills</h2>
	<div class="corner-brackets flex flex-wrap gap-5 bg-[#131313] p-5 text-sm text-white md:text-base">
		{#each languages as language}
			<span class="w-full flex-1 whitespace-nowrap border px-2 py-1 text-center text-white">
				- {language} -
			</span>
		{/each}
	</div>
	<div class="corner-brackets flex flex-wrap gap-5 bg-[#131313] p-5 text-sm text-white md:text-base">
		{#each frameworks as framework}
			<span class="w-full flex-1 whitespace-nowrap border px-2 py-1 text-center text-white">
				- {framework} -
			</span>
		{/each}
	</div>
	<div class="corner-brackets flex flex-wrap gap-5 bg-[#131313] p-5 text-sm text-white md:text-base">
		{#each tools as tool}
			<span class="w-full flex-1 whitespace-nowrap border px-2 py-1 text-center text-white">
				- {tool} -
			</span>
		{/each}
	</div>
</section>

<footer class="font-display m-auto my-4 flex h-11 items-center justify-center text-center text-sm uppercase text-white md:text-md">
	Static Content - Prerendered
</footer>
