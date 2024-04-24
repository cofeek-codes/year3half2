import { Link } from "react-router-dom";

const Logo = () => {
   return (
      <div className="header__logo">
         <img alt="logo" src="/src/assets/icon.png" />
         <Link to={'/'}>
            <h1>
               <span>semi</span>
               <span>column</span>
            </h1>
         </Link>
      </div>
   );
};

export default Logo;
