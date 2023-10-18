import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = "Mahabubul's Portfolio";

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
	return Icons.GitHub;
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'MAHABUBUL',
	lastName: 'HASAN',
	description:
		`I am a Software Engineer with a Bachelor's degree in Computer Science and Engineering. My professional
		experience primarily involves leveraging modern technologies to create scalable back-end solutions. I am
		enthusiastic about tackling exciting challenges and solving complex software engineering problems.`,
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/mahabubul470' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/mahabubul470/'
		},
		{
			platform: Platform.StackOverflow,
			link: 'https://stackoverflow.com/users/19465483/mahabubul-hasan'
		},
		{
			platform: Platform.Email,
			link: 'mahabubul470@gmail.com'
		},
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
