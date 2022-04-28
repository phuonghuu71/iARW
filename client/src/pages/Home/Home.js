import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Login from "../../components/Login/Login";

function Home() {
  const [loginMenuModal, setLoginMenuModal] = useState(false);

  return (
    <LoginContext.Provider value={{ loginMenuModal, setLoginMenuModal }}>
      <div className="overflow-x-hidden">
        <Header />
        <Body />
        <Footer />
        <Login />
      </div>
    </LoginContext.Provider>
  );
}

export const LoginContext = React.createContext();
export default Home;
