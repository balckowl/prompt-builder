import { useState } from 'react';
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
		const [selectedCategoryTagList, setSelectedCategoryTagList] = useState<
			CategoryTag[]
		>([
			{
				id: 1,
				level: 0,
				category: 'k-pop',
			},
			{
				id: 2,
				level: 0,
				category: 'j-pop',
			},
			{
				id: 3,
				level: 0,
				category: 'ballad',
			},
		]);

		const handleDeleteTag = (id: number) => {
			const tagToDelete = selectedCategoryTagList.find((tag) => tag.id === id);
			if (tagToDelete) {
				setSelectedCategoryTagList((prevList) =>
					prevList.filter((item) => item.id !== id),
				);

				// Reduce the num for the corresponding category in selectedItemList
				setSelectedItemList((prevList) =>
					prevList.map((group) => {
						return {
							...group,
							list: group.list.map((item) =>
								item.title.toLowerCase() === tagToDelete.category.toLowerCase()
									? { ...item, num: item.num > 0 ? item.num - 1 : 0 }
									: item,
							),
						};
					}),
				);
			}
		};

		const getCategoryByLevel = (category: string, level: number): string => {
			switch (level) {
				case 0:
					return category.toLowerCase();
				case 1:
					return (
						category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
					);
				case 2:
					return category.toUpperCase();
				default:
					return category;
			}
		};

		const handleChangeLevel = (id: number) => {
			const updateSelectedCategoryTagList = selectedCategoryTagList.map(
				(item) =>
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
			setSelectedCategoryTagList(updateSelectedCategoryTagList);
		};

		const categoryText = selectedCategoryTagList
			.map((item) => item.category)
			.join(', ');

		const [selectedItemList, setSelectedItemList] = useState<ItemGroup[]>([
			{
				tips: 'こんばんは',
				emoji: '😃',
				title: 'こんばんは',
				list: [
					{
						id: 0,
						title: 'female',
						description: 'こんばんは',
						num: 0,
						isPlaying: false,
					},
					{
						id: 1,
						title: 'male',
						description: 'こんばんは',
						num: 0,
						isPlaying: false,
					},
				],
			},
		]);

		const handleIncrement = (id: number) => {
			const updatedList = selectedItemList.map((group) => {
				return {
					...group,
					list: group.list.map((item) =>
						item.id === id ? { ...item, num: item.num + 1 } : item,
					),
				};
			});
			setSelectedItemList(updatedList);

			// Incrementされたアイテムを取得
			const incrementedItem = selectedItemList
				.flatMap((group) => group.list)
				.find((item) => item.id === id);

			if (incrementedItem) {
				// numが増えるごとにselectedCategoryTagListに追加する
				const newCategoryTag: CategoryTag = {
					id: Date.now(), // ユニークなIDを生成
					level: 0,
					category: incrementedItem.title.toLowerCase(),
				};

				setSelectedCategoryTagList((prevList) => [...prevList, newCategoryTag]);
			}
		};

		const handleDecrement = (id: number) => {
			const updatedList = selectedItemList.map((group) => {
				return {
					...group,
					list: group.list.map((item) =>
						item.id === id
							? { ...item, num: item.num > 0 ? item.num - 1 : item.num }
							: item,
					),
				};
			});
			setSelectedItemList(updatedList);
		};

		const togglePlay = (id: number) => {
			const updatedList = selectedItemList.map((group) => {
				return {
					...group,
					list: group.list.map((item) =>
						item.id === id
							? { ...item, isPlaying: !item.isPlaying }
							: { ...item, isPlaying: false },
					),
				};
			});
			setSelectedItemList(updatedList);
		};

		// 各グループの num 合計を計算
		const calculateTotalNum = (items: { num: number }[]): number => {
			return items.reduce((sum, item) => sum + item.num, 0);
		};

		return (
			<MusicStyleWithItemButton
				text={categoryText}
				selectedCategoryTagList={selectedCategoryTagList}
				setSelectedCategoryTagList={setSelectedCategoryTagList}
				handleDeleteTag={handleDeleteTag}
				handleChangeLevel={handleChangeLevel}
				slectedItemDobuleList={selectedItemList}
				handleIncrement={handleIncrement}
				handleDecriment={handleDecrement}
				togglePlay={togglePlay}
				calculateTotalNum={calculateTotalNum}
			/>
		);
	},
};
