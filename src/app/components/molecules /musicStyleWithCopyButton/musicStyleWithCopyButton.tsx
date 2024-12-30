import { CopyButton } from '../../atoms/copyButton';

type Props = {
	text: string;
};

export default function MusicStyleWithCopyButton({ text }: Props) {
	return (
		<div>
			<h3 className="mb-[5px] font-bold text-[18px]">Music Style</h3>
			<div className="flex h-[150px] justify-between rounded-[10px] border border-black px-5 py-3 text-[16px]">
				<p>{text}</p>
				<div>
					<CopyButton text={text} />
				</div>
			</div>
		</div>
	);
}
