import "./App.css";
import Card from "./components/Card";
// import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import dataSet from "./api/dataSet";

const { cardDetail } = dataSet;

function App() {
  const cardElements = cardDetail.map((obj) => {
    return (
      <Card
        img={obj.coverImg}
        rating={obj.stats.rating}
        reviewCount={obj.stats.reviewCount}
        country={obj.location}
        sold={obj.sold}
        key={obj.id.toString()}
        title={obj.title}
        price={obj.price}
      />
    );
  });

  return (
    <div className="container">
      <NavBar />
      <section className="card-list">{cardElements}</section>
    </div>
  );
}

export default App;
