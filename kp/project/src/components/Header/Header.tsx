import HeaderAuth from "./HeaderAuth";
import HeaderTitle from "./HeaderTitle";
import Logo from "./Logo";

const Header = () => {
   return (
      <>
         <header className="header">
            <Logo />
            <HeaderTitle />
            <HeaderAuth />
         </header>
      </>
   );
};

export default Header;
