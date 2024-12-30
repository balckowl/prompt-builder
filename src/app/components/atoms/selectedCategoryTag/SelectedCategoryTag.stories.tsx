import { useState } from 'react';
import SelectedCategoryTag from './SelectedCategoryTag';

export default {
	title: 'atoms/SelectedCategoryTag',
	component: SelectedCategoryTag,
};

export const Default = {
	render: () => {
		const [selectedCategoryTagList, setSelectedCategoryTagList] = useState([
			{
				id: 1,
				level: 0,
				category: 'j-pop',
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
			<div>
				{selectedCategoryTagList.map((item) => (
					<SelectedCategoryTag
						key={item.id}
						item={item}
						handleDeleteTag={handleDeleteTag}
						handleChangeLevel={handleChangeLevel}
					/>
				))}
			</div>
		);
	},
};
