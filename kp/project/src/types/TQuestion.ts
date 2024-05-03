import { TAnswer } from "./TComment"

export type TQuestion = {
   id: number,
   title: string,
   description: string,
   tags: string[]
   authorId: number,
   date: string // hardcoded string of string from date
   views: number
   comments: number
   upvotes: number,
   answers: TAnswer[]
}
