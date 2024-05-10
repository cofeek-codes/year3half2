import { Link, useNavigate } from "react-router-dom"
import AuthFromTitle from "./AuthFromTitle"
import { useAuthStore } from "../../store/authStore"
import { useState } from "react"
import { TUser } from "../../types/TUser"
import { images } from "../../utils/imageLoader"
import { v4 as uuid } from 'uuid';
import { mockUsers } from "../../mock/MockUsers"
import { faker } from "@faker-js/faker"

type TCreds = {
   name: string,
   email: string,
   password: string
}


const RegisterForm = () => {
   const [creds, setCreds] = useState<TCreds>({ name: '', email: '', password: '' })
   const [loginError, setLoginError] = useState<boolean>(false)
   const registerToStorage = useAuthStore.getState().register
   const registeredUsers = useAuthStore.getState().registeredUsers
   const navigate = useNavigate();
   const register = (e) => {
      e.preventDefault()
      console.log('current register creds')
      console.log(creds)
      console.log('-----------------------------------------')
      console.log('creds for debug register')
      let debugUser = mockUsers[faker.number.int(2)]
      console.log(debugUser.email + " " + debugUser.password)
      console.log('-----------------------------------------')
      let candidate = registeredUsers.find(u => u.email == creds.email) // register candidate
      if (candidate) {
         setLoginError(true)
      } else {
         let newUser: TUser = {
            id: uuid(),
            avatar: images.Avatar1, // TODO: change to placeholder
            email: creds.email,
            lastOnline: new Date().toLocaleString(),
            name: creds.name,
            password: creds.password,
            questionsIds: []
         }
         registerToStorage(newUser)
         console.log(registeredUsers)
         navigate('/')
      }
   }

   return <div className="w-[580px] h-[785px] px-[100px] py-[96px] flex-col justify-start items-start gap-5 inline-flex">
      <AuthFromTitle />
      <form onSubmit={register} className="flex-col justify-start items-start gap-[15px] flex">
         <input className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" onChange={(e => setCreds({ name: e.target.value, email: creds.email, password: creds.password }))} defaultValue={'azakost'} placeholder="Username" type="text" />
         <input onChange={(e => setCreds({ email: e.target.value, name: creds.name, password: creds.password }))} className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" defaultValue={'azakost@gmail.com'} placeholder="Email" type="email" />
         <input onChange={(e => setCreds({ email: creds.email, name: creds.name, password: e.target.value }))} className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" defaultValue={'password'} placeholder="Password" type="password" />
         <button type='submit'>
            <div className="w-[380px] h-[38px] relative bg-orange-500 rounded-[5px] flex items-center justify-center">
               <div className="text-white text-[15px] font-black font-['Roboto'] tracking-tight">Зарегистрироваться</div>
            </div>
         </button>
      </form >
      {loginError && (
         <div>
            <div className="bg-red-100 border border-red-400 mt-5 text-red-700 px-4 py-3 rounded relative" role="alert" >
               <strong className="font-bold mr-3">Ошибка</strong>
               <span className="block sm:inline">Почта занята</span>
            </div>
         </div>

      )}

   </div>

}

export default RegisterForm
