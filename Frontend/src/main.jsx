import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./CartContext.jsx"; // ✅ import provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider> {/* Wrap App inside provider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);