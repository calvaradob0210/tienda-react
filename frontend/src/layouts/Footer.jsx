import React from 'react'
import { Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-8 mt-12"> {/* Agregamos mt-12 para más espacio */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">SERVICIOS</h3>
            <ul className="space-y-2">
              <li>Preguntas Frecuentes</li>
              <li>Login</li>
              <li>Registro</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">SOBRE NOSOTROS</h3>
            <ul className="space-y-2">
              <li>Nosotros</li>
              <li>Política de Privacidad</li>
              <li>Condiciones y Garantía</li>
              <li>Contáctenos</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">CONTÁCTENOS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">Dirección:</span> Av. Garcilaso de la Vega 1236 Int. S-133 Galería Maxiplaza Lima
              </li>
              <li>
                <span className="font-semibold">Teléfonos:</span> 934534987 - 969891519
              </li>
              <li>
                <span className="font-semibold">Email:</span> ventas.dayumi@hotmail.com
              </li>
              <li>
                <span className="font-semibold">Horario de Atención:</span> Lun - Sab / 9:00 AM - 8:00 PM
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">REDES SOCIALES</h3>
            <a href="#" className="inline-block">
              <Facebook className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-teal-600 text-center text-sm">
        <p>Comercial Dayumi. © 2023. Todos los derechos reservados.</p>
        <p className="mt-2">Urpiweb: Diseño Web | Tiendas Virtuales | Hosting Peru</p>
      </div>
    </footer>
  )
}

export default Footer
