import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // localStorage get
  const [cartnaw, setcartnaw] = useState(() => {
    const savedCart = localStorage.getItem("cartnaw");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addtocart = (product) => {
    setcartnaw((prevCart) => {
      // check if product already exists
      const exists = prevCart.find((item) => item.id === product.id);

      if (exists) return prevCart;

      return [...prevCart, product];
    });
  };

  const removecart = (id) => {
    setcartnaw((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // localStorage set

  useEffect(() => {
    localStorage.setItem("cartnaw", JSON.stringify(cartnaw));
  }, [cartnaw]);

  return (
    <CartContext.Provider value={{ cartnaw, addtocart, removecart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
