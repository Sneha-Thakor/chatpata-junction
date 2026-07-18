import "../css/FoodModal.css";

function FoodModal({ food, onClose }) {

  if (!food) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <img src={food.image} alt={food.name} />

        <h2>{food.name}</h2>

        <p className="price">{food.price}</p>

        <p>{food.description}</p>

        <ul>
          {food.features.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default FoodModal;
