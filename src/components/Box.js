import { useState } from "react";

export default function Box({ on, toggle: toggler }) {
  const [toggle, setToggle] = useState(on);
  const styles = {
    backgroundColor: toggle ? "#222222" : "transparent",
  };

  const handleClick = () => {
    // setToggle((prevToggle) => !prevToggle);
    toggler();
  };

  return <div onClick={handleClick} className="box" style={styles} />;
}
