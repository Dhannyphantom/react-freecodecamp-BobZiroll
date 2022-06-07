import { useState } from "react";
import dataSet from "../api/dataSet";
import Box from "./Box";

const { boxes: boxesData } = dataSet;

export default function BoxChallenge() {
  const [boxes, setBoxes] = useState(boxesData);

  const toggle = (id) => {
    const copy = [...boxes];
    const index = copy.findIndex((obj) => obj.id === id);
    copy[index].on = !copy[index].on;
    setBoxes(copy);
  };
  const boxElements = boxes.map((obj) => (
    <Box key={obj.id} id={obj.id} toggle={toggle} on={obj.on} />
  ));

  return (
    <main>
      <h2>Boxes will go here</h2>
      {boxElements}
    </main>
  );
}
