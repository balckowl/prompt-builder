import { FaCopy } from 'react-icons/fa';

type Props = {
	text: string;
};

export default function CopyButton({ text }: Props) {
	const copyToClipboard = () => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				alert('コピー完了');
			})
			.catch((err) => {
				console.error('コピーに失敗しました: ', err);
			});
	};

	return (
		<button
			onClick={copyToClipboard}
			type="button"
			className="rounded-[10px] border border-black p-2"
		>
			<FaCopy />
		</button>
	);
}
