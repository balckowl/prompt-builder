import { Badge } from '../../atoms/badge';
import { ParamSelectButton } from '../../atoms/paramSelectButton';

type Props = {
	title: string;
	emoji: string;
	num: number;
	onClick: () => void;
};

export default function ParamSelectButtonWithBadge({
	title,
	emoji,
	num,
	onClick,
}: Props) {
	return (
		<div className="relative w-max">
			<ParamSelectButton onClick={onClick} title={title} emoji={emoji} />
			<div className="absolute top-[-10px] right-[-10px]">
				<Badge num={num} size="md" />
			</div>
		</div>
	);
}
