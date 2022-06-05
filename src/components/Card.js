import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Card({ item }) {
  const { coverImg: img, stats, openSpots, title, location, price } = item;
  let badgeText = null;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <div className="card-image-container">
        <img src={img} alt="" className="card-image" />
      </div>
      <div className="card-rating">
        <FontAwesomeIcon
          icon={solid("star")}
          color="tomato"
          size="2xs"
          fixedWidth
        />
        <span>{Number(stats.rating).toFixed(1)}</span>
        <span>({stats.reviewCount}) •</span>
        <span>{location}</span>
      </div>
      <p className="card-review">{title}</p>
      <p className="card-price">
        <small>From ${price}</small> / person
      </p>
    </div>
  );
}
