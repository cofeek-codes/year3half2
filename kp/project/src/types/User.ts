import { Question } from "./Question"

export type User = {
	id: number,
	avatar: string,
	name: string
	lastOnline: string
	questionsIds: number[]
}
