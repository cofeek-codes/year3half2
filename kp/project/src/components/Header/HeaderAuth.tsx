import { Link } from "react-router-dom";
import HeaderBurger from "./HeaderBurger";
import { useAuthStore } from "../../store/authStore";
import { TUser } from "../../types/TUser";
import { useEffect, useState } from "react";

const HeaderAuth = () => {
   const storeUser = useAuthStore(state => state.authedUser)
   const [localUser, setLocalUser] = useState<TUser | undefined>(storeUser);

   useEffect(() => {
      console.log(storeUser)
      setLocalUser(storeUser);
      console.log(storeUser)
   }, [storeUser]);

   return (
      <>
         <div className="header__auth">
            {typeof localUser !== undefined ? (
               <>
                  <button className="btn__register">
                     <img alt="user-plus" src="/src/assets/user-plus.png" />
                     <Link to={'/auth/register'}>
                        <span>Регистрация</span>
                     </Link>
                  </button>
                  <Link to={'/auth/login'}>
                     <button className="btn__login">Вход</button>
                  </Link>
               </>
            ) : (
            <>
               <button className="btn__register">
                  <img alt="user-plus" src="/src/assets/user-plus.png" />
                  <Link to={'/newquestion'}>
                     <span>Задать вопрос</span>
                  </Link>
               </button>
               <Link to={'/auth/logout'}>
                  <button className="btn__login">Выйти</button>
               </Link>
            </>
            )}
         </div>
         <HeaderBurger />
      </>
   );
};

export default HeaderAuth;
