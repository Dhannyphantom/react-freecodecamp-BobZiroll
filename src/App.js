import "./App.css";
import Card from "./components/Card";
// import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      {/* <Hero /> */}
      <Card />
    </div>
  );
}

export default App;
