import "./App.css";
import Detail from "./components/Detail";
import NavBar from "./components/NavBar";
import dataSet from "./api/dataSet";

const { projectTwo } = dataSet;

function App() {
  return (
    <div className="container">
      <NavBar />
      <Detail item={projectTwo[0]} />
    </div>
  );
}

export default App;
