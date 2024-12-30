import type { Meta, StoryObj } from '@storybook/react';
import ParamSelectButtonWithBadge from './paramSelectButtonWithBadge';

type T = typeof ParamSelectButtonWithBadge;

export default {
	title: 'molecules/ParamSelectButtonWithBadge',
	component: ParamSelectButtonWithBadge,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
	render: () => {
		return (
			<div>
				<ParamSelectButtonWithBadge
					title="Voice Tone"
					emoji="😀"
					num={2}
					onClick={() => alert('クリックされました')}
				/>
			</div>
		);
	},
};
