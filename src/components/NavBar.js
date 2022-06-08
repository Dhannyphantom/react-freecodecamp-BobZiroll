import reactLogo from "../assets/logo192.png";
import Switch from "./res/Switch";

export default function NavBar({ darkMode, setter }) {
  const styles = {
    backgroundColor: darkMode ? "#21222a" : "#fff",
  };

  return (
    <nav className="nav" style={styles}>
      <img src={reactLogo} alt="" className="nav-logo" />
      <h1>ReactFacts</h1>
      <Switch checked={darkMode} setter={setter} />
    </nav>
  );
}
