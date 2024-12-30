import { FaMinus, FaPause, FaPlay, FaPlus } from 'react-icons/fa';

type Props = {
	isPlaying: boolean;
	handleIncrement: () => void;
	handleDecriment: () => void;
	togglePlay: () => void;
};

export default function PulsMinusButton({
	isPlaying,
	handleIncrement,
	handleDecriment,
	togglePlay,
}: Props) {
	return (
		<div className="flex h-[34px]">
			<button
				onClick={handleIncrement}
				type="button"
				className="grid w-[34px] place-content-center rounded-tl-[10px] rounded-bl-[10px] border-black border-t border-b border-l bg-red-400"
			>
				<FaPlus />
			</button>
			<button
				onClick={togglePlay}
				type="button"
				className="grid w-[34px] place-content-center border border-black"
			>
				{isPlaying ? <FaPause /> : <FaPlay />}
			</button>
			<button
				onClick={handleDecriment}
				type="button"
				className="grid w-[34px] place-content-center rounded-tr-[10px] rounded-br-[10px] border-black border-t border-r border-b bg-blue-400"
			>
				<FaMinus />
			</button>
		</div>
	);
}
