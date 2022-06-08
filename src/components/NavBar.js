import reactLogo from "../assets/logo192.png";
import Switch from "./res/Switch";

export default function NavBar() {
  return (
    <nav className="nav">
      <img src={reactLogo} alt="" className="nav-logo" />
      <h1>ReactFacts</h1>
      <Switch />
    </nav>
  );
}
