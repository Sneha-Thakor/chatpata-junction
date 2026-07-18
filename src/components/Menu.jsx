import { useState } from "react";
import MenuCard from "./MenuCard";
import FoodModal from "./FoodModal";
import "../css/Menu.css";

import panipuri from "../assets/panipuri.JPG";
import kachori from "../assets/kachori.jpg";
import corn from "../assets/corn.jpg";
import chanachur from "../assets/chanachur.jpg";
import thepla from "../assets/thepla.jpg";
import khajurballs from "../assets/khajurballs.jpg";

function Menu() {

  const [selectedFood, setSelectedFood] = useState(null);

  const menuItems = [

    {
      image: panipuri,
      title: "Pani Puri",
      subtitle: "6 Pieces",
      price: "₹20",
      description: "Crispy puris served with spicy and tangy flavoured water.",
      features: [
        "6 Pieces",
        "Fresh Ingredients",
        "Tangy Water",
        "Best Seller"
      ]
    },

    {
      image: kachori,
      title: "Kachori",
      subtitle: "2 Pieces",
      price: "₹50",
      description: "Golden crispy kachori served with delicious chutneys.",
      features: [
        "2 Pieces",
        "Crispy",
        "Spicy Filling",
        "Freshly Made"
      ]
    },

    {
      image: chanachur,
      title: "Chanachur Chaat",
      subtitle: "Crunchy & Spicy",
      price: "₹40",
      description: "Crunchy chanachur mixed with fresh vegetables and spices.",
      features: [
        "Crunchy",
        "Spicy",
        "Fresh Vegetables",
        "Tasty"
      ]
    },

    {
      image: corn,
      title: "Corn Chaat",
      subtitle: "Fresh & Healthy",
      price: "₹40",
      description: "Sweet corn mixed with butter, lemon and Indian spices.",
      features: [
        "Healthy",
        "Fresh Corn",
        "Butter",
        "Lemon"
      ]
    },

    {
      image: thepla,
      title: "Thepla",
      subtitle: "Homemade",
      price: "₹25",
      description: "Soft homemade Gujarati thepla served fresh.",
      features: [
        "Homemade",
        "Healthy",
        "Fresh",
        "Gujarati Special"
      ]
    },

    {
      image: khajurballs,
      title: "Khajur Balls",
      subtitle: "5 Pieces",
      price: "₹70",
      description: "Healthy energy balls made from dates and dry fruits.",
      features: [
        "5 Pieces",
        "No Sugar",
        "Dry Fruits",
        "Healthy Snack"
      ]
    }

  ];

  return (

    <section className="menu-section" id="menu">

      <h1>OUR SIGNATURE MENU</h1>

      <div className="menu-grid">

        {menuItems.map((food, index) => (

          <MenuCard
            key={index}
            image={food.image}
            title={food.title}
            subtitle={food.subtitle}
            price={food.price}
            onClick={() => setSelectedFood(food)}
          />

        ))}

      </div>

      <FoodModal
        food={selectedFood}
        onClose={() => setSelectedFood(null)}
      />

    </section>

  );
}

export default Menu;