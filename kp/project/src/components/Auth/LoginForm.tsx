import { Link, redirect, useNavigate } from "react-router-dom"
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
   const navigate = useNavigate();
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
      if (!candidate) {
         setLoginError(true)
      } else {
         loginToStorage(candidate)
         navigate('/')
      }
   }
   return <div className="w-[580px] h-[785px] px-[100px] py-[96px] flex-col justify-start items-start gap-5 inline-flex">
      <AuthFromTitle />
      <form onSubmit={login} className="flex-col justify-start items-start gap-[15px] flex">
         <input onChange={e => { setCreds({ email: e.target.value, password: creds.password }) }} className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" defaultValue={'azakost@gmail.com'} placeholder="Email" type="email" />
         <input onChange={e => setCreds({ password: e.target.value, email: creds.email })} className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" defaultValue={'password'} placeholder="Password" type="password" />
         <button type="submit">
            <div className="w-[380px] h-[38px] relative bg-orange-500 rounded-[5px] flex items-center justify-center">
               <div className="text-white text-[15px] font-black font-['Roboto'] tracking-tight">Войти</div>

            </div>
         </button >
         {loginError && (
            <div>
               <div className="bg-red-100 border border-red-400 mt-5 text-red-700 px-4 py-3 rounded relative" role="alert" >
                  <strong className="font-bold mr-3">Ошибка</strong>
                  <span className="block sm:inline">Введены неверные данные</span>
               </div>
            </div>

         )}
      </form >
   </div >

}

export default LoginForm
