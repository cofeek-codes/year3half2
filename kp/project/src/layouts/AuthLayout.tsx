import { ReactNode } from "react";
import Header from "../components/Header/Header";

const AuthLayout = ({ children }: { children: ReactNode }) => {
   return (
      <>
         <Header />
         <main className="auth__wrapper">
            <div className="inner__wrapper">
               {children}
            </div>
         </main>
      </>
   );
};

export default AuthLayout;
