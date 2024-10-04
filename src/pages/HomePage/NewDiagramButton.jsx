import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createProject } from '../../helpers/createProject';
import { FaPlus } from 'react-icons/fa'; // Importa el ícono que deseas usar

export const NewDiagramButton = () => {
    const navigate = useNavigate();
    const idUser = useSelector(state => state.auth.id);
  
    const handleClick = async () => {
        const nuevoDiagrama = await createProject('New Project', idUser);      
        if (nuevoDiagrama.diagramObject) {
            navigate(`/diagram/${nuevoDiagrama.id}`);
        }
    }

    return (
        <div className='bg-[#e8dab2] p-4 rounded-lg shadow-lg m-3 transition-transform duration-300 hover:scale-105'>
            <Link
                to="/diagram/"
                onClick={handleClick}
                className='flex flex-col items-center text-black font-bold text-center'
            >
                <FaPlus className='mb-2 text-2xl' /> {/* Ícono agregado */}
                <h2 className='text-xl'>Nuevo Diagrama</h2>
                <p className='text-sm'>Haz clic aquí para crear un nuevo Diagrama de Clases</p>
            </Link>
        </div>
    );
}
