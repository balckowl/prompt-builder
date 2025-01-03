export type SelectedCategoryTagType = {
	id: string;
	level: number;
	category: string;
};

export type ItemGroup = {
	tips: string;
	emoji: string;
	title: string;
	list: Item[];
};

export type Item = {
	id: number;
	title: string;
	description: string;
	num: number;
	isPlaying: boolean;
	audios: AudioType[];
};

export type AudioType = {
	id: string;
	title: string;
	tags: TagType[];
	audioUrl: string;
};

export type TagType = {
	name: string;
	level: number;
};
