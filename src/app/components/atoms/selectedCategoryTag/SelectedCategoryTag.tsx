import type { SelectedCategoryTagType } from '@/types/base';
import { FaMinus } from 'react-icons/fa';

type Props = {
	item: SelectedCategoryTagType;
	handleDeleteTag: (id: string) => void;
	handleChangeLevel: (id: string) => void;
};

export default function SelectedCategoryTag({
	item,
	handleDeleteTag,
	handleChangeLevel,
}: Props) {
	return (
		<div className="flex h-[34px]">
			<button
				type="button"
				onClick={() => handleChangeLevel(item.id)}
				className={`
                  ${item.level === 0 ? 'bg-white' : ''} ${item.level === 1 ? 'bg-yellow-100' : ''}  ${item.level === 2 ? 'bg-yellow-200' : ''} w-[74px] rounded-tl-[10px] rounded-bl-[10px] border-black border-y border-l`}
			>
				{item.category}
			</button>
			<button
				type="button"
				onClick={() => handleDeleteTag(item.id)}
				className="grid w-[34px] place-content-center rounded-tr-[10px] rounded-br-[10px] border border-black bg-red-400"
			>
				<FaMinus />
			</button>
		</div>
	);
}
