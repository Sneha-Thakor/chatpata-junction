import "../css/Menu.css";

function MenuCard({
  image,
  title,
  subtitle,
  price,
  onClick,
}) {
  return (
    <div className="menu-card" onClick={onClick}>

      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{subtitle}</p>

      <h2>{price}</h2>

    </div>
  );
}

export default MenuCard;