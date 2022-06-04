import "./App.css";

function MainContent() {
  return (
    <>
      <h1>Excited About React!</h1>

      <ol>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ol>
    </>
  );
}

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./logo512.png" className="nav-logo" alt="" />
        <ul className="listHeader">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>"@REACT page 2022"</small>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
