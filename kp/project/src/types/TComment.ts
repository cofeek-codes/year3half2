import { TUser } from "./TUser"

export type TAnswer = {
   questionId: number | string,
   author: TUser,
   content: string,
   time: string
   likes: number,
   dislikes: number,
}
