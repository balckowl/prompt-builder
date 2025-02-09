import { v4 as uuidv4 } from 'uuid';

export const selectedItemList = [
	{
		tips: 'ポップで元気に！',
		emoji: '🎤',
		title: 'ポップ系',
		list: [
			{
				id: 0,
				title: 'j-pop',
				description: '日本のポップ音楽全般',
				num: 0,
				isPlaying: false,
				audios: [
					{
						id: uuidv4(),
						title: '君の光が眩しい',
						audioUrl: '/j-pop-1.mp3',
						tags: [{ name: 'j-pop', level: 0 }],
					},
					{
						id: uuidv4(),
						title: '君の光が眩しい2',
						audioUrl: '/j-pop-2.mp3',
						tags: [
							{ name: 'J-POP', level: 2 },
							{ name: 'J-POP', level: 2 },
							{ name: 'kawaii', level: 0 },
						],
					},
				],
			},
			{
				id: 1,
				title: 'edm',
				description: 'エネルギッシュなダンス音楽',
				num: 0,
				isPlaying: false,
				audios: [
					{
						id: uuidv4(),
						title: '君の光が眩しい3',
						audioUrl: '/edm-1.mp3',
						tags: [{ name: 'edm', level: 0 }],
					},
				],
			},
			{
				id: 2,
				title: 'eurobeat',
				description: '高速テンポで明るいダンス系ポップ音楽',
				num: 0,
				isPlaying: false,
				audios: [
					{
						id: uuidv4(),
						title: '君の光が眩しい3',
						audioUrl: '/eurobeat-1.mp3',
						tags: [{ name: 'eurobeat', level: 0 }],
					},
				],
			},
		],
	},
	{
		tips: '電子音の世界へ',
		emoji: '🎧',
		title: 'エレクトロニック系',
		list: [
			{
				id: 3,
				title: 'drum and bass',
				description: '高速なビートとベースが特徴のエレクトロニック音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 4,
				title: 'techno',
				description: 'ミニマルなリズムと電子音主体の音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 5,
				title: 'chiptune',
				description: 'レトロなゲーム風の電子音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
		],
	},
	{
		tips: '力強いサウンド！',
		emoji: '🎸',
		title: 'ロック・メタル系',
		list: [
			{
				id: 6,
				title: 'doom metal',
				description: '重厚でゆっくりとしたメタル音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 7,
				title: 'thrash metal',
				description: '高速かつ攻撃的なメタル音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 8,
				title: 'grindcore',
				description: '最速テンポで過激な音楽スタイル',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 9,
				title: 'rock',
				description: 'ギター主体のポピュラー音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
		],
	},
	{
		tips: 'リラックスと芸術性',
		emoji: '🎷',
		title: 'ジャズ・クラシック系',
		list: [
			{
				id: 10,
				title: 'jazz',
				description: '即興演奏が特徴的な音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 11,
				title: 'opera',
				description: '声楽とオーケストラのクラシック音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
		],
	},
	{
		tips: 'リズムでノる！',
		emoji: '🎤',
		title: 'ヒップホップ・R&B系',
		list: [
			{
				id: 12,
				title: 'hip-hop',
				description: 'ラップを中心としたリズム主体の音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 13,
				title: 'r&b',
				description: 'ソウルフルで滑らかな音楽スタイル',
				num: 0,
				isPlaying: false,
				audios: [],
			},
		],
	},
	{
		tips: '伝統と哀愁',
		emoji: '🎻',
		title: 'ブルース・フォーク系',
		list: [
			{
				id: 14,
				title: 'blues',
				description: '哀愁のあるメロディが特徴',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 15,
				title: 'folk',
				description: '民謡や伝統音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
		],
	},
	{
		tips: '和の音色で癒される',
		emoji: '🎌',
		title: '和風音楽系',
		list: [
			{
				id: 16,
				title: 'koto',
				description: '箏の音色を追加',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 17,
				title: 'shamisen',
				description: '三味線の音色を追加',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 18,
				title: 'shakuhachi',
				description: '尺八の音色を追加',
				num: 0,
				isPlaying: false,
				audios: [],
			},
		],
	},
	{
		tips: 'テンポ調整',
		emoji: '🎵',
		title: 'テンポ',
		list: [
			{
				id: 19,
				title: 'downtempo',
				description: '暗くゆっくりとしたテンポ、曲調が変化しやすい',
				num: 1,
				isPlaying: false,
				audios: [],
			},
			{
				id: 20,
				title: 'slowtempo',
				description: '曲に安定感を持たせるゆったりしたテンポ',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 21,
				title: 'uptempo',
				description: 'テンポを上げてエネルギッシュにする',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 22,
				title: 'hardstyle',
				description: '重低音を強調したダンス音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 23,
				title: 'upbeat',
				description: 'リズムを強調したエネルギッシュな音楽',
				num: 0,
				isPlaying: false,
				audios: [],
			},
		],
	},
	{
		tips: 'リズム調整',
		emoji: '🥁',
		title: 'リズム',
		list: [
			{
				id: 24,
				title: 'bouncy',
				description: '表拍のドラムを強調した縦ノリ',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 25,
				title: 'groovy',
				description: 'ベースを強調した横ノリ',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 26,
				title: 'rhythmical',
				description: 'リズム楽器全般を強調',
				num: 0,
				isPlaying: false,
				audios: [],
			},
		],
	},
	{
		tips: '曲調の明暗',
		emoji: '🌗',
		title: '曲調',
		list: [
			{
				id: 27,
				title: 'light',
				description: '明るい雰囲気（メジャーコード）',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 28,
				title: 'dark',
				description: '暗い雰囲気（マイナーコード）',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 29,
				title: 'emotional',
				description: '感情豊かな雰囲気を付与',
				num: 0,
				isPlaying: false,
				audios: [],
			},
		],
	},
	{
		tips: '声の種類',
		emoji: '🎤',
		title: '声',
		list: [
			{
				id: 30,
				title: 'male',
				description: '男性ボーカル',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 31,
				title: 'female',
				description: '女性ボーカル',
				num: 1,
				isPlaying: false,
				audios: [],
			},
			{
				id: 32,
				title: 'kawaii',
				description: '可愛らしいボーカルスタイル',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 33,
				title: '-male',
				description: '男性ボーカルを抑えた効果',
				num: 0,
				isPlaying: false,
				audios: [],
			},
			{
				id: 34,
				title: '-female',
				description: '女性ボーカルを抑えた効果',
				num: 0,
				isPlaying: false,
				audios: [],
			},
		],
	},
];
