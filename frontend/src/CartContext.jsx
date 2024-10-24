import React, { createContext, useContext, useState } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular el total del carrito
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0); // Asumiendo que cada producto tiene una propiedad `price`
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};
