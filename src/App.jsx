import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <input type="text" />
      <button className="button-primary">prueba</button>
      <button className="button-secondary">prueba</button>
      <button className="button-primary">prueba</button>
      <button className="button-secondary">prueba</button>
    </>
  );
}

export default App;
