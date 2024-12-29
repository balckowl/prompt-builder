import type { Meta, StoryObj } from '@storybook/react';
import ParamSelectButton from './ParamSelectButton';

type T = typeof ParamSelectButton;

export default {
	title: 'atoms/ParamSelectButton',
	component: ParamSelectButton,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
	args: {
		emoji: '🥺',
		title: 'Voice Tune',
	},
};
