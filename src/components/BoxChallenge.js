import { useState } from "react";
import dataSet from "../api/dataSet";
import Box from "./Box";

const { boxes: boxesData } = dataSet;

export default function BoxChallenge() {
  const [boxes, setBoxes] = useState(boxesData);

  const toggle = (id) => {
    setBoxes((prevBoxes) => {
      return prevBoxes.map((obj) => {
        return obj.id === id ? { ...obj, on: !obj.on } : obj;
      });
    });
  };
  const boxElements = boxes.map((obj) => (
    <Box key={obj.id} toggle={() => toggle(obj.id)} on={obj.on} />
  ));

  return (
    <main>
      <h2>Boxes will go here</h2>
      {boxElements}
    </main>
  );
}
