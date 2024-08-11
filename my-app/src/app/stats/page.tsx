'use client';
import { MenuBar } from '@/components/menu-bar';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Stats() {
	const router = useRouter();
	return (
		<>
			<Card
				className="w-[350px] h-[350px] cursor-pointer justify-center"
				onClick={() => router.push('/blog/add')}
			>
				<CardHeader className="items-center">
					<CardTitle>Japanese</CardTitle>
				</CardHeader>
				<CardContent>
					<h2>Weekly stats</h2>
					<p>Learned cards: x</p>
					<p>Hours immersed: x</p>
				</CardContent>
				<CardFooter>
					<h2>Yearly stats</h2>
				</CardFooter>
			</Card>
			<Card
				className="w-[350px] h-[350px] cursor-pointer justify-center"
				onClick={() => router.push('/blog/add')}
			>
				<CardHeader className="items-center">
					<CardTitle>Art</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Finished paintings: x</p>
					<p>Hours practiced: x</p>
				</CardContent>
			</Card>
			<Card
				className="w-[350px] h-[350px] cursor-pointer justify-center"
				onClick={() => router.push('/blog/add')}
			>
				<CardHeader className="items-center">
					<CardTitle>Climbing</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Weekly max hang: x</p>
					<p>Moonboard problems sent: x</p>
				</CardContent>
			</Card>
			<Card
				className="w-[350px] h-[350px] cursor-pointer justify-center"
				onClick={() => router.push('/blog/add')}
			>
				<CardHeader className="items-center">
					<CardTitle>Finance</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Current savings:</p>
					<p>Target: $100,000</p>
				</CardContent>
			</Card>
		</>
	);
}
