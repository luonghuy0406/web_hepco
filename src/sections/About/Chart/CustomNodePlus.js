import { Handle, Position } from 'reactflow';
import Node from './Node';

function CustomNodePlus({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <Handle type="target" id='tarT' position={Position.Top} isConnectable={isConnectable} />
      <Handle type="target" id='tarR' position={Position.Right} isConnectable={isConnectable} />
      <Handle type="target" id='tarB' position={Position.Bottom} isConnectable={isConnectable} />
      <Handle type="target" id='tarL' position={Position.Left} isConnectable={isConnectable} />
      <Node data={data} width={'300px'}/>
      <Handle type="source" id='souT' position={Position.Top} isConnectable={isConnectable} />
      <Handle type="source" id='souR' position={Position.Right} isConnectable={isConnectable} />
      <Handle type="source" id='souB' position={Position.Bottom} isConnectable={isConnectable} />
      <Handle type="source" id='souL' position={Position.Left} isConnectable={isConnectable} />
    </div>
  );
}

export default CustomNodePlus;
