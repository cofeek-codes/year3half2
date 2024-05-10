import { Link } from "react-router-dom"
import AuthFromTitle from "./AuthFromTitle"
import { useState } from "react"
import { useAuthStore } from "../../store/authStore"
import { mockUsers } from "../../mock/MockUsers"
import { faker } from "@faker-js/faker"

type TCreds = {
   email: string,
   password: string
}

const LoginForm = () => {
   const [creds, setCreds] = useState<TCreds>({ email: '', password: '' })
   const [loginError, setLoginError] = useState<boolean>(false)
   const loginToStorage = useAuthStore.getState().login
   const registeredUsers = useAuthStore.getState().registeredUsers
   const login = (e) => {
      e.preventDefault()
      console.log('current login creds')
      console.log(creds)
      console.log('-----------------------------------------')
      console.log('creds for debug login')
      let debugUser = mockUsers[faker.number.int(2)]
      console.log(debugUser.email + " " + debugUser.password)
      console.log('-----------------------------------------')
      let candidate = registeredUsers.find(u => (u.email == creds.email) && (u.password == creds.password)) // login candidate
      if (!candidate) setLoginError(true)
      loginToStorage(candidate)

   }
   return <div className="w-[580px] h-[785px] px-[100px] py-[96px] flex-col justify-start items-start gap-5 inline-flex">
      <AuthFromTitle />
      <form onSubmit={login} className="flex-col justify-start items-start gap-[15px] flex">
         <input onChange={e => { setCreds({ email: e.target.value, password: creds.password }) }} className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" defaultValue={'azakost@gmail.com'} placeholder="Email" type="email" />
         <input onChange={e => setCreds({ password: e.target.value, email: creds.email })} className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" defaultValue={'password'} placeholder="Password" type="password" />
         <button type="submit">
            <div className="w-[380px] h-[38px] relative bg-orange-500 rounded-[5px] flex items-center justify-center">
               <div className="text-white text-[15px] font-black font-['Roboto'] tracking-tight">Войти</div>
               {loginError && (
                  <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                     <strong class="font-bold">Ошибка</strong>
                     <span class="block sm:inline">Введены неверные данные</span>
                     <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                     </span>
                  </div>
               )}
            </div>
         </button>
      </form>
   </div>

}

export default LoginForm
