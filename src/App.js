import "./App.css";
import gifFetch from "./services/giphy";

function App() {
  const DATA = gifFetch("panda", 10);

  return <div className="App"></div>;
}

export default App;
