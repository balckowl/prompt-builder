import { type VariantProps, tv } from 'tailwind-variants';

export default function Badge({
	size = 'sm',
}: VariantProps<typeof BadgeStyle>) {
	const BadgeStyle = tv({
		base: 'bg-red-400 rounded-full grid place-content-center text-white font-bold',
		variants: {
			size: {
				sm: 'size-[25px] text-[14px]',
				md: 'size-10 text-[16px]',
			},
		},
	});

	return <div className={BadgeStyle({ size })}>2</div>;
}
