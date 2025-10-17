import "./App.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="icons">
        <img className="icon" src="/images/dots.png" />
        <img className="icon"  src="/images/Group13.svg" />
      </div>
      <Card />
    </>
  );
}

export default App;
