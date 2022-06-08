import { useState } from "react";
import "./Switch.css";

export default function Switch({}) {
  const [checked, setChecked] = useState(false);

  const handleSwitch = () => {
    setChecked((prev) => !prev);
  };

  return (
    <label class="switch">
      <input type="checkbox" checked={checked} onChange={handleSwitch} />
      <span class="slider round"></span>
    </label>
  );
}
