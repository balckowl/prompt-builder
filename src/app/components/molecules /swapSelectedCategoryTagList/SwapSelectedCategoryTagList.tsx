import type { SelectedCategoryTagType } from '@/types/base';
import { Reorder } from 'motion/react';
import { SelectedCategoryTag } from '../../atoms/selectedCategoryTag';

type Props = {
	selectedCategoryTagList: SelectedCategoryTagType[];
	setSelectedCategoryTagList: (newOrder: SelectedCategoryTagType[]) => void;
	handleDeleteTag: (id: string) => void;
	handleChangeLevel: (id: string) => void;
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
