import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function NavBar() {
  return (
    <nav className="nav">
      <FontAwesomeIcon icon={solid("star")} color="white" />
      <h2>Favorite Characters</h2>
    </nav>
  );
}
