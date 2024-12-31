import { useState } from 'react';
import MusicPlayer from './MusicPlayer';

export default {
	title: 'molecules/MusicPlater',
	component: MusicPlayer,
};

export const Default = {
	render: () => {
		const [selectedItemList, setSelectedItemList] = useState([
			{
				id: 0,
				title: 'female',
				description: 'こんばんは',
				num: 0,
				isPlaying: false,
				audioUrl: '/demo.mp3',
			},
			{
				id: 1,
				title: 'male',
				description: 'こんばんは',
				num: 0,
				isPlaying: true,
				audioUrl: '/demo.mp3',
			},
		]);

		const togglePlayPause = (id: number) => {
			setSelectedItemList((prevList) =>
				prevList.map((item) =>
					item.id === id
						? { ...item, isPlaying: !item.isPlaying }
						: { ...item, isPlaying: false },
				),
			);
		};

		return (
			<div className="w-[584px] bg-[#eee]">
				<MusicPlayer
					selectedItemList={selectedItemList}
					onTogglePlayPause={togglePlayPause}
				/>
			</div>
		);
	},
};
