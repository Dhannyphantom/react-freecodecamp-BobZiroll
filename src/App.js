import "./App.css";
import DetailInfo from "./components/DetailInfo";
import DetailTitle from "./components/DetailTitle";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <DetailTitle />
      <DetailInfo />
    </div>
  );
}

export default App;
