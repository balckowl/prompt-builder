import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export default function Container({ children }: Props) {
	return <div className="container mx-auto">{children}</div>;
}
