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
		slug: 'c#',
		color: 'blue',
		description: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'django',
		color: 'green',
		description: 'Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern.',
		logo: Assets.Django,
		name: 'Django'
	}),
	s({
		slug: 'fastapi',
		color: 'green',
		description: 'FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.',
		logo: Assets.FastApi,
		name: 'FastAPI'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
