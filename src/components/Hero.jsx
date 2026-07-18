import "../css/Hero.css";
import foodBanner from "../assets/foodBanner.jpg";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="hero-left">

          

          <h1>Crave Corner</h1>

          <h2>Fresh • Hygienic • Full of Flavour</h2>

          <p>
            Enjoy delicious snacks made with fresh ingredients.
            From crispy Pani Puri to healthy Thepla, every bite
            is prepared with quality, hygiene and lots of love.
          </p>

          <div className="hero-buttons">

            <a href="#menu">
              <button className="primary-btn">
                Explore Menu
              </button>
            </a>

            <a href="#combo">
              <button className="secondary-btn">
                Signature Combos
              </button>
            </a>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={foodBanner}
            alt="Food Banner"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
