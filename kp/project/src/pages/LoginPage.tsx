import AuthFromTitle from "../components/Auth/AuthFromTitle"
import LoginForm from '../components/Auth/LoginForm'
import AuthLayout from "../layouts/AuthLayout"
import { images } from "../utils/imageLoader"

const LoginPage = () => {
   return <AuthLayout>
      <LoginForm />
      <div>
         <img className="w-[860px] h-[816px] relative" src={images.AuthImg} />
      </div>
   </AuthLayout>
}

export default LoginPage