import { type VariantProps, tv } from 'tailwind-variants';

const BadgeStyle = tv({
	base: 'bg-red-400 rounded-full grid place-content-center text-white font-bold',
	variants: {
		size: {
			sm: 'size-[25px] text-[14px]',
			md: 'size-10 text-[16px]',
		},
	},
});

type Props = VariantProps<typeof BadgeStyle> & { num: number };

export default function Badge({ size = 'sm', num = 0 }: Props) {
	return <div className={BadgeStyle({ size })}>{num}</div>;
}
