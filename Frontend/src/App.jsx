import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shoes from "./Shoes.jsx";
import ProductDetail from "./Productdetail.jsx";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";

function App() {

  // 🔹 Backend connection test
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => console.log(data)) // 👈 products print honge
      .catch(err => console.error("Backend fetch error:", err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shoes />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;