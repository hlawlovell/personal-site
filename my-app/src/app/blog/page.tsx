'use client';
import { MenuBar } from '@/components/menu-bar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Blog() {
	const router = useRouter();
	return (
		<>
			<Card
				className="w-[350px] h-[350px] cursor-pointer justify-center"
				onClick={() => router.push('/blog/add')}
			>
				<Link href="/blog/add" />
				<CardHeader className="items-center">
					<CardTitle>Create new Post</CardTitle>
				</CardHeader>
			</Card>
		</>
	);
}
