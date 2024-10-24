import React from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, Cpu, Monitor, Printer, Laptop, Camera, Battery } from 'lucide-react';

const menuItems = [
  { icon: <MenuIcon className="w-6 h-6" />, label: 'CATEGORIAS', path: '/productos' },
  { icon: <Cpu className="w-6 h-6" />, label: 'COMPONENTES', path: '/productos' },
  { icon: <Monitor className="w-6 h-6" />, label: 'COMPUTADORAS', path: '/productos' }, // Redirige a Productos
  { icon: <Printer className="w-6 h-6" />, label: 'CONSUMIBLES', path: '/productos' },
  { icon: <Monitor className="w-6 h-6" />, label: 'ECRANS', path: '/productos' },
  { icon: <Camera className="w-6 h-6" />, label: 'ESCANERS', path: '/productos' },
  { icon: <Battery className="w-6 h-6" />, label: 'ESTABILIZADORES', path: '/productos' },
  { icon: <Printer className="w-6 h-6" />, label: 'IMPRESORAS', path: '/productos' },
  { icon: <Laptop className="w-6 h-6" />, label: 'LAPTOPS', path: '/productos' },
  { icon: <Monitor className="w-6 h-6" />, label: 'MONITORES', path: '//productos' },
  { icon: <Camera className="w-6 h-6" />, label: 'PROYECTORES', path: '/productos' },
  { icon: <Battery className="w-6 h-6" />, label: 'UPS', path: '/productos' },
];

const Menu = () => {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white mb-2">
                {item.icon}
              </div>
              <span className="text-xs text-center font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
