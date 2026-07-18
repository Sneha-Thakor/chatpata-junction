import "../css/Whychoose.css";
import {
  FaLeaf,
  FaShieldAlt,
  FaRupeeSign,
  FaHeart
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why-section" id="about">

      <h1>WHY CHOOSE CRAVE CORNER?</h1>

      <p className="why-subtitle">
        We serve delicious, fresh and hygienic food that everyone loves.
      </p>

      <div className="why-container">

        <div className="why-card">
          <FaLeaf className="why-icon"/>
          <h2>Freshly Made</h2>
          <p>
            Every dish is prepared fresh with quality ingredients.
          </p>
        </div>

        <div className="why-card">
          <FaShieldAlt className="why-icon"/>
          <h2>Hygienic</h2>
          <p>
            Clean preparation and safe serving for everyone.
          </p>
        </div>

        <div className="why-card">
          <FaRupeeSign className="why-icon"/>
          <h2>Pocket Friendly</h2>
          <p>
            Tasty food at affordable prices for students.
          </p>
        </div>

        <div className="why-card">
          <FaHeart className="why-icon"/>
          <h2>Made With Love</h2>
          <p>
            Every order is served with care and a smile.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;
