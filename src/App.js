import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  const [isDark, setIsDark] = useState(true);

  const handleSetter = () => {
    setIsDark((prev) => !prev);
    console.log("yayy");
  };

  return (
    <div className="App">
      <NavBar darkMode={isDark} setter={handleSetter} />
      <Main darkMode={isDark} />
    </div>
  );
}

export default App;
