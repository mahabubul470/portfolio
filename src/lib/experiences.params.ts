import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience, type Link } from './types';

const AdorshoPranisheba: Link = {
	to: 'https://www.pranisheba.com.bd/',
	label: 'Adorsho Pranisheba',
	newTab: true
};

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'software-engineer',
		company: 'Adorsho Pranisheba',
		description: 'A platform for cattle identiﬁcation, well-being monitoring, farm management, insurance, loan and veterinary services.',
		contract: ContractType.FullTime,
		type: 'Software Engineer',
		location: 'Dhaka, Bangladesh',
		period: { from: new Date('01/01/2023'), to: new Date() },
		skills: getSkills('python','django','django-rest-framework','mysql','celery','redis','docker'),
		name: 'Software Engineer',	
		color: '#ffffff',
		links: [AdorshoPranisheba],
		logo: Assets.Pranisheba,
		shortDescription: ''
	},
	{
		slug: 'software-engineer-intern',
		company: 'Adorsho Pranisheba',
		description: 'A platform for cattle identiﬁcation, well-being monitoring, farm management, insurance, loan and veterinary services.',
		contract: ContractType.Internship,
		type: 'Software Engineer Intern',
		location: 'Dhaka, Bangladesh',
		period: { from: new Date('10/01/2022'), to: new Date('12/31/2022') },
		skills: getSkills('python','django','mysql'),
		name: 'Software Engineer Intern',	
		color: '#ffffff',
		links: [AdorshoPranisheba],
		logo: Assets.Pranisheba,
		shortDescription: ''
	},

];

export default MY_EXPERIENCES;
