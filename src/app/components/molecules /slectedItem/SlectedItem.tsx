import { PlusMinusButton } from '../../atoms/plusMinusButton';
import { CategoryTitleWithBadge } from '../categoryTitleWithBadge';

type Props = {
	isPlaying: boolean;
	handleIncrement: () => void;
	handleDecriment: () => void;
	togglePlay: () => void;
	num: number;
	title: string;
	description: string;
};

export default function SlectedItem({
	handleDecriment,
	handleIncrement,
	isPlaying,
	togglePlay,
	num,
	title,
	description,
}: Props) {
	return (
		<div className="flex items-center justify-between">
			<div>
				<CategoryTitleWithBadge title={title} num={num} />
				<p className="text-[#ccc] text-[16px]">{description}</p>
			</div>
			<PlusMinusButton
				handleIncrement={handleIncrement}
				handleDecriment={handleDecriment}
				isPlaying={isPlaying}
				togglePlay={togglePlay}
			/>
		</div>
	);
}
