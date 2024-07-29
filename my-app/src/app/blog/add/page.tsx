'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import Markdown from 'marked-react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const blogSchema = z.object({
	title: z.string().min(1, 'Please enter a title'),
	input: z.string().min(1, 'Please enter some content'),
	tags: z.string().min(1, 'Please enter a tag'),
});

export default function BlogAdd() {
	const [markdownText, setMarkdownText] = useState('');
	const form = useForm<z.infer<typeof blogSchema>>({
		resolver: zodResolver(blogSchema),
		defaultValues: {
			title: '',
			input: '',
			tags: '',
		},
	});
	const watchFields = form.watch(['title', 'input', 'tags']);

	const router = useRouter();

	useEffect(() => {
		const markdownText = `# ${form.getValues().title}\n\n${form.getValues().input}`;
		setMarkdownText(markdownText);
	}, [watchFields]);

	const onSubmit = (values: z.infer<typeof blogSchema>) => {
		router.push('/blog');
	};

	return (
		<div className="flex flex-row justify-center gap-5 mx-5">
			<div className="w-1/2">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="input"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Input</FormLabel>
									<FormControl>
										<Textarea className="min-h-96" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="tags"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tags</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<Button className="mt-5" type="submit">
							Create
						</Button>
					</form>
				</Form>
			</div>
			<div className="mt-5 w-1/2">
				<Markdown style={{}}>{markdownText}</Markdown>
			</div>
		</div>
	);
}
