<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';
	import PdfViewer from 'svelte-pdf';
	const { item, title } = RESUME;
</script>

<CommonPage {title}>
	<div class="resume">
		<PdfViewer url="https://raw.githubusercontent.com/mahabubul470/portfolio/master/resume.pdf" />
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
