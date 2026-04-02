import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size, quantity) => {
    setCartItems((prev) => {
      // Check if the same product with same size exists
      const existing = prev.find(
        (p) => p.id === product.id && p.size === size
      );
      if (existing) {
        return prev.map((p) =>
          p.id === product.id && p.size === size
            ? { ...p, quantity: p.quantity + quantity }
            : p
        );
      } else {
        return [...prev, { ...product, size, quantity }];
      }
    });
  };

  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((p) => !(p.id === id && p.size === size))
    );
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((p) =>
        p.id === id && p.size === size ? { ...p, quantity } : p
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
