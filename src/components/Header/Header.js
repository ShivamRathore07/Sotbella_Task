import React from "react";
import style from "./Header.module.scss";
import Logo from "../../assets/header-logo.svg";
import {ReactComponent as Hamburger} from "../../assets/hamburger.svg";

const Header = () => {
  return (
    <>
      <div className={style["header-container"]}>
        <div className={style["header-offer"]}>
          Unlock exclusive insights: Join us and optimize your supply chain for
          2024!
        </div>
        <div className={style["header"]}>
          <div className={style["header-tabs-container"]}>
            <div className={style["header-tab"]}>
              <img src={Logo} alt="logo" className={style["logo"]} />
              <div className={style["header-tab-links"]}>
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Portfolio</div>
                <div>Faqs</div>
              </div>
            </div>
            <button className={style["header-btn"]}>Contact Sales</button>
            <Hamburger className={style["hamburger-btn"]}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
