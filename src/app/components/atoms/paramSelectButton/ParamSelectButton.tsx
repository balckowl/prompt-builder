type Props = {
	emoji: string;
	title: string;
	onClick: () => void;
};

export default function ParamSelectButton({ emoji, title, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			type="button"
			className="grid size-[150px] place-content-center rounded-[10px] border border-black transition-all delay-75 hover:scale-[105%] active:scale-[95%]"
		>
			<div>
				<div className="text-center text-[50px]">{emoji}</div>
				<p className="mt-[-10px] font-bold text-[20px]">{title}</p>
			</div>
		</button>
	);
}
