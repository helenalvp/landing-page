import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer pt-5">
        <div>
          Icons made by
          <a
            href="https://www.freepik.com"
            title="Freepik"
            className="footer-link"
          >
            Freepik
          </a>
          ,
          <a
            href="https://www.flaticon.com/authors/iconixar"
            title="iconixar"
            className="footer-link"
          >
            iconixar
          </a>
          , and
          <a
            href="https://www.flaticon.com/authors/pixelmeetup"
            title="Pixelmeetup"
            className="footer-link"
          >
            Pixelmeetup
          </a>
          from
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            className="footer-link"
          >
            www.flaticon.com
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
