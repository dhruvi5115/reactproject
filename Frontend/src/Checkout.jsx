import React, { useContext } from "react";
import { CartContext } from "./CartContext.jsx";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price);
    return sum + price * item.quantity;
  }, 0);

  return (
    <div style={{ maxWidth: "1000px", margin: "50px auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Checkout
      </h2>

      <div style={{ display: "flex", gap: "40px" }}>
        {/* Left – Shipping Form */}
        <div style={{ flex: 1 }}>
          <h4>Shipping Information</h4>

          <input placeholder="Full Name" style={inputStyle} />
          <input placeholder="Email Address" style={inputStyle} />
          <input placeholder="Address" style={inputStyle} />
          <input placeholder="City" style={inputStyle} />
          <input placeholder="Postal Code" style={inputStyle} />

          <button style={payButton}>
            Place Order
          </button>
        </div>

        {/* Right – Order Summary */}
        <div
          style={{
            flex: 1,
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "8px",
            background: "#fafafa",
          }}
        >
          <h4>Order Summary</h4>

          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>€{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <hr />
          <h5>Total: €{total.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const payButton = {
  width: "100%",
  padding: "15px",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Checkout;
