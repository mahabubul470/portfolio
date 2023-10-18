<script>
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import { RESUME } from '$lib/params';
	import PdfViewer from 'svelte-pdf';
	const { item, title } = RESUME;
</script>

<CommonPage {title}>
	<!-- <div class="resume">
		{#if item}
			<a href={item}>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div> -->

	<PdfViewer url="https://doc-0o-7s-docs.googleusercontent.com/docs/securesc/nkaossn4frsvt8h4ki78q3lishtfsv69/3etdc38ggh3ddm01qvtr9ckis96ff2a7/1697634675000/17300144651449031440/17300144651449031440/1xPk2qO7QySpQGgtz3nlUlEGFHwBGCJzi?ax=AI0foUpThvXDC_-zmfkfqdOeQjsvN1IEp4WEsj_natG1avTD7gUmDSR59rfupPD9U8W-dwfWMqGeJWYNNLbrNfeT7oy1QceKlGyDGQcme62qJv861O5zQTlDxFQMwFPIAPhQ3no7YrX-tlDhPy02kGMVRSut_37q6pExaD7iDEb4FUsY3mPX_F0-Pr4MMNfZuPjEh-TyZPdvUeeVmjYE6s3D7_jSm-a4Hd9NtHwb6wgwoUA4TEz_dtPu6s4iP3BQ-eVDtsj8i8ncT60VnYy3JhbHc-QSaB2xIHhq-USP131rA_X69RoY6tls4j1pCt9zl7Mp0-Y1Y3TG2K4AS_djfcelZ48-6c6dZgWgMUw_IFGuvDcHQSWsoffKimUA6BWa26hgODi7DMf3e-p1vjSg_zNM3Em0T2F9tKSiQX96VUJLlXUDL4I7d5Gq-Ro0QiPXvYn0mB3NRyOoaBTqTjvGX4WIE1vlTeHJbn__0bwP64m2IIYrravq8C8nafEggsYLLoq_wqTCDmAVGJBpdHnoAQ0cqEPxdy49AhB9Ecc2eZfAjM9IhbqJLjtLSY51VTRzvwpfzEiowaCEVRIjihquRnHXztQ3RRS3nTt8H1PsqcFR4cS-JqapNjUV-AHvOzY_mzZc-mMqLUIAtMDIlwuHoDJpWL_hMKfOFIHrFCC4M6n-VkQ_EpcdPWlwqRPunm7iyfyR4jc23FSAQTSqCuNMS9-7kWy3hG6wW1uF7quo2h5IBSLB4VKTmCQbtTojpURhHW4fSfxFlqTz5VKRWhRnpj3PyHxfqlN4EQnj5rmjuOyueX4q1dYKGDHKsANFOiUFWO5rvEAYqlG22XQyQGN5VR1B4Wc7HyuUwxJq0nX6wmoP_FNOLlI0m_uRC5NyvT-zVgJB0X0Eoghj03fsICHeBKV51ic2Xq7uODq9Cr0&uuid=66edc194-ae87-4f94-aa50-8e27c7310dcf&authuser=0" />



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
