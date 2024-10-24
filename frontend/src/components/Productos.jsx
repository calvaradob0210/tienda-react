import React, { useState, useEffect } from 'react';
import { Grid, List, Cpu, Monitor, Printer, Camera, Battery, Laptop, ShoppingCart, X } from 'lucide-react';

const categories = [
  { icon: <Cpu className="w-6 h-6" />, label: 'COMPONENTES' },
  { icon: <Monitor className="w-6 h-6" />, label: 'COMPUTADORAS' },
  { icon: <Printer className="w-6 h-6" />, label: 'CONSUMIBLES' },
  { icon: <Monitor className="w-6 h-6" />, label: 'ECRANS' },
  { icon: <Camera className="w-6 h-6" />, label: 'ESCANERS' },
  { icon: <Battery className="w-6 h-6" />, label: 'ESTABILIZADORES' },
  { icon: <Printer className="w-6 h-6" />, label: 'IMPRESORAS' },
  { icon: <Laptop className="w-6 h-6" />, label: 'LAPTOPS' },
  { icon: <Monitor className="w-6 h-6" />, label: 'MONITORES' },
  { icon: <Camera className="w-6 h-6" />, label: 'PROYECTORES' },
  { icon: <Battery className="w-6 h-6" />, label: 'UPS' },
];

const products = [
  {
    id: 1,
    name: 'ALL-IN-ONE HP PROONE 400 G6 24, 23.8"',
    category: 'AIO, COMPUTADORAS',
    price: 5500.00,
    image: '/public/images/carrusel1.png',
    inStock: true,
  },
  {
    id: 2,
    name: 'AUDIFONO C/MICROF. LOGITECH H390 USB',
    category: 'ACCESORIOS, AUDIFONOS',
    price: 130.00,
    image: '/public/images/carrusel1.png',
    inStock: true,
  },
  // ... (otros productos)
];

const Productos = () => {
  const [gridView, setGridView] = useState(true);
  const [sortOrder, setSortOrder] = useState('default');
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [showCategories, setShowCategories] = useState(true);
  const [priceRange, setPriceRange] = useState([20, 5500]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Efecto para cargar los items del carrito desde localStorage
  useEffect(() => {
    const loadCartItems = () => {
      const savedCartItems = localStorage.getItem('cartItems');
      console.log('Saved cart items:', savedCartItems); // Debugging
      if (savedCartItems) {
        try {
          const parsedItems = JSON.parse(savedCartItems);
          setCartItems(parsedItems);
          console.log('Parsed cart items:', parsedItems); // Debugging
        } catch (error) {
          console.error('Error parsing cart items:', error);
        }
      }
    };

    loadCartItems();
  }, []);

  // Efecto para guardar los items del carrito en localStorage
  useEffect(() => {
    const saveCartItems = () => {
      console.log('Saving cart items:', cartItems); // Debugging
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    saveCartItems();
  }, [cartItems]);

  const displayedProducts = products.slice(0, itemsPerPage);

  const handleAddToCart = (product) => {
    if (product.inStock) {
      setCartItems((prevItems) => {
        const newItems = prevItems.find(item => item.id === product.id)
          ? prevItems.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...prevItems, { ...product, quantity: 1 }];
        
        console.log('Updated cart items:', newItems); // Debugging
        return newItems;
      });
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } else {
      handleRemoveFromCart(productId);
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 relative">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <h2
            className="text-lg font-semibold mb-4 cursor-pointer"
            onClick={() => setShowCategories(!showCategories)}
          >
            CATEGORÍAS
          </h2>
          {showCategories && (
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center gap-2 cursor-pointer hover:text-primary">
                  {category.icon}
                  <span>{category.label}</span>
                </li>
              ))}
            </ul>
          )}
          <h2 className="text-lg font-semibold my-4">PRECIO</h2>
          <div className="flex items-center my-4">
            <input
              type="range"
              min="20"
              max="5500"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full"
            />
            <span>S/{priceRange[1]}</span>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded">FILTRAR</button>
        </aside>
        <main className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="mr-2">Ordenar:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border p-2 rounded w-[180px]"
              >
                <option value="default">Orden por defecto</option>
                <option value="price-asc">Precio: bajo a alto</option>
                <option value="price-desc">Precio: alto a bajo</option>
              </select>
            </div>
            <div className="flex gap-2 items-center">
              <button onClick={() => setGridView(true)} className={`w-8 h-8 ${gridView ? 'text-primary' : 'text-muted-foreground'}`}>
                <Grid />
              </button>
              <button onClick={() => setGridView(false)} className={`w-8 h-8 ${!gridView ? 'text-primary' : 'text-muted-foreground'}`}>
                <List />
              </button>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border p-2 rounded w-[70px]"
              >
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
              </select>
            </div>
          </div>
          <div className={`grid ${gridView ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1'} gap-4`}>
            {displayedProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-200">
                <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4" />
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-xl font-bold">S/{product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className={`mt-2 w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? 'Agregar al carrito' : 'Agotado'}
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Botón del carrito */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-red-600 rounded-full text-xs px-2 py-1">{totalItems}</span>
      </button>

      {/* Panel deslizante del carrito */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Carrito de Compras</h2>
              <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-10rem)] p-4">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Tu carrito está vacío</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="mb-4 border rounded-lg p-4">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">S/{item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                          <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                          <span className="mx-2">{item.quantity}</span>
                          <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                        </div>
                      </div>
                      <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-xl">S/{totalPrice.toFixed(2)}</span>
              </div>
              <button 
                className="w-full bg-blue-500 text-white p-2 rounded" 
                onClick={() => alert('Procesando compra...')}
              >
                Proceder al pago
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Productos;