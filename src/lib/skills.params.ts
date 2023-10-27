import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'python',
		color: 'blue',
		description: 'Python is an interpreted, high-level and general-purpose programming language. Python\'s design philosophy emphasizes code readability with its notable use of significant indentation.',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'django',
		color: 'white',
		description: 'Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern.',
		logo: Assets.Django,
		name: 'Django'
	}),
	s({
		slug: 'docker',
		color: 'blue',
		description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'mysql',
		color: 'blue',
		description: 'MySQL is an open-source relational database management system.',
		logo: Assets.MySQL,
		name: 'MySQL'
	}),
	s({
		slug: 'redis',
		color: 'red',
		description: 'Redis is an in-memory data structure project implementing a distributed, in-memory key-value database with optional durability.',
		logo: Assets.Redis,
		name: 'Redis'
	}),
	s({
		slug: 'celery',
		color: 'blue',
		description: 'Celery is an open source asynchronous task queue or job queue which is based on distributed message passing.',
		logo: Assets.Celery,
		name: 'Celery'
	}),
	s({
		slug: 'c#',
		color: 'blue',
		description: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'typescript',
		color: 'orange',
		description:
			'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),

];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
