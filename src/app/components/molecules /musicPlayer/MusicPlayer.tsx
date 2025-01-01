import { useState } from 'react';
import ReactHowler from 'react-howler';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';

type MusicPlayerProps = {
	selectedItemList: SelectedItemType[];
	onTogglePlayPause: (id: number) => void;
};

type SelectedItemType = {
	id: number;
	title: string;
	description: string;
	num: number;
	isPlaying: boolean;
	audios: {
		title: string;
		tags: string[];
		audioUrl: string;
	}[];
};

let howlerRef: ReactHowler | null = null;

export default function MusicPlayer({
	selectedItemList,
	onTogglePlayPause,
}: MusicPlayerProps) {
	const playingItem = selectedItemList.find((item) => item.isPlaying);
	const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

	const handleRestart = () => {
		if (howlerRef) {
			howlerRef.seek(0);
		}
	};

	const handlePlayPause = () => {
		if (playingItem) {
			onTogglePlayPause(playingItem.id);
		}
	};

	const handleNextAudio = () => {
		if (playingItem) {
			setCurrentAudioIndex(
				(prevIndex) => (prevIndex + 1) % playingItem.audios.length,
			);
		}
	};

	const handlePrevAudio = () => {
		if (playingItem) {
			setCurrentAudioIndex((prevIndex) =>
				prevIndex === 0 ? playingItem.audios.length - 1 : prevIndex - 1,
			);
		}
	};

	const currentAudio = playingItem?.audios[currentAudioIndex];

	return (
		<div
			className={`${playingItem ? 'translate-y-0' : 'translate-y-[100%]'} transition-all delay-50 `}
		>
			<div className="flex items-center gap-2 overflow-x-auto border-t px-7 py-2">
				{currentAudio?.tags.map((tag, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div
						key={i}
						className="whitespace-nowrap rounded-[10px] bg-[#eee] px-4 py-1 text-[16px]"
					>
						{tag}
					</div>
				))}
			</div>
			<div className="flex h-[128px] items-center justify-between border-t px-7">
				<p className="font-bold text-[25px]">
					{currentAudio ? `${currentAudio.title}` : 'No track playing'}
				</p>

				<div className="flex gap-5">
					{currentAudio && (
						<ReactHowler
							ref={(ref) => {
								howlerRef = ref;
							}}
							src={currentAudio.audioUrl}
							playing={playingItem?.isPlaying}
							html5={true}
						/>
					)}
					{/* <button type="button" onClick={handleRestart} disabled={!currentAudio}>
					<FaUndo size={25} />
				</button> */}
					<button
						type="button"
						onClick={handlePrevAudio}
						disabled={!playingItem}
					>
						<FaStepBackward size={25} />
					</button>
					<button
						type="button"
						onClick={handlePlayPause}
						disabled={!currentAudio}
					>
						{playingItem?.isPlaying ? (
							<FaPause size={25} />
						) : (
							<FaPlay size={25} />
						)}
					</button>
					<button
						type="button"
						onClick={handleNextAudio}
						disabled={!playingItem}
					>
						<FaStepForward size={25} />
					</button>
				</div>
			</div>
		</div>
	);
}
