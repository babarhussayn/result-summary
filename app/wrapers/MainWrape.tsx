import React, { FC, ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainWrapeProps {
  children: ReactNode;
}

const MainWrape: FC<MainWrapeProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainWrape;
