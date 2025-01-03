import { create } from 'zustand';
import { useStore } from './store';

type StoreState = {
	currentPlayingAudioId: string | null; // 再生中の audio の ID
	isPlaying: boolean; // 再生中かどうか
	currentSeek: number; // 現在の再生位置
	setCurrentPlayingAudio: (id: string | null) => void;
	togglePlayPause: () => void;
	nextAudio: () => void;
	prevAudio: () => void;
	handleAudioPlayToggle: (listId: number) => void;
	currentPlayingListId: number | null;
	setCurrentPlaying: (listId: number, audioId: string) => void;
	stopPlaying: () => void;
};

export const useAudioStore = create<StoreState>((set, get) => ({
	currentPlayingListId: null,
	currentPlayingAudioId: null,
	isPlaying: false,
	currentSeek: 0,

	setCurrentPlaying: (listId, audioId) => {
		set({
			currentPlayingListId: listId,
			currentPlayingAudioId: audioId,
			isPlaying: true, // 再生中に設定
		});
	},

	stopPlaying: () => {
		set({
			currentPlayingListId: null,
			currentPlayingAudioId: null,
			isPlaying: false,
		});
	},

	handleAudioPlayToggle: (listId) => {
		const {
			currentPlayingListId,
			currentPlayingAudioId,
			isPlaying,
			setCurrentPlaying,
			togglePlayPause,
		} = get();
		const { selectedItemList } = useStore.getState();

		// 対象リストを検索
		const targetList = selectedItemList
			.flatMap((group) => group.list)
			.find((item) => item.id === listId);
		if (!targetList) return;

		// 再生すべき曲の取得（リスト内の最初の曲）
		const firstAudio = targetList.audios[0];
		if (!firstAudio) return alert('サンプル曲がありません。');

		if (currentPlayingListId === listId) {
			// 同じリストが再生中の場合
			if (isPlaying) {
				// 一時停止
				togglePlayPause();
			} else {
				// 停止中なら再生
				setCurrentPlaying(listId, currentPlayingAudioId ?? firstAudio.id);
			}
		} else {
			// 別のリストを再生
			setCurrentPlaying(listId, firstAudio.id);
		}
	},

	setCurrentPlayingAudio: (id) => {
		set({
			currentPlayingAudioId: id,
			isPlaying: id !== null, // 再生中に設定
			currentSeek: 0, // 再生位置をリセット
		});
	},

	togglePlayPause: () => {
		const { isPlaying } = get();
		set({ isPlaying: !isPlaying });
	},

	nextAudio: () => {
		const { selectedItemList } = useStore.getState();
		const { currentPlayingAudioId } = get();
		if (currentPlayingAudioId === null) return;

		for (const group of selectedItemList) {
			for (const item of group.list) {
				const currentIndex = item.audios.findIndex(
					(audio) => audio.id === currentPlayingAudioId,
				);
				if (currentIndex >= 0) {
					const nextIndex = (currentIndex + 1) % item.audios.length;
					set({
						currentPlayingAudioId: item.audios[nextIndex].id,
						currentSeek: 0, // 次の曲は先頭から
					});
					return;
				}
			}
		}
	},

	prevAudio: () => {
		const { selectedItemList } = useStore.getState();
		const { currentPlayingAudioId } = get();

		if (currentPlayingAudioId === null) return;

		for (const group of selectedItemList) {
			for (const item of group.list) {
				const currentIndex = item.audios.findIndex(
					(audio) => audio.id === currentPlayingAudioId,
				);
				if (currentIndex >= 0) {
					const prevIndex =
						currentIndex === 0 ? item.audios.length - 1 : currentIndex - 1;
					set({
						currentPlayingAudioId: item.audios[prevIndex].id,
						currentSeek: 0, // 前の曲も先頭から
					});
					return;
				}
			}
		}
	},
}));
