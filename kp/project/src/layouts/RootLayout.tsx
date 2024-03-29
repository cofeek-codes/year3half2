import { ReactNode } from "react";
import Header from "../components/Header/Header";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};

export default RootLayout;
