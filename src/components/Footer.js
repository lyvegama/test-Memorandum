import React from "react";

import fb from "../assets/fb.png";
import twi from "../assets/twi.jpg";
import inst from "../assets/inst.png";

const Footer = () => {
  return (
    <footer class="footer text-center text-lg-start text-muted">
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Copyright © todos los derechos reservados</span>
        </div>

        <div className="footerIco">
          <a href="" class="ico">
            <img src={fb} className="foo-img" />
          </a>
          <a href="" class="ico">
            <img src={twi} className="foo-img" />
          </a>
          <a href="" class="ico">
            <img src={inst} className="foo-img" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
