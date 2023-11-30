import React, { useCallback } from 'react';
import ReactFlow, {Controls, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import CustomNode2 from './CustomNode2';
import {Container, Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';


const nodeTypes = {
    selectorNode: CustomNode,
    customNode2: CustomNode2
  };
const initialNodes = [
    {
    id: '0',
    targetPosition: 'left',
    sourcePosition: 'right',
    // type: 'input',
    data: { },
    position: { x: -100, y: 350 },
    style: {width:0,padding:0}
    }, 
    {
    id: '1',
    targetPosition: 'top',
    sourcePosition: 'bottom',
    // type: 'input',
    data: { label: 'BAN KIỂM SOÁT' },
    position: { x: -500, y: 250 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'200px' }
  }, 
  {
    id: '2',
    sourcePosition: 'left',
    type: 'input',
    data: { label: 'ĐẠI HỘI CỔ ĐÔNG' },
    position: { x: -350, y: 200 },
    style: { background:'var(--red)', color:"#fff", padding: 10, border: '1px solid var(--red)', fontWeight:700, width:'200px' }
  },
  {
    id: '2a',
    sourcePosition: 'right',
    type: 'input',
    data: { label: 'ĐẠI HỘI CỔ ĐÔNG' },
    position: { x: -350, y: 200 },
    style: { background:'var(--red)', color:"#fff", padding: 10, border: '1px solid var(--red)', fontWeight:700, width:'200px' }
  }
  ,
  {
    id: '3',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'ĐẠI HỘI QUẢN TRỊ' },
    position: { x: -350, y: 300 },
    style: { background:'var(--red)', color:"#fff", padding: 10, border: '1px solid var(--red)', fontWeight:700, width:'200px' }
  },
  {
    id: '4',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ' },
    position: { x: -350, y: 400 },
    style: { background:'var(--red)', color:"#fff", padding: 10, border: '1px solid var(--red)', fontWeight:700, width:'200px' }
  },
  {
    id: '5',
    sourcePosition: 'right',
    // targetPosition: 'left',
    type:'input',
    data: { label: 'BAN TỔNG GIÁM ĐỐC' },
    position: { x: -350, y: 500 },
    style: { background:'var(--red)', color:"#fff", padding: 10, border: '1px solid var(--red)', fontWeight:700, width:'200px' }
  },
  {
    id: '6',
    targetPosition: 'left',
    type: 'selectorNode',
    data: { label: 'PHÒNG CHUYÊN MÔN' },
    position: { x: -100, y: 0 },
    // style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'200px' }
  },
  {
    id: '6a',
    targetPosition: 'bottom',
    sourcePosition: 'bottom',
    type: 'customNode2',
    data: { label: 'PHÒNG CHUYÊN MÔN' },
    position: { x: -100, y: 0 },
    // style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'200px' }
  },
  {
    id: '7',
    sourcePosition: 'top',
    type:'default',
    targetPosition: 'left',
    data: { label: 'BỘ PHẬN GIAO DỊCH' },
    position: { x: -100, y: 550 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'200px' }
  },
  {
    id: '8',
    targetPosition: 'left',
    type:'output',
    data: { label: 'XÍ NGHIỆP MÔI TRƯỜNG BẮC SÔNG HƯƠNG' },
    position: { x: 400, y: 100 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },

  {
    id: '9',
    type:'output',
    targetPosition: 'left',
    data: { label: 'XÍ NGHIỆP MÔI TRƯỜNG NAM SÔNG HƯƠNG' },
    position: { x: 400, y: 150 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
  {
    id: '10',
    type:'output',
    targetPosition: 'left',
    data: { label: 'XÍ NGHIỆP THOÁT NƯỚC' },
    position: { x: 400, y: 200 },style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
  {
    id: '11',
    type:'output',
    targetPosition: 'left',
    data: { label: 'XÍ NGHIỆP ĐIỆN CHIẾU SÁNG' },
    position: { x: 400, y: 250 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
  {
    id: '12',
    type:'output',
    targetPosition: 'left',
    data: { label: 'XÍ NGHIỆP XỬ LÝ CHẤT THẢI' },
    position: { x: 400, y: 300 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
  {
    id: '13',
    type:'output',
    targetPosition: 'left',
    data: { label: 'XÍ NGHIỆP CƠ KHÍ XÂY LẮP' },
    position: { x: 400, y: 350 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
  {
    id: '14',
    type:'output',
    targetPosition: 'left',
    data: { label: 'XÍ NGHIỆP XÂY DỰNG SỐ 1' },
    position: { x: 400, y: 400 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
  {
    id: '15',
    type:'output',
    targetPosition: 'left',
    data: { label: 'XÍ NGHIỆP XÂY DỰNG SỐ 2' },
    position: { x: 400, y: 450 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
  {
    id: '16',
    type:'output',
    targetPosition: 'left',
    data: { label: 'XÍ NGHIỆP MÔI TRƯỜNG LĂNG CÔ' },
    position: { x: 400, y: 500 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
  {
    id: '17',
    type:'output',
    targetPosition: 'left',
    data: { label: 'XÍ NGHIỆP MÔI TRƯỜNG HƯƠNG THUỶ' },
    position: { x: 400, y: 550 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
  {
    id: '18',
    type:'output',
    targetPosition: 'left',
    data: { label: 'XÍ NGHIỆP MÔI TRƯỜNG HƯƠNG TRÀ' },
    position: { x: 400, y: 600 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
  {
    id: '19',
    type:'output',
    targetPosition: 'left',
    data: { label: 'BAN QUẢN LÝ NGHĨA TRANG' },
    position: { x: 400, y: 650 },
    style: { background:'var(--green4)', color:"#fff", padding: 10, border: '1px solid var(--green4)', fontWeight:700, width:'500px' }
  },
];

const initialEdges = [
  {
    id: 'e2-1',
    source: '2',
    type: 'smoothstep',
    target: '1',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e1-3',
    source: '1',
    type: 'smoothstep',
    target: '3',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e1-4',
    source: '1',
    type: 'smoothstep',
    target: '4',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e2a-6',
    source: '2a',
    type: 'smoothstep',
    target: '6',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e3-6', 
    source: '3',
    type: 'smoothstep',
    target: '6',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e4-6',
    source: '4',
    type: 'smoothstep',
    target: '6',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e5-6',
    source: '5',
    type: 'smoothstep',
    target: '6',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e2a-7',
    source: '2a',
    type: 'smoothstep',
    target: '7',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e3-7',
    source: '3',
    type: 'smoothstep',
    target: '7',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e4-7',
    source: '4',
    type: 'smoothstep',
    target: '7',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e5-7',
    source: '5',
    type: 'smoothstep',
    target: '7',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e6a-7',
    source: '7',
    type: 'smoothstep',
    target: '6a',
    style: { stroke: 'var(--green4)',strokeDasharray: '5 5' },
  },
  {
    id: 'e0-8',
    source: '0',
    type: 'smoothstep',
    target: '8',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-9',
    source: '0',
    type: 'smoothstep',
    target: '9',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-10',
    source: '0',
    type: 'smoothstep',
    target: '10',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-11',
    source: '0',
    type: 'smoothstep',
    target: '11',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-12',
    source: '0',
    type: 'smoothstep',
    target: '12',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-13',
    source: '0',
    type: 'smoothstep',
    target: '13',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-14',
    source: '0',
    type: 'smoothstep',
    target: '14',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-15',
    source: '0',
    type: 'smoothstep',
    target: '15',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-16',
    source: '0',
    type: 'smoothstep',
    target: '16',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-17',
    source: '0',
    type: 'smoothstep',
    target: '17',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-18',
    source: '0',
    type: 'smoothstep',
    target: '18',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e0-19',
    source: '0',
    type: 'smoothstep',
    target: '19',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  }
  ,
  {
    id: 'e0-19',
    source: '0',
    type: 'smoothstep',
    target: '19',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#39A03D'
    },
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e2a-0',
    source: '2a',
    type: 'smoothstep',
    target: '0',
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e3-0',
    source: '3',
    type: 'smoothstep',
    target: '0',
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e4-0',
    source: '4',
    type: 'smoothstep',
    target: '0',
    style: { stroke: 'var(--green4)'}
  },
  {
    id: 'e5-0',
    source: '5',
    type: 'smoothstep',
    target: '0',
    style: { stroke: 'var(--green4)'}
  }
];

const OrgnizationChart = () => {
  const {t} = useTranslation()
  const theme = useTheme()
  return (
    <Container maxWidth='100%' sx={{marginTop:theme.spacing(7)}}>
      <Container maxWidth='xl'>
        <Typography variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Sơ đồ tổ chức')}</Typography>
      </Container>
      <Box sx={{ height: '85vh', width: '100%', marginTop:'50px'}}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          fitView
          attributionPosition="bottom-left"
          selectNodesOnDrag={false}
          nodeTypes={nodeTypes}
          
        >
          {/* <Controls /> */}
          <Box xs={{zIndex:1,background:theme.color.white}}>
            <label className='line1' style={{display:'flex',alignItems:'center', color:'var(--green4)'}}>{t('Quan hệ trực tuyến')}</label>
            <label className='line2' style={{display:'flex',alignItems:'center', color:'var(--green4)'}}>{t('Quan hệ chức năng')}</label>
          </Box>
        </ReactFlow>
      </Box>
    </Container>
  );
};

export default OrgnizationChart;

