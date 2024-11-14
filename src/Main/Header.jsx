import React from "react";
import Home from "./UserAuothentication/Pages/Home";
import Bar from './UserAuothentication/NavbarComponent/Bar'






function Header() {
  return (
    <>
      <div>
        <Bar/>
        <div>
          <Home/>
        </div>
      </div>
    </>
  );
}

export default Header;
