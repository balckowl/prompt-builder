import { useStore } from '@/store/store';
import type { Meta, StoryObj } from '@storybook/react';
import HamburgerMenu from './HamburgerMenu';

type T = typeof HamburgerMenu;

export default {
	title: 'molecules/HamburgerMenu',
	component: HamburgerMenu,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
	render: () => {
		const {
			selectedItemList,
			togglePlay,
			togglePlayPause,
			handleDecrement,
			handleIncrement,
			calculateTotalNum,
		} = useStore();

		return (
			<HamburgerMenu
				title="Voice Tune"
				tips="声質を調整します。"
				emoji="😃"
				num={calculateTotalNum(selectedItemList[0].list)}
				selectedItemList={selectedItemList[0].list}
				handleIncrement={handleIncrement}
				handleDecrement={handleDecrement}
				togglePlay={togglePlay}
				togglePlayPasue={togglePlayPause}
			/>
		);
	},
};
