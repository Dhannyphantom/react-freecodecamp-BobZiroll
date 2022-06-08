import "./Switch.css";

export default function Switch({ checked, setChecked, handler }) {
  const handleSwitch = () => {
    setChecked && setChecked((prev) => !prev);
    handler && handler();
  };

  return (
    <label class="switch">
      <input type="checkbox" checked={checked} onChange={handleSwitch} />
      <span class="slider round"></span>
    </label>
  );
}
