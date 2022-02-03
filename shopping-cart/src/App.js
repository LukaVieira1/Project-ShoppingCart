import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Fruits from "./routes/Fruits";
import Cart from "./routes/Cart";

function App() {
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify([]));
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fruits />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
