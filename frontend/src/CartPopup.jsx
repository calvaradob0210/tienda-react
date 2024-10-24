// CartPopup.js
import React from 'react';

const CartPopup = ({ items, onClose }) => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50">
      <div className="p-4">
        <h3 className="text-lg font-semibold">Tu Carrito</h3>
        {items.length === 0 ? (
          <p className="text-gray-500">El carrito está vacío.</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="flex justify-between py-1 border-b">
              <span>{item.name}</span>
              <span>{item.price} €</span>
            </div>
          ))
        )}
        <button
          className="mt-2 w-full bg-teal-600 text-white py-1 rounded-md hover:bg-teal-700"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CartPopup;
