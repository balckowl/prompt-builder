import { useStore } from '@/store/store';
import MusicStyleWithItemButton from './MusicStyleWithItemButton';

type CategoryTag = {
	id: number;
	level: number;
	category: string;
};

type Item = {
	id: number;
	title: string;
	description: string;
	num: number;
	isPlaying: boolean;
	audios: {
		title: string;
		tags: string[];
		audioUrl: string;
	}[];
};

type ItemGroup = {
	tips: string;
	emoji: string;
	title: string;
	list: Item[];
};

export default {
	title: 'organisms/MusicStyleWithItemButton',
	component: MusicStyleWithItemButton,
};

export const Default = {
	render: () => {
		const {
			selectedCategoryTagList,
			handleReorder,
			handleDeleteTag,
			handleDecrement,
			handleIncrement,
			handleChangeLevel,
			selectedItemList,
			togglePlay,
			togglePlayPause,
			calculateTotalNum,
		} = useStore();

		const categoryText = selectedCategoryTagList
			.map((item) => item.category)
			.join(', ');

		return (
			<MusicStyleWithItemButton
				text={categoryText}
				selectedCategoryTagList={selectedCategoryTagList}
				setSelectedCategoryTagList={handleReorder}
				handleDeleteTag={handleDeleteTag}
				handleChangeLevel={handleChangeLevel}
				slectedItemDobuleList={selectedItemList}
				handleIncrement={handleIncrement}
				handleDecriment={handleDecrement}
				togglePlay={togglePlay}
				calculateTotalNum={calculateTotalNum}
				togglePlayPasue={togglePlayPause}
			/>
		);
	},
};
