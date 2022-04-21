import { useState } from "react";
import "./App.css";
import Routes from "./routes";

function App() {
  const [data, setData] = useState({});
  return (
    <div className="App container">
      <Routes data={data} setData={setData} />
    </div>
  );
}

export default App;
