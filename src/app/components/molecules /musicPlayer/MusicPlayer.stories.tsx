import { useStore } from '@/store/store';
import MusicPlayer from './MusicPlayer';

export default {
	title: 'molecules/MusicPlater',
	component: MusicPlayer,
};

export const Default = {
	render: () => {
		const { selectedItemList } = useStore();

		return (
			<div className="w-[584px] bg-[#eee]">
				<MusicPlayer selectedItemList={selectedItemList[0].list} />
			</div>
		);
	},
};
