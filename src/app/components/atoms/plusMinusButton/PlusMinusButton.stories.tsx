import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';
import PulsMinusButton from './PulsMinusButton';

type T = typeof PulsMinusButton;

export default {
	title: 'atoms/PlusMinusButton',
	component: PulsMinusButton,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
	render: () => {
		const [isPlaying, setIsPlaying] = useState(false);
		const [count, setCount] = useState(0);

		const handleIncrement = () => setCount((pre) => pre + 1);

		const handleDecrement = () => setCount((pre) => (pre > 0 ? pre - 1 : 0));

		const togglePlay = () => setIsPlaying(!isPlaying);

		return (
			<Fragment>
				<PulsMinusButton
					isPlaying={isPlaying}
					handleIncrement={handleIncrement}
					handleDecriment={handleDecrement}
					togglePlay={togglePlay}
				/>
				<div>{count}</div>
			</Fragment>
		);
	},
};
