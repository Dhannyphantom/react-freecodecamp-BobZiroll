import "./App.css";
import Joke from "./components/Joke";

const jokes = [
  {
    id: "1",
    setup: "I got my a daughter a fridge for her birthday",
    punchline: "I can't wait to see her face light out when she opens it.",
  },
  {
    id: "2",
    setup: "How did the hacker escape the police?",
    punchline: "He just ransomware.",
  },
  {
    id: "3",
    setup: "Why don't pirates travel on mountain roads?",
    punchline: "Scurvy",
  },
  {
    id: "5",
    setup: "Why do bees stay in the hive in the winter",
    punchline: "Swarm.",
  },
  {
    id: "5",
    setup: "Whats the best thing about Switzerland",
    punchline: "I don't know but the flag is a big plus.",
  },
];

function App() {
  return (
    <div className="container">
      <Joke setup={jokes[0].setup} punchline={jokes[0].punchline} />
      <Joke setup={jokes[1].setup} punchline={jokes[1].punchline} />
      <Joke setup={jokes[2].setup} punchline={jokes[2].punchline} />
      <Joke setup={jokes[3].setup} punchline={jokes[3].punchline} />
      <Joke setup={jokes[4].setup} punchline={jokes[4].punchline} />
      <Joke punchline="Just a punchline" />
    </div>
  );
}

export default App;
