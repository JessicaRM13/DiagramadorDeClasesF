import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

export const TextUpdaterNode = ({ data, isConnectable }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div className="flex flex-col">
        <label htmlFor="text" className="text-lg font-semibold text-gray-700 mb-2">Text:</label>
        <input
          id="text"
          name="text"
          onChange={onChange}
          className="nodrag border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Ingrese su texto aquí"
        />
      </div>
      <div className="flex justify-between mt-3">
        <Handle
          type="source"
          position={Position.Bottom}
          id="a"
          style={handleStyle}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          isConnectable={isConnectable}
        />
      </div>
    </div>
  );
};

/* import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
    </>
  );
} */