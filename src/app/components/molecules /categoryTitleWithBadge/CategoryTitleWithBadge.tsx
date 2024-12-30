import { Badge } from '../../atoms/badge';

type Props = {
	num: number;
	title: string;
};

export default function CategoryTitleWithBadge({ num, title }: Props) {
	return (
		<div className="flex items-center gap-3">
			<Badge num={num} size="sm" />
			<h3 className="font-bold text-[30px]">{title}</h3>
		</div>
	);
}
