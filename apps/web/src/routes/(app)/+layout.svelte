<script lang="ts">
    import { onMount } from 'svelte';
    import { PUBLIC_SERVER_URL } from '$env/static/public';
    import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();

	type WebMcpTool = {
		name: string;
		title: string;
		description: string;
		inputSchema?: Record<string, unknown>;
		annotations?: {
			readOnlyHint?: boolean;
		};
		execute: (input: Record<string, unknown>) => Promise<unknown> | unknown;
	};

	onMount(() => {
		const modelContext = (window.navigator as Navigator & {
			modelContext?: {
				provideContext?: (context: { tools: WebMcpTool[] }) => void;
				registerTool?: (tool: WebMcpTool) => void;
			};
		}).modelContext as
			| {
					provideContext?: (context: { tools: WebMcpTool[] }) => void;
					registerTool?: (tool: WebMcpTool) => void;
			  }
			| undefined;

		if (!modelContext) return;

		const tools: WebMcpTool[] = [
			{
				name: 'open-home',
				title: 'Open Home',
				description: 'Navigate to the homepage.',
				inputSchema: {
					type: 'object',
					properties: {},
					additionalProperties: false
				},
				annotations: {
					readOnlyHint: false
				},
				execute: async () => {
					window.location.assign('/');
					return { ok: true, url: '/' };
				}
			},
			{
				name: 'open-section',
				title: 'Open Section',
				description: 'Navigate to a public section of the portfolio.',
				inputSchema: {
					type: 'object',
					properties: {
						section: {
							type: 'string',
							enum: ['blog', 'career', 'projects']
						}
					},
					required: ['section'],
					additionalProperties: false
				},
				annotations: {
					readOnlyHint: false
				},
				execute: async (input) => {
					const section = typeof input.section === 'string' ? input.section : 'blog';
					const url = `/${section}`;

					window.location.assign(url);
					return { ok: true, url };
				}
			},
			{
				name: 'open-contact',
				title: 'Open Contact',
				description: 'Open a contact channel for Abdelilah Ouaadouch.',
				inputSchema: {
					type: 'object',
					properties: {
						channel: {
							type: 'string',
							enum: ['email', 'linkedin', 'github', 'x']
						}
					},
					required: ['channel'],
					additionalProperties: false
				},
				annotations: {
					readOnlyHint: false
				},
				execute: async (input) => {
					const channel = typeof input.channel === 'string' ? input.channel : 'email';
					const targets: Record<string, string> = {
						email: 'mailto:abdelilah4dev@gmail.com',
						linkedin: 'https://www.linkedin.com/in/ar7al/',
						github: 'https://github.com/AbdelilahOu',
						x: 'https://x.com/Abdelilah4dev'
					};
					const url = targets[channel] ?? targets.email;

					window.open(url, '_blank', 'noopener,noreferrer');
					return { ok: true, url };
				}
			},
			{
				name: 'open-api-docs',
				title: 'Open API Docs',
				description: 'Open the API documentation and discovery surface.',
				inputSchema: {
					type: 'object',
					properties: {},
					additionalProperties: false
				},
				annotations: {
					readOnlyHint: false
				},
				execute: async () => {
					const url = `${PUBLIC_SERVER_URL}/api-reference`;
					window.open(url, '_blank', 'noopener,noreferrer');
					return { ok: true, url };
				}
			}
		];

		if (typeof modelContext.provideContext === 'function') {
			modelContext.provideContext({ tools });
			return;
		}

		if (typeof modelContext.registerTool === 'function') {
			for (const tool of tools) {
				modelContext.registerTool(tool);
			}
		}
	});
</script>

<div class="min-h-screen w-screen bg-[#0d0d0d] px-4 flex flex-col">
	<div class="m-auto w-full max-w-3xl min-h-screen h-full flex flex-col">
		<Navbar />
		<div class="space-y-8 flex-1 mb-8">
		    {@render children()}
		</div>
		<Footer/>
	</div>
</div>
