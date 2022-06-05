import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Card({
  img,
  rating,
  reviewCount,
  sold,
  title,
  country,
  price,
}) {
  return (
    <div className="card-container">
      <div className="card-image-container">
        {/* <p>{sold ? "SOLD OUT" : "AVAILABLE"}</p> */}
        <img src={img} alt="" className="card-image" />
      </div>
      <div className="card-rating">
        <FontAwesomeIcon
          icon={solid("star")}
          color="tomato"
          size="2xs"
          fixedWidth
        />
        <span>{Number(rating).toFixed(1)}</span>
        <span>({reviewCount}) •</span>
        <span>{country}</span>
      </div>
      <p className="card-review">{title}</p>
      <p className="card-price">
        <small>From ${price}</small> / person
      </p>
    </div>
  );
}
