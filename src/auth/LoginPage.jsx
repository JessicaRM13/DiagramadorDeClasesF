import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLoginNodeJs } from '../store/auth/thunks';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuthenticating = false; 
  const { nombre, password, onInputChange } = useForm({
    nombre: "",
    password: ""
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginNodeJs({ nombre, password }));
  };

  return (
    <div className='grid grid-cols-2 h-screen'>
      {/* Columna izquierda con imagen de ilustración */}
      <div className='bg-[#C0D6DF] flex flex-col justify-center items-center'>
        {/* Solo la imagen de la ilustración */}
        <img 
          src="https://corporate-assets.lucid.co/chart/8b801cbe-44e2-47ed-9c39-d5039b749057.png?v=1707818948132" // Reemplaza con el enlace a tu ilustración de inicio de sesión
          alt="Login Illustration" 
          className="w-2/3" 
        />
      </div>

      {/* Columna derecha con el formulario de login */}
      <div className='flex flex-col justify-center items-center bg-[#ffffff]'>
        <form onSubmit={onSubmit} className='bg-white p-10 rounded-lg shadow-lg max-w-sm w-full'>
          <h2 className='text-3xl font-bold text-center mb-8 text-[#4F6D7A]'>¡Bienvenido de nuevo!</h2>

          {/* Input de nombre de usuario */}
          <div className='flex flex-col mb-6'>
            <label className='text-sm text-[#4F6D7A]'>Nombre de usuario</label>
            <input
              className='border border-gray-300 p-3 rounded mt-2 focus:outline-none focus:border-[#4F6D7A]'
              type="text"
              value={nombre}
              onChange={onInputChange}
              name="nombre"
              required
            />
          </div>

          {/* Input de contraseña */}
          <div className='flex flex-col mb-6'>
            <label className='text-sm text-[#4F6D7A]'>Contraseña</label>
            <input
              className='border border-gray-300 p-3 rounded mt-2 focus:outline-none focus:border-[#4F6D7A]'
              type="password"
              value={password}
              onChange={onInputChange}
              name="password"
              required
            />
          </div>

          {/* Botón de iniciar sesión */}
          <button
            disabled={isAuthenticating}
            className='w-full py-3 bg-[#4F6D7A] text-white rounded hover:bg-[#4f5d6b] transition-all duration-300'
            type="submit"
          >
            Iniciar sesión
          </button>

          {/* Opciones adicionales */}
          <p className='text-center mt-4 text-[#4F6D7A] hover:underline cursor-pointer'>Recordar contraseña</p>
          <p className='text-center mt-4 text-[#4F6D7A]'>
            ¿Todavía no tienes una cuenta? <Link to="/auth/register" className='text-[#dd6e42] hover:underline'>Regístrate</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
