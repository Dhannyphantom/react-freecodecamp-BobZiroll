import "./App.css";
import AboutDetail from "./components/AboutDetail";
import Button from "./components/Button";
import Info from "./components/Info";
import InterestDetail from "./components/InterestDetail";
import ProfilePic from "./components/ProfilePic";

function App() {
  return (
    <div className="container">
      <ProfilePic />
      <Info />
      <Button />
      <AboutDetail />
      <InterestDetail />
    </div>
  );
}

export default App;
