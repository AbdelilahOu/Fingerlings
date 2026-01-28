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
	<article>
		<a href="/blog/{post.slug}" class="block" title="{post.title} - {post.description}">
			<h3 class="text-lg md:text-xl font-medium text-white hover:text-gray-300 transition-colors">
				{post.title}
			</h3>
		</a>
		<p class="mt-2 text-base md:text-lg text-gray-400">
			{post.description}
		</p>
		<div class="mt-3 flex flex-wrap gap-2">
			{#each post.tags as tag}
				<span class="bg-neutral-700 px-2 py-1 text-xs text-gray-300">
					{tag}
				</span>
			{/each}
		</div>
		<div class="mt-3 flex items-center justify-between">
			<a
				href="/blog/{post.slug}"
				title="{post.title} blog post"
				class="text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
			>
				Blog Post
			</a>
			<time class="text-sm text-gray-500">{formatDate(post.date)}</time>
		</div>
	</article>
</BackgroundGrid>
