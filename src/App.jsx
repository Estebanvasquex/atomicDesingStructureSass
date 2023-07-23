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

      <div className="product-card">
        <img src="https://www.un.org/pga/73/wp-content/uploads/sites/53/2018/09/Dummy-image-1.jpg" alt="" />
        <h1>hola</h1>
        <h2>hola</h2>
        <input type="text" />
      </div>
    </>
  );
}

export default App;
