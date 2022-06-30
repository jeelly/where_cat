import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};


export default AppLayout
