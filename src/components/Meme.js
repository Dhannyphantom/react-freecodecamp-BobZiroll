import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Meme() {
  return (
    <form className="form">
      <div className="form-inputs">
        <input placeholder="Enter header meme" className="form-input" />
        <input placeholder="Enter footer meme" className="form-input" />
      </div>
      <button className="form-btn">
        <span>Get a new meme image</span>
        <FontAwesomeIcon icon={solid("thumbs-up")} />
      </button>
    </form>
  );
}
