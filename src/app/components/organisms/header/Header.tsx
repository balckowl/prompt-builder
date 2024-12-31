import { Container } from '../../container';

export default function Header() {
	return (
		<header className="flex h-[80px] items-center border-b">
			<Container>
				<h1 className="font-bold text-[24px]">Prompt Builder</h1>
			</Container>
		</header>
	);
}
