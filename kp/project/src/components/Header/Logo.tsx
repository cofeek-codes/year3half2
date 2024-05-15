import { Link } from "react-router-dom";
import { images } from "../../utils/imageLoader";

const Logo = () => {
   return (
      <div className="header__logo">
         <img alt="logo" src={images.Logo} />
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
