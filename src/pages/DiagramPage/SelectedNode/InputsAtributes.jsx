import React, { useEffect, useState } from 'react';
import { SelectOption } from '../SelectOption';

export const InputsAtributes = ({ index, atributo, tipos, deleteAtributo, primaryKey, changeAtributo, changeTipo, changePK }) => {
  const options = [
    { value: 'Text', label: 'Text' },
    { value: 'Integer', label: 'Integer' },
    { value: 'Float', label: 'Float' },
    { value: 'Date', label: 'Date' },
    { value: 'DateTime', label: 'DateTime' },
  ];

  const [selectedOption, setSelectedOption] = useState('');
  const [atributos, setAtributos] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setSelectedOption(tipos);
    setAtributos(atributo);
    setIsChecked(primaryKey);
  }, [atributo, tipos, primaryKey]);

  const handleAtributoChange = (event) => {
    setAtributos(event.target.value);
    changeAtributo(index, event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    changeTipo(index, event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    changePK(index);
  };

  const handleDelete = () => {
    deleteAtributo(index);
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg"> {/* Fondo aplicado */}
      <div className="flex space-x-2 items-center my-2">
        {/* Input de atributo con estilo mejorado */}
        <input
          type="text"
          name="titulo"
          onChange={handleAtributoChange}
          value={atributos}
          className="px-2 py-1 bg-gray-800 rounded-lg border border-gray-500 text-white shadow-md focus:outline-none focus:border-blue-500"
        />
        
        {/* SelectOption con estilo */}
        <SelectOption
          options={options}
          value={selectedOption}
          onChange={handleOptionChange}
          className="bg-gray-800 text-white border border-gray-500 rounded-lg shadow-md"
        />
        
        {/* Checkbox para Primary Key */}
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-500 rounded"
          />
          <span className="text-white">PK</span>
        </label>

        {/* Botón Delete con estilo mejorado */}
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white rounded px-2 py-1 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
