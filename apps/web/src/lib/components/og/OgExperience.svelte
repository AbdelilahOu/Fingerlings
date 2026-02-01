<script>
	let { title = '', company = '', description = '', technologies = [] } = $props();
</script>

<div
	style="
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: #131313;
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
			background-color: #131313;
			padding: 48px;
		"
	>
		<div style="display: flex; position: absolute; top: 0; left: 0; width: 24px; height: 24px; border-top: 3px solid #525252; border-left: 3px solid #525252;"></div>
		<div style="display: flex; position: absolute; top: 0; right: 0; width: 24px; height: 24px; border-top: 3px solid #525252; border-right: 3px solid #525252;"></div>
		<div style="display: flex; position: absolute; bottom: 0; left: 0; width: 24px; height: 24px; border-bottom: 3px solid #525252; border-left: 3px solid #525252;"></div>
		<div style="display: flex; position: absolute; bottom: 0; right: 0; width: 24px; height: 24px; border-bottom: 3px solid #525252; border-right: 3px solid #525252;"></div>

		<div style="display: flex; margin-bottom: 24px;">
			<span style="display: flex; color: #60a5fa; font-size: 24px;">$ cat ./experience</span>
		</div>

		<div style="display: flex; margin-bottom: 16px;">
			<span style="display: flex; background-color: #3b82f6; color: #ffffff; padding: 6px 16px; font-size: 22px; font-weight: 600;">
				EXPERIENCE
			</span>
		</div>

		<div style="display: flex; font-size: 48px; font-weight: 600; color: #ffffff; line-height: 1.2;">
			{title}
		</div>

		<div style="display: flex; font-size: 32px; color: #60a5fa; margin-top: 8px;">
			{company}
		</div>

		{#if description}
			<div style="display: flex; font-size: 22px; color: #a3a3a3; margin-top: 16px; line-height: 1.4;">
				{description.length > 120 ? description.slice(0, 120) + '...' : description}
			</div>
		{/if}

		{#if technologies.length > 0}
			<div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px;">
				{#each technologies.slice(0, 5) as tech}
					<div style="display: flex; background-color: #262626; padding: 8px 16px; font-size: 18px; color: #d4d4d4;">
						{tech}
					</div>
				{/each}
			</div>
		{/if}

		<div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 32px; border-top: 1px solid #262626;">
			<span style="display: flex; font-size: 24px; color: #ffffff; font-weight: 600;">ar7al.com/career</span>
			<span style="display: flex; font-size: 24px; color: #737373;">@AbdelilahOu</span>
		</div>
	</div>
</div>
