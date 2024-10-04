import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProject } from '../../helpers/deleteProject';

export const ListProyects = ({ id, nombre = "proyect name", date = "12-12-2022" }) => {
    const userName = useSelector(state => state.auth.nombre);
    const [isHovered, setIsHovered] = useState(false);

    const handleClickEliminar = async () => {
        await deleteProject(id);
        window.location.reload(true);
    }

    return (
        <div
            className={`border border-[#2F7FB1FF] rounded-md m-3 p-3 bg-[#2D87B1FF] text-white transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='grid grid-rows-3 gap-2'>
                <div>
                    ProyectoId : {id}
                </div>
                <div>
                    Nombre : {nombre}
                </div>
                <div>
                    
                    Usuario : {userName}
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <Link to={`/diagram/${id}`} className='bg-[#dd6e42] rounded px-2 my-1 text-center'>Abrir</Link>
                <button className='bg-red-500 rounded px-2 my-1' onClick={handleClickEliminar}>Eliminar</button>
            </div>
        </div>
    );
}
