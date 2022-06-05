import "./App.css";
import Card from "./components/Card";
// import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import dataSet from "./api/dataSet";

const { cardDetail } = dataSet;

function App() {
  const cardElements = cardDetail.map((obj) => {
    return <Card key={obj.id} item={obj} />;
  });

  return (
    <div className="container">
      <NavBar />
      <section className="card-list">{cardElements}</section>
    </div>
  );
}

export default App;
