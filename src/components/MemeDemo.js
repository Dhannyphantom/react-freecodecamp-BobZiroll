import { useState } from "react";

export default function MemeDemo() {
  const [thing, setThing] = useState(["Thing 1", "Thing 2"]);

  const thingsElement = thing.map((thing, idx) => <p key={idx}> {thing} </p>);

  const handleClick = () => {
    setThing((prevThing) => [...prevThing, `Thing ${prevThing.length + 1}`]);
  };

  return (
    <main>
      <button onClick={handleClick}>Add Item</button>

      {thingsElement}
    </main>
  );
}
