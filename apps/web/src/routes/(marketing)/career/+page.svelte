<script lang="ts">
	import type { Experience } from '$lib/data/experiences';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import SkillsGrid from '$lib/components/SkillsGrid.svelte';

	let props: { data: { experiences: Experience[]; origin: string } } = $props();

	const title = 'Career - Abdelilah Ouaadouch';
	const description =
		'Professional experience as a Full Stack Engineer. Building backend systems with Go, Rust, TypeScript, and modern frameworks across healthcare, education, and enterprise applications.';
	const url = `${props.data.origin}/career`;
	const image = `${props.data.origin}/career/social.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Full Stack Engineer, Go, Golang, Rust, TypeScript, Node.js, Backend Developer, Software Engineer, Career, Experience"
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
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Abdelilah Ouaadouch's Career",
		"description": description,
		"url": url,
		"author": {
			"@type": "Person",
			"name": "Abdelilah Ouaadouch",
			"url": `${props.data.origin}/ar7al`
		}
	})}</script>`}
</svelte:head>

<!-- Career Header -->
<header class="space-y-4">
	<h1 class="font-display text-3xl font-semibold text-white md:text-4xl">
		Career
		<span class="block text-xl font-normal normal-case text-gray-300 md:text-2xl">
			Professional Experience
		</span>
	</h1>
	<p class="text-base text-gray-300 md:text-lg">
		My journey as a Full Stack Engineer, building backend systems and applications
		across healthcare, education, and enterprise domains.
	</p>
</header>

<!-- Experience List -->
<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl">
		<span>$</span> cat ./experience
	</h2>

	{#if props.data.experiences.length > 0}
		<div class="space-y-4">
			{#each props.data.experiences as experience}
				<ExperienceCard {experience} />
			{/each}
		</div>

		<div class="corner-brackets bg-[#131313] p-5 text-center">
			<p class="text-gray-400">
				Want to connect? Find me on
				<a
					href="https://www.linkedin.com/in/ar7al"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 hover:text-blue-300"
				>
					LinkedIn
				</a>
				or check out my
				<a
					href="https://github.com/AbdelilahOu"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 hover:text-blue-300"
				>
					GitHub
				</a>.
			</p>
		</div>
	{:else}
		<div class="corner-brackets bg-[#131313] p-8 text-center">
			<p class="text-gray-400">
				No experience entries yet. Check back soon.
			</p>
		</div>
	{/if}
</section>

<!-- Skills Summary -->
<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl">
		<span>$</span> cat ./skills
	</h2>
	<SkillsGrid skills={['Go/Golang', 'Rust', 'TypeScript', 'Node.js', 'React', 'Angular', 'PostgreSQL', 'Docker', 'Kafka', 'REST APIs']} />
</section>
