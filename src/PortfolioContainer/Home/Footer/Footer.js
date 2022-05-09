import React from "react";
import "./Footer.css";
import footerimg from "../../../assets/Home/shape-bg.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={footerimg} alt="no internet connexion" />
      </div>
    </div>
  );
}
