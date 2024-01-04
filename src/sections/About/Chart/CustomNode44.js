import { Box, Typography, useTheme } from '@mui/material';
import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import Node from './Node';

const handleStyle = { left: 10 };

function CustomNode44({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  const theme = useTheme()
  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        // style={handleStyle}
        isConnectable={isConnectable}
      />
        <Node data={data} width={'400px'}/>
      <Handle
        type="target"
        position={Position.Right}
        id="b"
        // style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="c"
        // style={handleStyle}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default CustomNode44;
