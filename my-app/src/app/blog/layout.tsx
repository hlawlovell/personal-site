import { MenuBar } from '@/components/menu-bar';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<MenuBar />
			{children}
		</>
	);
}
