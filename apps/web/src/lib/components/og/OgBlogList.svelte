<script>
	const topics = ['Go/Golang', 'Rust', 'TypeScript', 'APIs', 'System Design'];
</script>

<div
	style="
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: #101010;
		padding: 15px;
		font-family: JetBrains Mono, monospace;
	"
>
	<div
		style="
			display: flex;
			flex-direction: column;
			flex: 1;
			position: relative;
			background-color: #101010;
			padding: 48px;
		"
	>
		<div style="display: flex; position: absolute; top: 0; left: 0; width: 24px; height: 24px; border-top: 3px solid #525252; border-left: 3px solid #525252;"></div>
		<div style="display: flex; position: absolute; top: 0; right: 0; width: 24px; height: 24px; border-top: 3px solid #525252; border-right: 3px solid #525252;"></div>
		<div style="display: flex; position: absolute; bottom: 0; left: 0; width: 24px; height: 24px; border-bottom: 3px solid #525252; border-left: 3px solid #525252;"></div>
		<div style="display: flex; position: absolute; bottom: 0; right: 0; width: 24px; height: 24px; border-bottom: 3px solid #525252; border-right: 3px solid #525252;"></div>

		<div style="display: flex; margin-bottom: 24px;">
			<span style="display: flex; color: #60a5fa; font-size: 24px;">$ ls ./posts</span>
		</div>

		<div style="display: flex; font-size: 64px; font-weight: 600; color: #ffffff; line-height: 1.1;">
			Blog
		</div>

		<div style="display: flex; font-size: 28px; color: #a3a3a3; margin-top: 12px;">
			Technical Articles & Tutorials
		</div>

		<div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 32px;">
			{#each topics as topic}
				<div style="display: flex; background-color: #262626; padding: 12px 24px; font-size: 22px; color: #d4d4d4;">
					{topic}
				</div>
			{/each}
		</div>

		<div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 32px; border-top: 1px solid #262626;">
			<span style="display: flex; font-size: 24px; color: #ffffff; font-weight: 600;">ar7al.com/blog</span>
			<span style="display: flex; font-size: 24px; color: #737373;">@AbdelilahOu</span>
		</div>
	</div>
</div>
