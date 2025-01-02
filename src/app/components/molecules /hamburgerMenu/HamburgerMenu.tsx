import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { useAudioStore } from '@/store/audioStore';
import type { Item } from '@/types/base';
import { X } from 'lucide-react';
import { useState } from 'react';
import { CategoryTitleWithBadge } from '../categoryTitleWithBadge';
import { MusicPlayer } from '../musicPlayer';
import ParamSelectButtonWithBadge from '../paramSelectButtonWithBadge/paramSelectButtonWithBadge';
import { SelectedItem } from '../slectedItem';

type Props = {
	tips: string;
	selectedItemList: Item[];
	num: number;
	title: string;
	emoji: string;
	handleIncrement: (id: number) => void;
	handleDecrement: (id: number) => void;
	togglePlay: (id: number) => void;
	togglePlayPasue: (id: number) => void;
};

export default function HamburgerMenu({
	tips,
	selectedItemList,
	num,
	emoji,
	title,
	handleIncrement,
	handleDecrement,
}: Props) {
	const [open, setOpen] = useState(false);

	const {
		currentPlayingListId,
		isPlaying,
		stopPlaying,
		handleAudioPlayToggle,
	} = useAudioStore();

	// メニューを閉じるときにすべての曲を停止
	const handleMenuClose = () => {
		// 全ての曲の再生を停止
		stopPlaying();
		setOpen(false); // メニューを閉じる
	};

	return (
		<Sheet
			open={open}
			onOpenChange={(isOpen) => {
				if (!isOpen) handleMenuClose(); // メニューが閉じられたときの処理
				setOpen(isOpen);
			}}
		>
			<SheetTrigger asChild>
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
				</SheetHeader>
				<div className="px-10">
					{selectedItemList.map((item) => (
						<SelectedItem
							key={item.id}
							title={item.title}
							description={item.description}
							num={item.num}
							handleIncrement={() => handleIncrement(item.id)}
							handleDecriment={() => handleDecrement(item.id)}
							togglePlay={() => handleAudioPlayToggle(item.id)}
							isPlaying={isPlaying && currentPlayingListId === item.id}
						/>
					))}
				</div>
				<div className="absolute bottom-0 left-0 w-full">
					<MusicPlayer />
				</div>
			</SheetContent>
		</Sheet>
	);
}
