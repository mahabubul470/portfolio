import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience, type Link } from './types';

const AdorshoPranisheba: Link = {
	to: 'https://adorsho-pranisheba.com/',
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
		period: { from: new Date() },
		skills: getSkills('python','django','fastapi','flask'),
		name: 'Software Engineer',	
		color: '#ffffff',
		links: [AdorshoPranisheba],
		logo: Assets.Unknown,
		shortDescription: ''
	},

	
];

export default MY_EXPERIENCES;
