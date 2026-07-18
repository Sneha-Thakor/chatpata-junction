import { useState, useEffect } from "react";
import "../css/Satisfaction.css";
import {
  FaSmile,
  FaUtensils,
  FaUsers,
  FaAward
} from "react-icons/fa";

function Satisfaction() {

  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {

    let count = 0;

    const interval = setInterval(() => {

      count++;

      setCustomerCount(count);

      if (count === 20) {
        clearInterval(interval);
      }

    }, 100); // Speed (100ms)

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="satisfaction-section">

      <h1>OUR ACHIEVEMENTS</h1>

      <p className="satisfaction-subtitle">
        Serving happiness with every bite.
      </p>

      <div className="satisfaction-container">

        <div className="satisfaction-card">
          <FaSmile className="s-icon" />
          <h2>{customerCount}+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="satisfaction-card">
          <FaUtensils className="s-icon" />
          <h2>6</h2>
          <p>Delicious Menu Items</p>
        </div>

        <div className="satisfaction-card">
          <FaUsers className="s-icon" />
          <h2>5</h2>
          <p>Special Combos</p>
        </div>

        <div className="satisfaction-card">
          <FaAward className="s-icon" />
          <h2>100%</h2>
          <p>Quality & Hygiene</p>
        </div>

      </div>

    </section>

  );
}

export default Satisfaction;
