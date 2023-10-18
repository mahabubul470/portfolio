import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'sp-plugin-python',
		color: '#5e95e3',
		description:
			'Shurjopay Python SDK for integrating with Shurjopay Payment Gateway.',
		shortDescription:
			`Official shurjoPay python package (plugin) for merchants or service providers to connect with shurjoPay Payment Gateway v2.1 developed and maintained by shurjoMukhi Limited.
			This plugin package can be used with any python application or framework (e.g. django, flask, FastAPI etc.).`,
		links: [{ to: 'https://github.com/shurjopay-plugins/sp-plugin-python', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Shurjopay Python SDK',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-30')
		},
		skills: getSkills('python'),
		type: 'Python Package',
	},
	{
		slug: 'sp-plugin-dotnet',
		color: '#5e95e3',
		description:
			'ShurjoPay .NET SDK for integrating with ShurjoPay Payment Gateway.',
		shortDescription:
			`Official shurjoPay .net package (plugin) for merchants or service providers to connect with shurjoPay Payment Gateway v2.1 developed and maintained by shurjoMukhi Limited.
			This plugin package can be used with .NET Standert 2.1 applications (e.g. .NET Core - MVC, Web API etc.)..`,
		links: [{ to: 'https://github.com/shurjopay-plugins/sp-plugin-dotnet', label: 'GitHub' }],
		logo: Assets.Csharp,
		name: 'Shurjopay Dotnet SDK',
		period: {
			from: new Date('2022-11-01'),
			to: new Date('2022-11-30')
		},
		skills: getSkills('c#'),
		type: 'C# Class Library',
	},
	{
		slug: 'staknet-drf',
		color: '#ff3e00',
		description:
			'A Django Rest Framework backend with Mongoengine.',
		shortDescription:
			`A Django Rest Framework backend with Mongoengine integration
			for a social media platform featuring jwt authentication on secure
			user access, and functionalities such as post creation, post liking
			and commenting, as well as create and revoke connections with
			other users.`,
		links: [{ to: 'https://github.com/mahabubul470/staknet-backend-drf', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Staknet DRF',
		period: {
			from: new Date('2023-09-01'),
		},
		skills: getSkills('python'),
		type: 'Social Media Backend',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
		]
	}
];

export default MY_PROJECTS;
