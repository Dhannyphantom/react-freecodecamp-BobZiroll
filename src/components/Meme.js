import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import dataSet from "../api/dataSet";

const {
  memes: {
    data: { memes },
  },
} = dataSet;

export default function Meme() {
  let url;
  const handleBtnClick = (e) => {
    e.preventDefault();
    const randIndex = Math.floor(Math.random() * memes.length);
    url = memes[randIndex].url;
    console.log(url);
  };
  return (
    <form className="form">
      <p> {url} </p>
      <div className="form-inputs">
        <input
          placeholder="Enter header meme"
          className="form-input"
          type="text"
        />
        <input
          placeholder="Enter footer meme"
          className="form-input"
          type="text"
        />
      </div>
      <button onClick={handleBtnClick} className="form-btn">
        <span>Get a new meme image</span>
        <FontAwesomeIcon icon={solid("thumbs-up")} />
      </button>
    </form>
  );
}
