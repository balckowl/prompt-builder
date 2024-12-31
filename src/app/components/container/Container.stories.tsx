import Container from './Container';

export default {
	title: 'container/Container',
	component: Container,
};

export const Default = {
	render: () => {
		return (
			<Container>
				<div className="font-bold text-[30px]">HELLO WORLD</div>
			</Container>
		);
	},
};
