import MainHeader from "@/components/layouts/MainHeader";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <MainHeader />
      {children}
      <footer></footer>
    </>
  );
};

export default layout;
