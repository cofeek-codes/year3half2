import { User } from './User'
export type Question = {
	id: number,
	title: string,
	description: string,
	tags: string[]
	authorId: number
	views: number
	comments: number
	upvotes: number
}
