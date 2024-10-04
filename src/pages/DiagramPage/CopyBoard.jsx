import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCopy } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

export const CopyBoard = () => {
    const params = useParams();
    const link = `http://localhost:5173/diagram/${params.id}`;
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(link).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Ocultar el mensaje después de 2 segundos
        });
    };

    return (
        <div className="flex items-center p-2 bg-[#0799b6] rounded-lg">
            <button
                onClick={handleCopyClick}
                className="bg-#0D5766FF text-white p-2 rounded hover:bg-blue-600 transition-colors flex items-center"
            >
                <FaCopy className="mr-1" /> {/* Icono de copiar */}
                Copiar enlace para compartir
            </button>
            {copied && <span className="text-green-500 ml-2">¡Enlace copiado!</span>}
        </div>
    );
};

