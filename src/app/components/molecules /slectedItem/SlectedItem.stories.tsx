import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SelectedItem from './SlectedItem';

type T = typeof SelectedItem;

export default {
	title: 'molecules/SelectedItem',
	component: SelectedItem,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
	render: () => {
		const [count, setCount] = useState(0);
		const [isPlaying, setIsPlaying] = useState(false);
		const togglePlay = () => setIsPlaying(!isPlaying);
		const handleIncrement = () => setCount((pre) => pre + 1);
		const handleDecriment = () => setCount((pre) => (pre > 0 ? pre - 1 : 0));

		return (
			<div className="w-[500px]">
				<SelectedItem
					num={count}
					title="female"
					description="女性の声を出す。"
					isPlaying={isPlaying}
					togglePlay={togglePlay}
					handleIncrement={handleIncrement}
					handleDecriment={handleDecriment}
				/>
			</div>
		);
	},
};
