import type { Meta, StoryObj } from '@storybook/react';
import CopyButton from './CopyButton';

type T = typeof CopyButton;

export default {
	title: 'atoms/CopyButton',
	component: CopyButton,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
	args: {
		text: 'こんばんは',
	},
};
