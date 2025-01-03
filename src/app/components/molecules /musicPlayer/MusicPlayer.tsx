import { useAudioStore } from '@/store/audioStore';
import { useStore } from '@/store/store';
import type { Item } from '@/types/base';
import ReactHowler from 'react-howler';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';

type Props = {
	selectedItemList: Item[];
};

export default function MusicPlayer({ selectedItemList }: Props) {
	const {
		currentPlayingAudioId,
		isPlaying,
		togglePlayPause,
		nextAudio,
		prevAudio,
	} = useAudioStore();

	const { handleApplyTags } = useStore();

	const currentAudio = selectedItemList
		.flatMap((item) => item.audios)
		.find((audio) => audio.id === currentPlayingAudioId);

	const handlePlayPause = () => {
		togglePlayPause();
	};

	return (
		<div
			className={`${
				currentAudio ? 'translate-y-0' : 'translate-y-[100%]'
			} transition-all delay-50 `}
		>
			{currentAudio && (
				<div className="flex pl-7">
					<div className="flex w-[80%] gap-2 overflow-x-auto border-t py-2">
						{currentAudio.tags.map((tag, i) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={i}
								className={`
								${tag.level === 1 ? 'bg-yellow-100' : ''} 
								${tag.level === 2 ? 'bg-yellow-200' : ''} whitespace-nowrap rounded-[10px] border border-black px-4 py-1 text-[16px]`}
							>
								{tag.name}
							</div>
						))}
					</div>
					<button
						type="button"
						onClick={() => handleApplyTags(currentAudio.tags)}
						className="flex-1 border py-2 font-bold transition-all delay-75 hover:scale-[105%] hover:bg-gray-300 active:scale-[95%]"
					>
						適用
					</button>
				</div>
			)}
			<div className="flex h-[128px] items-center justify-between border-t px-7">
				<p className="font-bold text-[25px]">
					{currentAudio ? `${currentAudio.title}` : 'No track playing'}
				</p>
				<div className="flex items-center gap-5">
					{currentAudio && (
						<ReactHowler
							src={currentAudio.audioUrl}
							playing={isPlaying}
							html5
							onEnd={nextAudio}
						/>
					)}
					<button type="button" onClick={prevAudio} disabled={!currentAudio}>
						<FaStepBackward size={25} />
					</button>
					<button
						type="button"
						onClick={handlePlayPause}
						disabled={!currentAudio}
					>
						{isPlaying ? <FaPause size={25} /> : <FaPlay size={25} />}
					</button>
					<button type="button" onClick={nextAudio} disabled={!currentAudio}>
						<FaStepForward size={25} />
					</button>
				</div>
			</div>
		</div>
	);
}
