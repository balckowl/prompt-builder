import MusicPlayer from './MusicPlayer';

export default {
	title: 'molecules/MusicPlater',
	component: MusicPlayer,
};

export const Default = {
	render: () => {
		return (
			<div className="w-[584px] bg-[#eee]">
				<MusicPlayer />
			</div>
		);
	},
};
