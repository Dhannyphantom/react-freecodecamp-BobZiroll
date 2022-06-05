import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function DetailTitle({ name, show }) {
  return (
    <div className="title">
      <div className="detail-header">
        <FontAwesomeIcon
          icon={solid("location-pin")}
          color="#ff864e"
          className="padding"
          size="xs"
        />
        <h4 className="padding"> {show} </h4>
        <a href="www.google.com" className="padding detail-link">
          View on Weebo App
        </a>
      </div>
      <h3>{name}</h3>
    </div>
  );
}
