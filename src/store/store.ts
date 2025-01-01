import { selectedItemList } from '@/data/musicStyleList';
import { create } from 'zustand';

type CategoryTag = {
	id: number;
	level: number;
	category: string;
};

type StoreState = {
	selectedCategoryTagList: CategoryTag[];
	selectedItemList: ItemGroup[];
	handleReorder: (newOrder: CategoryTag[]) => void;
	handleDeleteTag: (id: number) => void;
	handleChangeLevel: (id: number) => void;
	handleIncrement: (id: number) => void;
	handleDecrement: (id: number) => void;
	togglePlay: (id: number) => void;
	togglePlayPause: (id: number) => void;
	calculateTotalNum: (items: Item[]) => number;
};

type Item = {
	id: number;
	title: string;
	description: string;
	num: number;
	isPlaying: boolean;
	audioUrl: string;
};

type ItemGroup = {
	tips: string;
	emoji: string;
	title: string;
	list: Item[];
};

export const useStore = create<StoreState>((set) => ({
	selectedCategoryTagList: [
		{ id: 1, level: 0, category: 'female' },
		{ id: 2, level: 0, category: 'downtempo' },
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
							category: getCategoryByLevel(item.category, (item.level + 1) % 3),
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

			const newCategoryTag: CategoryTag = {
				id: Date.now(),
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
						tag.category.toLowerCase() === decrementedItem.title.toLowerCase(),
				);

				if (tagIndex !== -1) {
					const newSelectedCategoryTagList = [...state.selectedCategoryTagList];
					newSelectedCategoryTagList.splice(tagIndex, 1);

					return {
						selectedItemList: updatedList,
						selectedCategoryTagList: newSelectedCategoryTagList,
					};
				}
			}

			return { selectedItemList: updatedList };
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

	calculateTotalNum: (items) => items.reduce((sum, item) => sum + item.num, 0),
}));

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
