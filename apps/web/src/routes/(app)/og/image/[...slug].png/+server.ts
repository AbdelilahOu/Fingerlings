import { ImageResponse } from '@ethercorps/sveltekit-og';
import { CustomFont, resolveFonts } from '@ethercorps/sveltekit-og/fonts';
import OgHome from "$lib/components/og/OgHome.svelte";
import OgBlog from "$lib/components/og/OgBlog.svelte";
import OgBlogList from "$lib/components/og/OgBlogList.svelte";
import OgProject from "$lib/components/og/OgProject.svelte";
import OgProjects from "$lib/components/og/OgProjects.svelte";
import fontSource from "$lib/assets/fonts/JetBrainsMono-Regular.ttf";
import { read } from '$app/server';


const fontData = read(fontSource).arrayBuffer();

export const GET = async ({ params, url }) => {
	const slug = params.slug.split('/');
	const type = slug[0] || 'home';
	const identifier = slug[1] || '';

	const title = url.searchParams.get('title') || '';
	const description = url.searchParams.get('description') || '';
	const tagsParam = url.searchParams.get('tags');
	const techParam = url.searchParams.get('tech');

	const tags = tagsParam ? tagsParam.split(',').filter(Boolean) : [];
	const tech = techParam ? techParam.split(',').filter(Boolean) : [];

	const fonts = [
		new CustomFont(
			'JetBrainsMono',
			fontData,
			{ weight: 400 }
		)
	];

	let component = OgHome;
	let props: Record<string, unknown> = {};

	switch (type) {
		case 'blog':
			component = OgBlog;
			props = { title, tags };
			break;
		case 'blog-list':
			component = OgBlogList;
			props = {};
			break;
		case 'project':
			component = OgProject;
			props = { title, description, tech };
			break;
		case 'projects-list':
			component = OgProjects;
			props = {};
			break;
		case 'home':
		default:
			component = OgHome;
			props = {};
	}

	return new ImageResponse(
		component,
		{
			width: 1200,
			height: 630,
			fonts: await resolveFonts(fonts)
		},
		props
	);
};
