import "./App.css";
import Card from "./components/Card";
// import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import cardImage from "./assets/sasuke.jpg";

function App() {
  return (
    <div className="container">
      <NavBar />
      {/* <Hero /> */}
      <Card
        img={cardImage}
        rating={5.0}
        reviewCount={11}
        country="USA"
        sold={false}
        title="Life lessons with Sasuke Uchiha"
        price={140}
      />
    </div>
  );
}

export default App;
