import type { SelectedCategoryTagType } from '@/types/base';
import { MusicStyleWithCopyButton } from '../../molecules /musicStyleWithCopyButton';
import { SwapSelectedCategoryTagList } from '../../molecules /swapSelectedCategoryTagList';

type Props = {
	text: string;
	selectedCategoryTagList: SelectedCategoryTagType[];
	setSelectedCategoryTagList: (newOrder: SelectedCategoryTagType[]) => void;
	handleDeleteTag: (id: string) => void;
	handleChangeLevel: (id: string) => void;
};

export default function MusicStyleWithTagList({
	text,
	selectedCategoryTagList,
	setSelectedCategoryTagList,
	handleDeleteTag,
	handleChangeLevel,
}: Props) {
	return (
		<div>
			<div className="mb-[15px]">
				<MusicStyleWithCopyButton text={text} />
			</div>
			<SwapSelectedCategoryTagList
				selectedCategoryTagList={selectedCategoryTagList}
				setSelectedCategoryTagList={setSelectedCategoryTagList}
				handleDeleteTag={handleDeleteTag}
				handleChangeLevel={handleChangeLevel}
			/>
		</div>
	);
}
