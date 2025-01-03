import React from "react";
import style from "./Footer.module.scss";
import Logo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <>
      <div className={style["footer-container"]}>
        <div>
          <img
            src={Logo}
            alt="Logo"
            style={{ backgroundColor: "transparent" }}
          />
          <p>
            216, Sector 83 Block A Rd, B Block, A Block <br />
            Sector 83, Noida, Uttar Pradesh 201305
          </p>
          <p className={style["flex-center"]}>
          <h4>Phone:</h4> <span>0123456789</span>
          </p>
          <p className={style["flex-center"]}>
            <h4>Email:</h4> <span>contact@sotbella360.com</span>
          </p>
        </div>
        <div>
          <h5>Useful Links</h5>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>Faqs</p>
        </div>
        <div>
          <h5>Our Services</h5>
          <p>Tech Packs</p>
          <p>Custom Design</p>
          <p>White Labelling</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
