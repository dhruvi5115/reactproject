import React, { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Your cart is empty!
      </h2>
    );
  }

  const total = cartItems.reduce((sum, item) => {
    const price =
      typeof item.price === "number"
        ? item.price
        : parseFloat(item.price.toString().replace("€", "").trim());
    return sum + price * item.quantity;
  }, 0);

  return (
    <div style={{ padding: "50px", maxWidth: "900px", margin: "auto" }}>
      <h2>My Cart</h2>

      {cartItems.map((item) => (
        <div
          key={`${item.id}-${item.size}`}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "15px",
          }}
        >
          <img
            src={item.img}
            alt={item.name}
            style={{ height: "100px", marginRight: "20px" }}
          />

          <div style={{ flex: 1 }}>
            <h5>{item.name}</h5>
            <p>Size: {item.size}</p>
            <p>Price: €{Number(item.price).toFixed(2)}</p>

            <div>
              <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>
                -
              </button>
              <span style={{ margin: "0 10px" }}>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>
                +
              </button>
            </div>
          </div>

          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(item.id, item.size)}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: €{total.toFixed(2)}</h3>

      {/* ✅ Checkout Button */}
      <button
        onClick={() => navigate("/checkout")}
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          fontSize: "16px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;