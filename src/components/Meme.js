import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import dataSet from "../api/dataSet";
import { useState } from "react";

const {
  memes: {
    data: { memes },
  },
} = dataSet;

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  const handleBtnClick = (e) => {
    e.preventDefault();
    const randIndex = Math.floor(Math.random() * memes.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memes[randIndex].url,
      };
    });
  };
  return (
    <main>
      <form className="form">
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
      <div className="image-container">
        <img src={meme.randomImage} alt="" className="meme-image" />
      </div>
    </main>
  );
}
