'use client';
import { useStore } from '@/store/store';
import { Container } from '../../container';
import { Header } from '../../organisms/header';
import { MusicStyleWithItemButton } from '../../organisms/musicStyleWithItemButton';

export default function TopPageTemplate() {
	const {
		selectedCategoryTagList,
		selectedItemList,
		handleReorder,
		handleDeleteTag,
		handleChangeLevel,
		handleIncrement,
		handleDecrement,
		togglePlay,
		calculateTotalNum,
		togglePlayPause,
	} = useStore();

	const categoryText = selectedCategoryTagList
		.map((item) => item.category)
		.join(', ');

	return (
		<div>
			<div className="mb-[20px]">
				<Header />
			</div>
			<Container>
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
			</Container>
		</div>
	);
}
