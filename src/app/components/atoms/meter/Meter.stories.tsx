import Meter from './Meter';

export default {
	title: 'atoms/meter',
	component: Meter,
};

export const Default = {
	render: () => {
		return (
			<div className="w-[500px]">
				<Meter max={100} value={43} />
			</div>
		);
	},
};
