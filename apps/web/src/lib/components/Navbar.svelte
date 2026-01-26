<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/blog', label: 'Blog' }
	];

</script>

<nav class="flex items-center gap-6 text-sm md:text-base">
	{#each links as link}
		<a
			href={link.href}
			class="transition-colors {page.url.pathname === link.href
				? 'text-white border-white'
				: 'text-gray-400 hover:text-white'}"
		>
			{link.label}
		</a>
	{/each}
</nav>
