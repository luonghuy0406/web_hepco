import { Box, Typography, useTheme } from '@mui/material';
import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import Node from './Node';

const handleStyle = { left: 10 };

function CustomNode43({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  const theme = useTheme()
  return (
    <div className="text-updater-node">
      <Node data={data} width={'400px'}/>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        // style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        // style={handleStyle}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default CustomNode43;
