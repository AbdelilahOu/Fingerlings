<script lang="ts">
	import BackgroundGrid from './BackgroundGrid.svelte';
	import type { Post } from '$lib/types';

	interface Props {
		post: Post;
	}

	let { post }: Props = $props();

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<BackgroundGrid>
	<a href="/blog/{post.slug}" class="block">
		<h3 class="text-lg font-medium text-white md:text-xl">{post.title}</h3>
		<p class="mt-2 text-gray-400">{post.description}</p>
		<div class="mt-3 flex items-center justify-between">
			<div class="flex flex-wrap gap-2">
				{#each post.tags as tag}
					<span class="bg-neutral-700 px-2 py-1 text-xs text-gray-300">{tag}</span>
				{/each}
			</div>
			<time class="text-sm text-gray-500">{formatDate(post.date)}</time>
		</div>
	</a>
</BackgroundGrid>
