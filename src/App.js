import "./App.css";

function NavBar() {
  return (
    <nav>
      <h1>TechLab</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
