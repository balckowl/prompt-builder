import { useAudioStore } from '@/store/audioStore';
import { useStore } from '@/store/store';
import ReactHowler from 'react-howler';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';

export default function MusicPlayer() {
	const {
		currentPlayingAudioId,
		isPlaying,
		togglePlayPause,
		nextAudio,
		prevAudio,
	} = useAudioStore();

	const { selectedItemList } = useStore();

	// 現在再生中の audio を特定
	const currentAudio = selectedItemList
		.flatMap((group) => group.list.flatMap((item) => item.audios))
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
