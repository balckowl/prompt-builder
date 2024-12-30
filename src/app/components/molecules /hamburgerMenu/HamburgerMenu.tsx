import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { X } from 'lucide-react';
import { useState } from 'react';
import { CategoryTitleWithBadge } from '../categoryTitleWithBadge';
import ParamSelectButtonWithBadge from '../paramSelectButtonWithBadge/paramSelectButtonWithBadge';
import { SelectedItem } from '../slectedItem';

type Props = {
	tips: string;
	selectedItemList: SelectedItemType[];
	num: number;
	title: string;
	emoji: string;
	handleIncrement: (id: number) => void;
	handleDecrement: (id: number) => void;
	togglePlay: (id: number) => void;
};

type SelectedItemType = {
	id: number;
	title: string;
	description: string;
	num: number;
	isPlaying: boolean;
};

export default function HamburgerMenu({
	tips,
	selectedItemList,
	num,
	emoji,
	title,
	handleIncrement,
	handleDecrement,
	togglePlay,
}: Props) {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger>
				<ParamSelectButtonWithBadge
					num={num}
					emoji={emoji}
					title={title}
					onClick={() => console.log('yes')}
				/>
			</SheetTrigger>
			<SheetContent className="p-0">
				<SheetHeader>
					<SheetTitle className="flex h-[80px] items-center justify-between border-b px-10">
						<CategoryTitleWithBadge num={num} title={title} />
						<button type="button" onClick={() => setOpen(false)}>
							<X />
						</button>
					</SheetTitle>
					<SheetDescription className="p-10">{tips}</SheetDescription>
					<div className="px-10">
						{selectedItemList.map((item) => (
							<SelectedItem
								key={item.id}
								title={item.title}
								description={item.description}
								num={item.num}
								handleIncrement={() => handleIncrement(item.id)}
								handleDecriment={() => handleDecrement(item.id)}
								togglePlay={() => togglePlay(item.id)}
								isPlaying={item.isPlaying}
							/>
						))}
					</div>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
