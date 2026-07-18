import "../css/Combo.css";

function ComboCard({
  title,
  items,
  price,
  badge,
  onClick
}) {

  return (

    <div
      className="combo-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >

      {badge && (
        <span className="badge">
          {badge}
        </span>
      )}

      <h2>{title}</h2>

      <ul>

        {items.map((item, index) => (

          <li key={index}>
            {item}
          </li>

        ))}

      </ul>

      <h3>{price}</h3>

      <button
        className="combo-btn"
        onClick={onClick}
      >
        View Combo
      </button>

    </div>

  );

}

export default ComboCard;
