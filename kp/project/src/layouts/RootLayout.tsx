import { ReactNode } from "react";
import Header from "../components/Header/Header";

const RootLayout = ({ children }: { children: ReactNode }) => {
   return (
      <>
         <Header />
         <main className="main__wrapper">
            <div className="inner__wrapper">
               {children}
            </div>
         </main>
      </>
   );
};

export default RootLayout;
