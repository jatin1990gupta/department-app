import React from "react";
import { Link } from "react-router-dom";

import clgLogo from "../Assets/img/clg-logo-light.png";
import { footerItems } from "../constants/footer";
import { COPYRIGHT_TEXT } from "../constants/texts/footer";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content--left">
          <img src={clgLogo} alt="" />
        </div>
        <div className="footer__content--right">
          {footerItems.map((item, index) => (
            <div className="content__column" key={index}>
              {item.map((it) => (
                <Link className="content__column__link" to={it.link} key={it.id}>
                  <p>{it.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom--left">{COPYRIGHT_TEXT}</div>
        <div className="footer__bottom--right">
          Made by <b>Jatin</b> & <b>Abiral</b>{" "}
          <span>♥</span> in 2021.
        </div>
      </div>
    </div>
  );
};

export default Footer;
