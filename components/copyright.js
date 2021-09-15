import React from "react";

export default function Copyright() {
  return (
    <div className="copyright">
      <div className="container copyright__wrapper">
        <a className="copyright__logo-link">
          <img
            src="https://www.glofox.com/wp-content/uploads/2021/04/glofox-logo-black.svg"
            className="copyright__logo-img"
            alt="glofox-logo-black"
            loading="lazy"
            height="32"
            width="124"
          />
        </a>

        <div className="ui-text copyright__rights">
          <strong>©2021 Galiley Enterprise</strong> — Все права защищены
        </div>

        <nav className="copyright__socials">
          <a href="#" className="copyright__social"></a>
          <a href="#" className="copyright__social"></a>
          <a href="#" className="copyright__social"></a>
          <a href="#" className="copyright__social"></a>
        </nav>
      </div>
    </div>
  );
}
