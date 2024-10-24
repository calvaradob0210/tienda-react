import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-[400px] flex items-start justify-center bg-white pt-8"> {/* Ajustado el tamaño mínimo y el padding */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm"> {/* Contenedor del formulario */}
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-4">Registrar</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Ingresa tu correo"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-medium py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
          >
            Registrar
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">¿Tienes una cuenta? 
            <Link to="/auth/Login" className="text-teal-600 font-medium hover:underline ml-1">Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
