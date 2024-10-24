import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Se utiliza el hook useCart
import CartPopup from '../CartPopup'; // Importa el nuevo componente

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useCart(); // Uso del hook useCart para acceder a los items del carrito
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para el popup

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      <div className="flex items-center">
        <Link to="/" className="ml-2 text-2xl font-bold text-teal-600">
          TIENDA XD
        </Link>
      </div>
      <div className="flex-1 max-w-2xl mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <select className="h-full rounded-r-md border-transparent bg-transparent text-gray-500 sm:text-sm mr-12">
              <option>Categorias</option>
            </select>
          </div>
          <button type="button" className="absolute right-0 top-0 mt-2 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <div className="ml-2 text-sm">
            <p className="font-medium text-gray-700">Bienvenido</p>
            <Link to="/auth/Login" className="text-gray-500 hover:text-teal-600">
              Iniciar Sesión / Registrese
            </Link>
          </div>
        </div>
        {/* Icono del carrito sin ruta */}
        <div className="relative">
          <div className="flex items-center cursor-pointer" onClick={togglePopup}> {/* Agrega el manejador de clics */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItems.length > 0 && ( // Mostrar el número de items en el carrito
              <span className="absolute top-0 right-0 transform -translate-x-1/2 translate-y-[-50%] bg-green-500 rounded-full px-2 py-1 text-xs font-bold text-white">
                {cartItems.length}
              </span>
            )}
          </div>
          {isPopupOpen && ( // Mostrar el popup si está abierto
            <CartPopup items={cartItems} onClose={togglePopup} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;