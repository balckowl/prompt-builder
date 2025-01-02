import type { Item, ItemGroup, SelectedCategoryTagType } from '@/types/base';
import { HamburgerMenu } from '../../molecules /hamburgerMenu';
import { MusicStyleWithTagList } from '../musicStyleWithTagList';

type Props = {
	text: string;
	selectedCategoryTagList: SelectedCategoryTagType[];
	setSelectedCategoryTagList: (newOrder: SelectedCategoryTagType[]) => void;
	handleDeleteTag: (id: number) => void;
	handleChangeLevel: (id: number) => void;
	slectedItemDobuleList: ItemGroup[];
	handleIncrement: (id: number) => void;
	handleDecriment: (id: number) => void;
	togglePlay: (id: number) => void;
	calculateTotalNum: (items: Item[]) => number;
	togglePlayPasue: (id: number) => void;
};

export default function MusicStyleWithItemButton({
	text,
	selectedCategoryTagList,
	setSelectedCategoryTagList,
	handleDeleteTag,
	handleChangeLevel,
	slectedItemDobuleList,
	handleIncrement,
	handleDecriment,
	togglePlay,
	calculateTotalNum,
	togglePlayPasue,
}: Props) {
	return (
		<div>
			<div className="mb-[20px]">
				<MusicStyleWithTagList
					text={text}
					selectedCategoryTagList={selectedCategoryTagList}
					setSelectedCategoryTagList={setSelectedCategoryTagList}
					handleDeleteTag={handleDeleteTag}
					handleChangeLevel={handleChangeLevel}
				/>
			</div>
			<div className="flex flex-wrap gap-5">
				{slectedItemDobuleList.map((item) => (
					<HamburgerMenu
						selectedItemList={item.list}
						tips={item.tips}
						emoji={item.emoji}
						handleDecrement={handleDecriment}
						handleIncrement={handleIncrement}
						togglePlay={togglePlay}
						title={item.title}
						num={calculateTotalNum(item.list)}
						key={item.title}
						togglePlayPasue={togglePlayPasue}
					/>
				))}
			</div>
		</div>
	);
}
