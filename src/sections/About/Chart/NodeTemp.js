import { Handle, Position } from 'reactflow';

function NodeTemp({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <Handle 
        type="target" 
        position={Position.Top} 
        isConnectable={isConnectable} 
        style={{
            top: 0,
            bottom: 0,
            border: '0',
        }}
    />
      <div
      style={{
        backgroundColor: 'var(--red)',
        // position: 'relative',
        width: '1px',
        height: '25px',
        color:'var(--red)'
      }}
      ></div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        style={{
            top: 0,
            bottom: 0,
            border: '0',
        }}
      />
    </div>
  );
}

export default NodeTemp;
