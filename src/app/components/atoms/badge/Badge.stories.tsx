import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

type T = typeof Badge;

export default {
	title: 'atoms/Badge',
	component: Badge,
	tags: ['autodocs'],
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};

export const Small: StoryObj<T> = {
	args: {
		size: 'sm',
	},
};

export const Medium: StoryObj<T> = {
	args: {
		size: 'md',
	},
};
