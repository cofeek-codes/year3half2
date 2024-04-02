export type TQuestion = {
	id: number,
	title: string,
	description: string,
	tags: string[]
	authorId: number
	views: number
	comments: number
	upvotes: number
}
