import { create } from "zustand";
import { TUser } from "../types/TUser";
import { mockUsers } from "../mock/MockUsers";

type State = {
   registeredUsers: TUser[],
   authedUser: TUser | undefined // possibly undefined instead of null
   login: (user: TUser | undefined) => void
   register: (user: TUser | undefined) => void
   logout: () => void
};

const initialState: Partial<State> = {
   registeredUsers: mockUsers,
   authedUser: undefined,
}

export const useAuthStore = create<Partial<State>>((set) => ({
   ...initialState,

   login: (user: TUser | undefined) => {
      set(() => ({ authedUser: user }))
      console.log('[STORE]: user logged in:', user);
   },
   register: (user: TUser | undefined) => {
      //@ts-ignore
      set(state => ({ authedUser: user, registeredUsers: [...state.registeredUsers, user] }))
      console.log('[STORE]: registered user added:', user);
   },

   logout: () => {
      set(() => ({ authedUser: undefined }))
      console.log('[STORE]: user logged out');
   }


}))
