import { Reorder } from 'motion/react';
import type { Dispatch, SetStateAction } from 'react';
import { SelectedCategoryTag } from '../../atoms/selectedCategoryTag';

type Props = {
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

export default function SwapSelectedCategoryTagList({
	selectedCategoryTagList,
	setSelectedCategoryTagList,
	handleDeleteTag,
	handleChangeLevel,
}: Props) {
	return (
		<Reorder.Group
			axis="x"
			values={selectedCategoryTagList}
			onReorder={setSelectedCategoryTagList}
			className="flex gap-2"
		>
			{selectedCategoryTagList.map((item) => (
				<Reorder.Item key={item.id} value={item}>
					<SelectedCategoryTag
						item={item}
						handleDeleteTag={handleDeleteTag}
						handleChangeLevel={handleChangeLevel}
					/>
				</Reorder.Item>
			))}
		</Reorder.Group>
	);
}
