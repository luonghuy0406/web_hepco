import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <div style={{padding:'10px', fontSize:'12px', border: '1px solid var(--green4)',position:'relative'}}>
        <div 
        style={{
            background: 'var(--green4)',
            color: '#fff',
            padding: '10px',
            border: '1px solid var(--green4)',
            fontWeight: '700',
            width: '150px',
            fontSize:'12px',
            textAlign:'center',
            borderRadius:'3px',
            position:'absolute',
            top:'0',
            left:'50%',
            transform: 'translate(-50%, -25px)'
        }}>
            PHÒNG CHUYÊN MÔN
        </div>
        <div>
            <p>Phòng Tổ Chức Hành Chính</p>
            <p>Phòng Kế Toán Tài Vụ</p>
            <p>Phòng Kế Hoạch</p>
            <p>Phòng Kỹ Thuật</p>
            <p>Phòng Thông Tin Truyền Thông</p>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </>
  );
});
