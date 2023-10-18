<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';

	const { item, title } = RESUME;
  	import { onMount } from "svelte";

	let PdfViewer;

	onMount(async () => {
		const module = await import("svelte-pdf");
		PdfViewer = module.default;
	});

</script>

<CommonPage {title}>
	<div class="resume">
		<svelte:component this={PdfViewer} url="//raw.githubusercontent.com/mahabubul470/portfolio/master/resume.pdf"/>
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>

