import React from 'react';
import { ListProyects } from './ListProyects';
import { NewDiagramButton } from './NewDiagramButton';
import { useFetchProjects } from '../../hooks/useFetchProjects';
import { useSelector } from 'react-redux';

export const HomeBoardScreen = () => {
    const idUser = useSelector(state => state.auth.id);
    const data = useFetchProjects(idUser);

    return (
        <div className='m-4 bg-[#c0d6df] p-4 rounded-lg shadow-md'>
            <div className='grid grid-cols-3 gap-6'>
                <NewDiagramButton />
                {
                    data.map(project => (
                        <ListProyects key={project.id} {...project} />
                    ))
                }
            </div>
        </div>
    );
}
