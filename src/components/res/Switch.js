import "./Switch.css";

export default function Switch({ checked, setter }) {
  return (
    <label class="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setter && setter()}
      />
      <span class="slider round"></span>
    </label>
  );
}
