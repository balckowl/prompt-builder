import { selectedItemList } from '@/data/musicStyleList';
import type {
	Item,
	ItemGroup,
	SelectedCategoryTagType,
	TagType,
} from '@/types/base';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StoreState = {
	selectedCategoryTagList: SelectedCategoryTagType[];
	selectedItemList: ItemGroup[];
	handleReorder: (newOrder: SelectedCategoryTagType[]) => void;
	handleDeleteTag: (id: string) => void;
	handleChangeLevel: (id: string) => void;
	handleIncrement: (id: number) => void;
	handleDecrement: (id: number) => void;
	togglePlay: (id: number) => void;
	togglePlayPause: (id: number) => void;
	calculateTotalNum: (items: Item[]) => number;
	handleApplyTags: (tagsWithLevels: TagType[]) => void;
};

export const useStore = create<StoreState>()(
	persist(
		(set) => ({
			selectedCategoryTagList: [
				{ id: uuidv4(), level: 0, category: 'female' },
				{ id: uuidv4(), level: 0, category: 'downtempo' },
			],
			selectedItemList: selectedItemList,
			handleReorder: (newOrder) =>
				set(() => ({
					selectedCategoryTagList: newOrder,
				})),

			handleDeleteTag: (id) =>
				set((state) => {
					// 削除対象のタグを取得
					const tagToDelete = state.selectedCategoryTagList.find(
						(tag) => tag.id === id,
					);
					if (!tagToDelete) return state;

					// selectedItemList の更新: タグに対応する記事の num を減らす
					const updatedItemList = state.selectedItemList.map((group) => ({
						...group,
						list: group.list.map((item) =>
							item.title.toLowerCase() === tagToDelete.category.toLowerCase()
								? { ...item, num: item.num > 0 ? item.num - 1 : 0 }
								: item,
						),
					}));

					// selectedCategoryTagList から該当のタグを削除
					const updatedCategoryTagList = state.selectedCategoryTagList.filter(
						(tag) => tag.id !== id,
					);

					return {
						selectedCategoryTagList: updatedCategoryTagList,
						selectedItemList: updatedItemList,
					};
				}),

			handleChangeLevel: (id) =>
				set((state) => {
					const updatedList = state.selectedCategoryTagList.map((item) =>
						item.id === id
							? {
									...item,
									level: (item.level + 1) % 3,
									category: getCategoryByLevel(
										item.category,
										(item.level + 1) % 3,
									),
								}
							: item,
					);
					return { selectedCategoryTagList: updatedList };
				}),

			handleIncrement: (id) =>
				set((state) => {
					const updatedList = state.selectedItemList.map((group) => ({
						...group,
						list: group.list.map((item) =>
							item.id === id ? { ...item, num: item.num + 1 } : item,
						),
					}));

					const incrementedItem = state.selectedItemList
						.flatMap((group) => group.list)
						.find((item) => item.id === id);

					if (!incrementedItem) return { selectedItemList: updatedList };

					const newCategoryTag = {
						id: uuidv4(),
						level: 0,
						category: incrementedItem.title.toLowerCase(),
					};

					return {
						selectedItemList: updatedList,
						selectedCategoryTagList: [
							...state.selectedCategoryTagList,
							newCategoryTag,
						],
					};
				}),

			handleDecrement: (id) =>
				set((state) => {
					const updatedList = state.selectedItemList.map((group) => ({
						...group,
						list: group.list.map((item) =>
							item.id === id
								? { ...item, num: item.num > 0 ? item.num - 1 : item.num }
								: item,
						),
					}));

					const decrementedItem = state.selectedItemList
						.flatMap((group) => group.list)
						.find((item) => item.id === id);

					if (decrementedItem && decrementedItem.num > 0) {
						const tagIndex = state.selectedCategoryTagList.findIndex(
							(tag) =>
								tag.category.toLowerCase() ===
								decrementedItem.title.toLowerCase(),
						);

						if (tagIndex !== -1) {
							const newSelectedCategoryTagList = [
								...state.selectedCategoryTagList,
							];
							newSelectedCategoryTagList.splice(tagIndex, 1);

							return {
								selectedItemList: updatedList,
								selectedCategoryTagList: newSelectedCategoryTagList,
							};
						}
					}

					return { selectedItemList: updatedList };
				}),

			handleApplyTags: (tags) =>
				set((state) => {
					if (state.selectedCategoryTagList.length > 0) {
						const shouldProceed = confirm(
							'既にタグが存在します。新しいタグを適用しますか？',
						);
						if (!shouldProceed) {
							// キャンセルされた場合は処理を中断
							return state;
						}
					}

					// 新しいタグを生成
					const newTags = tags.map((tag) => ({
						id: uuidv4(),
						level: tag.level,
						category: tag.name,
					}));

					// `selectedItemList` を更新して該当するタグの `num` をリセットして更新
					const updatedItemList = state.selectedItemList.map((group) => ({
						...group,
						list: group.list.map((item) => {
							// 該当するタグを確認
							const applicableTags = tags.filter(
								(tag) => item.title.toLowerCase() === tag.name.toLowerCase(),
							);

							// `num` をリセットして更新
							const updatedNum = applicableTags.length;

							return {
								...item,
								num: updatedNum,
							};
						}),
					}));

					return {
						selectedCategoryTagList: newTags, // 新しいタグのみを適用
						selectedItemList: updatedItemList,
					};
				}),

			togglePlay: (id) =>
				set((state) => {
					const updatedList = state.selectedItemList.map((group) => ({
						...group,
						list: group.list.map((item) =>
							item.id === id
								? { ...item, isPlaying: !item.isPlaying }
								: { ...item, isPlaying: false },
						),
					}));
					return { selectedItemList: updatedList };
				}),

			togglePlayPause: (id) =>
				set((state) => ({
					selectedItemList: state.selectedItemList.map((group) => ({
						...group,
						list: group.list.map((item) =>
							item.id === id
								? { ...item, isPlaying: !item.isPlaying }
								: { ...item, isPlaying: false },
						),
					})),
				})),

			calculateTotalNum: (items) =>
				items.reduce((sum, item) => sum + item.num, 0),
		}),
		{
			name: 'store',
			partialize: (state) => ({
				selectedCategoryTagList: state.selectedCategoryTagList,
			}),
		},
	),
);

function getCategoryByLevel(category: string, level: number): string {
	switch (level) {
		case 0:
			return category.toLowerCase();
		case 1:
			return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
		case 2:
			return category.toUpperCase();
		default:
			return category;
	}
}
