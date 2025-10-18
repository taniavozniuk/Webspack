import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";

function App() {
  const [view, setView] = useState<"grid" | "list">("grid");
  
  return (
    <>
      <Header />

      <div className="icons">
        <button
          className={`button ${view === "list" ? "active" : ""}`}
          onClick={() => setView("list")}
        >
          <img className="icon" src="/images/dots.png" alt="list view" />
        </button>

        <button
          className={`button ${view === "grid" ? "active" : ""}`}
          onClick={() => setView("grid")}
        >
          <img className="icon" src="/images/Group13.svg" alt="grid view" />
        </button>
      </div>

      <Card view={view} />
      <div className="wrapBt">
        <button className="load">LOAD MORE</button>
      </div>
    </>
  );
}

export default App;
