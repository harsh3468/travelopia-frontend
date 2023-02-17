import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../resources/icons/logo.svg";
export default function Home() {
  
  return (
    <div className="home__container"> 
    <div className="image__container">
       <img src={Logo} alt="TravelOpia" />
    </div>
      <Outlet />
    </div>
  );
}
