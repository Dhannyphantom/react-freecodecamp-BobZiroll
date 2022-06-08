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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...meme,
        [name]: value,
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
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            type="text"
          />
          <input
            placeholder="Enter footer meme"
            className="form-input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
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
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
