import { useState } from "react";
import ComboCard from "./ComboCard";
import ComboModal from "./ComboModal";
import "../css/Combo.css";

import panipuri from "../assets/panipuri.JPG";
import corn from "../assets/corn.jpg";
import kachori from "../assets/kachori.jpg";
import chanachur from "../assets/chanachur.jpg";
import khajurballs from "../assets/khajurballs.jpg";

function Combo() {

  const [selectedCombo, setSelectedCombo] = useState(null);

  const combos = [

    {
      title: "Street Fusion",

      items: [
        "🥣 Pani Puri",
        "🌽 Corn Chaat"
      ],

      price: "₹55",

      image: panipuri,

      description:
        "A delicious street-style combo of crispy Pani Puri and tasty Corn Chaat. Perfect for a quick snack.",

      bestFor: [
        "Evening Snacks",
        "Friends",
        "School Break"
      ]
    },

    {
      title: "Royal Chaat",

      items: [
        "🥟 Kachori",
        "🥣 Pani Puri"
      ],

      price: "₹65",

      image: kachori,

      description:
        "A royal combination of crispy Kachori with refreshing Pani Puri for true chaat lovers.",

      bestFor: [
        "Chaat Lovers",
        "Lunch Break",
        "Party Snack"
      ]
    },

    {
      title: "Flavour Fiesta",

      items: [
        "🌶️ Chanachur Chaat",
        "🥣 Pani Puri"
      ],

      price: "₹55",

      badge: "⭐ BEST SELLER",

      image: chanachur,

      description:
        "Our best-selling combo with spicy Chanachur Chaat and flavorful Pani Puri.",

      bestFor: [
        "Spicy Food Lovers",
        "Students",
        "Quick Hunger"
      ]
    },

    {
      title: "Wellness Delight",

      items: [
        "🫓 Thepla",
        "🌰 Khajur Balls"
      ],

      price: "₹90",

      image: khajurballs,

      description:
        "Healthy and nutritious combo with homemade Thepla and energy-rich Khajur Balls.",

      bestFor: [
        "Healthy Diet",
        "Morning Breakfast",
        "Fitness Lovers"
      ]
    },

    {
      title: "CRAVE SPECIAL",

      items: [
        "🥟 Kachori",
        "🥣 Pani Puri",
        "🌽 Corn Chaat"
      ],

      price: "₹120",

      badge: "⭐ MOST POPULAR",

      image: corn,

      description:
        "The ultimate combo featuring three customer favorites at an amazing price.",

      bestFor: [
        "Family",
        "Best Value",
        "Most Ordered"
      ]
    }

  ];

  return (

    <section className="combo-section" id="combo">

      <h1>SIGNATURE COMBOS</h1>

      <div className="combo-grid">

        {combos.map((combo, index) => (

          <ComboCard

            key={index}

            title={combo.title}

            items={combo.items}

            price={combo.price}

            badge={combo.badge}

            onClick={() => setSelectedCombo(combo)}

          />

        ))}

      </div>

      <ComboModal

        combo={selectedCombo}

        onClose={() => setSelectedCombo(null)}

      />

    </section>

  );

}

export default Combo;
