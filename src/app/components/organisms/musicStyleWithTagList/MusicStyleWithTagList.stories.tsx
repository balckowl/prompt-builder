import { useStore } from '@/store/store';
import MusicStyleWithTagList from './MusicStyleWithTagList';

export default {
	title: 'organisms/MusicStyleWithTagList',
	component: MusicStyleWithTagList,
};

export const Default = {
	render: () => {
		const {
			selectedCategoryTagList,
			handleReorder,
			handleDeleteTag,
			handleChangeLevel,
		} = useStore();

		const categoryText = selectedCategoryTagList
			.map((item) => item.category)
			.join(', ');

		return (
			<MusicStyleWithTagList
				text={categoryText}
				selectedCategoryTagList={selectedCategoryTagList}
				setSelectedCategoryTagList={handleReorder}
				handleDeleteTag={handleDeleteTag}
				handleChangeLevel={handleChangeLevel}
			/>
		);
	},
};
