type Props = {
	emoji: string;
	title: string;
};

export default function ParamSelectButton({ emoji, title }: Props) {
	return (
		<button
			type="button"
			className="size-[150px] border rounded-[10px] border-black grid place-content-center hover:scale-[105%] transition-all delay-75 active:scale-[95%]"
		>
			<div>
				<div className="text-center text-[50px]">{emoji}</div>
				<p className="text-[20px] font-bold  mt-[-10px]">{title}</p>
			</div>
		</button>
	);
}
