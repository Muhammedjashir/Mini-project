import React from "react";
import Home from "../Pages/Home";
import Bar from '../NavbarComponent/Bar'






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
