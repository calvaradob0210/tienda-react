import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from './CartContext'; // Asegúrate de que esta ruta sea correcta
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import './App.css';
import Menu from './components/Menu';
import Carrusel from './components/Carrusel';
import Login from './auth/Login';
import Register from './auth/Register';
import Productos from './components/Productos';

function App() {
  const location = useLocation();

  const hideCarrusel = 
    location.pathname === '/auth/Login' || 
    location.pathname === '/auth/Register' || 
    location.pathname === '/productos';

  return (
    <>
      <Navbar />
      <Menu />
      
      {!hideCarrusel && <Carrusel />}

      <main>
        <Routes>
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/Register" element={<Register />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );
}
