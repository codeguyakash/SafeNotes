import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Link className="link" to="/">
          Safe Note
        </Link>
      </div>
    </>
  );
};

export default Footer;
