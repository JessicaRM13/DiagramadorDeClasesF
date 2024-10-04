import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { DBComponent } from './DBComponent';

const DatabaseNode = ({ data }) => {
  const atributos = data.atributos;
  const tipos = data.tipos;
  const primaryKey = data.primaryKey;

  return (
    <>
      <div className='grid grid-rows text-center p-4 bg-gray-100 rounded-lg shadow-md'>
        <div className='py-2 text-lg font-bold text-blue-600'>{data.label}</div>
        <div className='px-2 bg-gray-800 border border-gray-600 rounded-lg'>
          <DBComponent atributos={atributos} tipos={tipos} primaryKey={primaryKey} />
        </div>
      </div>
      <Handle type="target" position={Position.Left} style={{ background: 'red', borderRadius: '50%' }} />
      <Handle type="source" position={Position.Right} style={{ background: 'green', borderRadius: '50%' }} />
    </>
  );
};

export default memo(DatabaseNode);
