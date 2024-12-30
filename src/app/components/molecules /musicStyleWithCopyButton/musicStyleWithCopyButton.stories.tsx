import type { Meta, StoryObj } from '@storybook/react';
import MusicStyleWithCopyButton from './musicStyleWithCopyButton';

type T = typeof MusicStyleWithCopyButton;

export default {
	title: 'molecules/MusicStyleWithCopyButton',
	component: MusicStyleWithCopyButton,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
	args: {
		text: 'J-POP, Female, male',
	},
};
