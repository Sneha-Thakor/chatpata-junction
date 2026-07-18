import { useState } from "react";
import "../css/Footer.css";
import menuPoster from "../assets/menuPoster.png";

import {
  FaPhoneAlt,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes
} from "react-icons/fa";

function Footer() {

  const [showPoster, setShowPoster] = useState(false);

  return (

    <>
      <footer className="footer" id="contact">

        <h2>CRAVE CORNER</h2>

        <p className="tagline">
          Freshly Made • Full of Flavour
        </p>

        <button
          className="menu-btn"
          onClick={() => setShowPoster(true)}
        >
          📋 View Digital Menu Card
        </button>

        <div className="contact-box">

          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span>+91 9510230798</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>snehathakor9598@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaInstagram className="icon" />
            <span>its_mesneha74</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Shreyash Foundation</span>
          </div>

        </div>

        <p className="timing">
          🕙 8:00 AM – 1:00 PM
        </p>

        <hr />

        <p className="copyright">
          © 2026 Crave Corner | All Rights Reserved
        </p>

      </footer>

      {showPoster && (

        <div
          className="poster-modal"
          onClick={() => setShowPoster(false)}
        >

          <div
            className="poster-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setShowPoster(false)}
            >
              <FaTimes />
            </button>

            <img
              src={menuPoster}
              alt="Digital Menu"
              className="poster-img"
            />

          </div>

        </div>

      )}

    </>

  );
}

export default Footer;
