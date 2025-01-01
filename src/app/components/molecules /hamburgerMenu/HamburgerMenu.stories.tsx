import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

type T = typeof HamburgerMenu;

export default {
	title: 'molecules/HamburgerMenu',
	component: HamburgerMenu,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
	render: () => {
		const [selectedItemList, setSelectedItemList] = useState([
			{
				id: 0,
				title: 'female',
				description: 'こんばんは',
				num: 0,
				isPlaying: false,
				audios: [
					{
						title: 'こんにちは',
						tags: ['こんばんは', 'こんばんは'],
						audioUrl: '/demo.mp3',
					},
					{
						title: 'バーセル',
						tags: ['こんばんは', 'こんばんは'],
						audioUrl: 'demo2.mp3',
					},
				],
			},
			{
				id: 1,
				title: 'male',
				description: 'こんばんは',
				num: 0,
				isPlaying: false,
				audios: [
					{
						title: 'こんにちは',
						tags: ['こんばんは', 'こんばんは'],
						audioUrl: '/demo.mp3',
					},
					{
						title: 'バーセル',
						tags: ['こんばんは', 'こんばんは'],
						audioUrl: 'demo2.mp3',
					},
				],
			},
		]);

		const handleIncrement = (id: number) => {
			const updatedList = selectedItemList.map((item) =>
				item.id === id ? { ...item, num: item.num + 1 } : item,
			);
			setSelectedItemList(updatedList);
		};

		const handleDecrement = (id: number) => {
			const updatedList = selectedItemList.map((item) =>
				item.id === id
					? { ...item, num: item.num > 0 ? item.num - 1 : item.num }
					: item,
			);
			setSelectedItemList(updatedList);
		};

		const togglePlay = (id: number) => {
			const updatedList = selectedItemList.map((item) =>
				item.id === id
					? { ...item, isPlaying: !item.isPlaying }
					: { ...item, isPlaying: false },
			);
			setSelectedItemList(updatedList);
		};

		const totalNum = selectedItemList.reduce((sum, item) => sum + item.num, 0);

		const togglePlayPause = (id: number) => {
			setSelectedItemList((prevList) =>
				prevList.map((item) =>
					item.id === id
						? { ...item, isPlaying: !item.isPlaying }
						: { ...item, isPlaying: false },
				),
			);
		};

		return (
			<HamburgerMenu
				title="Voice Tune"
				tips="声質を調整します。"
				emoji="😃"
				num={totalNum}
				selectedItemList={selectedItemList}
				handleIncrement={handleIncrement}
				handleDecrement={handleDecrement}
				togglePlay={togglePlay}
				togglePlayPasue={togglePlayPause}
			/>
		);
	},
};
