import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext.jsx";

// Images
import shoes3 from "./assets/shoes3.png";
import shoes4 from "./assets/shoes4.png";
import shoes5 from "./assets/shoes5.png";

const products = [
  { id: 1, img: shoes3, name: "Chuck Taylor All Star", price: 100.2 },
  { id: 2, img: shoes4, name: "Run Star Hike Sequins", price: 190.0 },
  { id: 3, img: shoes5, name: "Chuck 70 Y2K Heart", price: 130.0 },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  const [size, setSize] = useState("42");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, size, quantity);
    alert("Added to cart!");
    navigate("/cart");
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-container" style={{ padding: "50px" }}>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        <img src={product.img} alt={product.name} style={{ width: "300px" }} />
        <div>
          <h1>{product.name}</h1>
          <p>Price: €{product.price.toFixed(2)}</p>
          <div>
            <label>
              Size:{" "}
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                {["39", "40", "41", "42", "43", "44"].map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div style={{ marginTop: "10px" }}>
            Quantity:{" "}
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>{" "}
            {quantity}{" "}
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button className="btn btn-dark" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
