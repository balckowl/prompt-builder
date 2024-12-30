import type { Meta, StoryObj } from '@storybook/react';
import CategoryTitleWithBadge from './CategoryTitleWithBadge';

type T = typeof CategoryTitleWithBadge;

export default {
	title: 'molecules/CategoryTitleWithBadge',
	component: CategoryTitleWithBadge,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
	args: {
		num: 2,
		title: 'Voice Tune',
	},
};
