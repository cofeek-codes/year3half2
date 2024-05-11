import { TUser } from "./TUser"

export type TAnswer = {
   questionId: number,
   author: TUser,
   content: string,
   time: string
   likes: number,
   dislikes: number,
}
