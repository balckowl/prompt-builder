import type { Dispatch, SetStateAction } from 'react';
import { MusicStyleWithCopyButton } from '../../molecules /musicStyleWithCopyButton';
import { SwapSelectedCategoryTagList } from '../../molecules /swapSelectedCategoryTagList';

type Props = {
	text: string;
	selectedCategoryTagList: SelectedCategoryTagType[];
	setSelectedCategoryTagList: Dispatch<
		SetStateAction<SelectedCategoryTagType[]>
	>;
	handleDeleteTag: (id: number) => void;
	handleChangeLevel: (id: number) => void;
};

type SelectedCategoryTagType = {
	id: number;
	level: number;
	category: string;
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
