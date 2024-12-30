import { useState } from 'react';
import SwapSelectedCategoryTagList from './SwapSelectedCategoryTagList';

export default {
	title: 'molecules/SwapSelectedCategoryTagList',
	component: SwapSelectedCategoryTagList,
};

export const Default = {
	render: () => {
		const [selectedCategoryTagList, setSelectedCategoryTagList] = useState([
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
			const updateSelectedCategoryTagList = selectedCategoryTagList.filter(
				(item) => item.id !== id,
			);
			setSelectedCategoryTagList(updateSelectedCategoryTagList);
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

		return (
			<SwapSelectedCategoryTagList
				selectedCategoryTagList={selectedCategoryTagList}
				setSelectedCategoryTagList={setSelectedCategoryTagList}
				handleDeleteTag={handleDeleteTag}
				handleChangeLevel={handleChangeLevel}
			/>
		);
	},
};
