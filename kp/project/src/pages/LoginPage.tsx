import LoginForm from '../components/Auth/LoginForm'
import AuthLayout from "../layouts/AuthLayout"
import { images } from "../utils/imageLoader"

const LoginPage = () => {
   return <AuthLayout>
      <LoginForm />
      <div>
         <img className="w-[860px] h-[816px] relative auth__image" src={images.AuthImg} />
      </div>
   </AuthLayout>
}

export default LoginPage
