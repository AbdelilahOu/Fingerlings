<script>
	const skills = ['Golang', 'Rust', 'TypeScript', 'Next.js', 'Tauri'];
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
			<span style="display: flex; color: #60a5fa; font-size: 24px;">$ whoami</span>
		</div>

		<div style="display: flex; font-size: 64px; font-weight: 600; color: #ffffff; line-height: 1.1;">
			Abdelilah Ouaadouch
		</div>

		<div style="display: flex; font-size: 32px; color: #a3a3a3; margin-top: 12px;">
			Fullstack Developer
		</div>

		<div style="display: flex; font-size: 24px; color: #737373; margin-top: 16px; line-height: 1.4;">
			Building fast, reliable systems with Go, Rust, and TypeScript
		</div>

		<div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px;">
			{#each skills as skill}
				<div style="display: flex; background-color: #262626; padding: 10px 20px; font-size: 24px; color: #d4d4d4;">
					{skill}
				</div>
			{/each}
		</div>

		<div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 32px; border-top: 1px solid #262626;">
			<span style="display: flex; font-size: 24px; color: #ffffff; font-weight: 600;">ar7al.com</span>
			<span style="display: flex; font-size: 24px; color: #737373;">@AbdelilahOu</span>
		</div>
	</div>
</div>
