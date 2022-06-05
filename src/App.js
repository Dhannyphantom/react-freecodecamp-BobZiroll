import "./App.css";
import Detail from "./components/Detail";
import NavBar from "./components/NavBar";
import dataSet from "./api/dataSet";

const { projectTwo } = dataSet;

function App() {
  const detailElements = projectTwo.map((item) => <Detail item={item} />);
  return (
    <div className="container">
      <NavBar />
      <section>{detailElements}</section>
    </div>
  );
}

export default App;
