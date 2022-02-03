import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Fruits from "./routes/Fruits";
import Cart from "./routes/Cart";

function App() {
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
