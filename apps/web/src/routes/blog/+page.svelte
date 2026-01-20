<script lang="ts">
	const title = 'Blog - Abdelilah Ouaadouch';
	const description =
		'Technical articles about Go, Rust, TypeScript, and fullstack development. Tips, tutorials, and insights from a fullstack developer.';
	const url = 'https://ar7al.com/blog';

	// Placeholder for future blog posts
	const posts: {
		slug: string;
		title: string;
		excerpt: string;
		date: string;
		tags: string[];
	}[] = [];
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
	<meta property="og:image" content="/og.png" />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/og.png" />
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

<div class="min-h-screen w-screen bg-[#0d0d0d] px-4 py-8">
	<div class="m-auto w-full max-w-3xl space-y-8">
		<!-- Back Navigation -->
		<nav>
			<a
				href="/"
				class="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
			>
				<span>&larr;</span>
				<span>Back to Home</span>
			</a>
		</nav>

		<!-- Blog Header -->
		<header class="space-y-4">
			<h1 class="font-display text-3xl font-semibold text-white md:text-4xl">
				Blog
				<span class="block text-xl font-normal normal-case text-gray-300 md:text-2xl">
					Technical Articles & Tutorials
				</span>
			</h1>
			<p class="text-lg text-gray-300">
				Thoughts on Go, Rust, TypeScript, and building software that works. Deep dives into
				technical challenges, tutorials, and lessons learned from real projects.
			</p>
		</header>

		<!-- Blog Posts -->
		<section class="space-y-4">
			<h2 class="text-2xl font-bold text-white">
				<span>$</span> ls ./posts
			</h2>

			{#if posts.length > 0}
				<div class="space-y-4">
					{#each posts as post}
						<article class="corner-brackets bg-[#131313] p-5 transition-colors hover:bg-[#1a1a1a]">
							<a href="/blog/{post.slug}" class="block">
								<h3 class="text-xl font-medium text-white">{post.title}</h3>
								<p class="mt-2 text-gray-400">{post.excerpt}</p>
								<div class="mt-3 flex items-center justify-between">
									<div class="flex gap-2">
										{#each post.tags as tag}
											<span class="bg-neutral-700 px-2 py-1 text-xs text-gray-300">{tag}</span>
										{/each}
									</div>
									<time class="text-sm text-gray-500">{post.date}</time>
								</div>
							</a>
						</article>
					{/each}
				</div>
			{:else}
				<div class="corner-brackets bg-[#131313] p-8 text-center">
					<p class="text-gray-400">No posts yet. Check back soon for technical articles and tutorials.</p>
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
			<h2 class="text-2xl font-bold text-white">
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
				<span>&larr;</span>
				<span>Back to Home</span>
			</a>
		</footer>
	</div>
</div>
