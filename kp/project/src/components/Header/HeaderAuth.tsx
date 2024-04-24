import { Link } from "react-router-dom";
import HeaderBurger from "./HeaderBurger";

const HeaderAuth = () => {
   return (
      <>
         <div className="header__auth">
            <button className="btn__register">
               <img alt="user-plus" src="/src/assets/user-plus.png" />
               <Link to={'/auth/register'}>
                  <span>Регистрация</span>
               </Link>
            </button>
            <Link to={'/auth/login'}>
               <button className="btn__login">Вход</button>
            </Link>
         </div>
         <HeaderBurger />
      </>
   );
};

export default HeaderAuth;
