type Props = {
	max: number;
	value: number;
};

export default function Meter({ value, max }: Props) {
	return (
		<progress max={max} value={value} className="w-full bg-red-400" color="red">
			{value}
		</progress>
	);
}
