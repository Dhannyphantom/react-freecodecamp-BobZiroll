import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function NavBar() {
  return (
    <header className="nav">
      <FontAwesomeIcon icon={solid("smile-wink")} size="2x" color="white" />
      <h2>Meme Generator</h2>
      <p>React Course - Project 3</p>
    </header>
  );
}
