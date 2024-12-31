import ReactHowler from 'react-howler';
import { FaPause, FaPlay, FaUndo } from 'react-icons/fa';

type MusicPlayerProps = {
	selectedItemList: SelectedItemType[];
};

type SelectedItemType = {
	id: number;
	title: string;
	description: string;
	num: number;
	isPlaying: boolean;
	audioUrl: string;
};

let howlerRef: ReactHowler | null = null;

export default function MusicPlayer({ selectedItemList }: MusicPlayerProps) {
	const playingItem = selectedItemList.find((item) => item.isPlaying);

	const handleRestart = () => {
		if (howlerRef) {
			howlerRef.seek(0);
		}
	};

	const handlePlayPause = () => {
		if (playingItem) {
			playingItem.isPlaying = !playingItem.isPlaying;
		}
	};

	return (
		<div
			className={`${playingItem ? 'translate-y-0' : 'translate-y-[100%]'} flex h-[128px] items-center justify-between border-t px-7 transition-all delay-100`}
		>
			<p className="font-bold text-[25px]">
				{playingItem ? playingItem.title : 'No track playing'}
			</p>
			<div className="flex gap-5">
				{playingItem && (
					<ReactHowler
						ref={(ref) => {
							howlerRef = ref;
						}}
						src={playingItem.audioUrl}
						playing={playingItem.isPlaying}
						html5={true}
					/>
				)}
				<button type="button" onClick={handleRestart} disabled={!playingItem}>
					<FaUndo size={25} />
				</button>
				<button type="button" onClick={handlePlayPause} disabled={!playingItem}>
					{playingItem?.isPlaying ? (
						<FaPause size={25} />
					) : (
						<FaPlay size={25} />
					)}
				</button>
			</div>
		</div>
	);
}
