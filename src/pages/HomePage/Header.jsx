import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const Header = () => {
    const { nombre } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const onLogout = () => {
        dispatch(startLogout());
    };

    return (
        <div className='grid grid-cols-4 text-white gap-4 border border-[#257FC4FF] h-fit p-4 my-3 rounded-lg bg-[#1A6AAFFF]'>
            <div className='col-span-2'>
                <p className='text-lg font-semibold py-1'>Inicio</p>
            </div>
            <div className='col-span-2 justify-self-end'>
                <span className='mx-5'>{nombre}</span>
                <button className='bg-[#295993FF] p-2 rounded-lg' onClick={onLogout}>
                    <span className='text-lg font-bold'>Cerrar Sesión</span>
                </button>
            </div>
        </div>
    );
}




