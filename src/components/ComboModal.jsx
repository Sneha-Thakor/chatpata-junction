import "../css/ComboModal.css";
import { FaTimes, FaStar } from "react-icons/fa";

function ComboModal({ combo, onClose }) {
  if (!combo) return null;

  return (
    <div className="combo-modal-overlay" onClick={onClose}>

      <div
        className="combo-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="combo-close-btn"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <img
          src={combo.image}
          alt={combo.title}
          className="combo-modal-img"
        />

        <h2>{combo.title}</h2>

        <p className="combo-modal-price">
          {combo.price}
        </p>

        {combo.badge && (
          <span className="combo-modal-badge">
            {combo.badge}
          </span>
        )}

        <p className="combo-modal-desc">
          {combo.description}
        </p>

        <div className="combo-includes">

          <h3>🍽️ Includes</h3>

          <ul>

            {combo.items.map((item, index) => (

              <li key={index}>
                {item}
              </li>

            ))}

          </ul>

        </div>

        <div className="combo-bestfor">

          <h3>
            <FaStar /> Best For
          </h3>

          <ul>

            {combo.bestFor.map((item, index) => (

              <li key={index}>
                {item}
              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}

export default ComboModal;
