import { Link } from "react-router-dom"
import AuthFromTitle from "./AuthFromTitle"

const RegisterForm = () => {
   return <div className="w-[580px] h-[785px] px-[100px] py-[193px] flex-col justify-start items-start gap-5 inline-flex">
      <AuthFromTitle />
      <form className="flex-col justify-start items-start gap-[15px] flex">
         <input className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" defaultValue={'azakost'} placeholder="Username" type="text" />
         <input className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" defaultValue={'azakost@gmail.com'} placeholder="Email" type="email" />
         <input className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" defaultValue={'password'} placeholder="Password" type="password" />
         <input className="border h-[42px] pl-[15px] w-[380px] rounded-[5px] border-solid border-[#eaeaea];" defaultValue={'password'} placeholder="Repeat Password" type="password" />
         <Link to={'/'}>
            <div className="w-[380px] h-[38px] relative bg-orange-500 rounded-[5px] flex items-center justify-center">
               <div className="text-white text-[15px] font-black font-['Roboto'] tracking-tight">Зарегистрироваться</div>
            </div>
         </Link>
      </form >
   </div>

}

export default RegisterForm
