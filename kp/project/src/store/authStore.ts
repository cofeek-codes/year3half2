import { create } from "zustand";
import { TUser } from "../types/TUser";
import { mockUsers } from "../mock/MockUsers";

type State = {
   registeredUsers: TUser[],
   authedUser: TUser | undefined // possibly undefined instead of null
   login: (user: TUser | undefined) => void
   register: (user: TUser | undefined) => void
   logout: (user: TUser) => void
};

const initialState: State = {
   registeredUsers: mockUsers,
   authedUser: undefined,
}

export const useAuthStore = create<State>((set) => ({
   ...initialState,

   login: (user: TUser) => {
      set(state => ({ authedUser: user }))
      console.log('[STORE]: user logged in:', user);
   },
   register: (user: TUser) => {
      set(state => ({ authedUser: user, registeredUsers: [...registeredUsers, user] }))
      console.log('[STORE]: registered user added:', user);
   },

   logout: () => {
      set(state => ({ authedUser: undefined }))
      console.log('[STORE]: user logged out');
   }


}))
