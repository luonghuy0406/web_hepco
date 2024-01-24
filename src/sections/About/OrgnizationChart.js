import react, { useEffect, useState } from 'react';
import ReactFlow, {MarkerType,addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import {Container, Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next'
import CustomNode from './Chart/CustomNode.js';
import CustomNode43 from './Chart/CustomNode43.js';
import CustomNode44 from './Chart/CustomNode44.js';
import CustomNodePlus from './Chart/CustomNodePlus.js';
import CustomNodeEnterprise from './Chart/CustomNodeEnterprise.js';
import NodeTemp from './Chart/NodeTemp.js';

const OrgnizationChart = ({data_chart}) => {
  const {t, i18n} = useTranslation()
  const currentLang = i18n.language == 'en' ? 'en' : ''
  const theme = useTheme()
  const nodeTypes = { nodeCus: CustomNode, nodeCus43: CustomNode43, nodeCus44: CustomNode44, nodeCusPlus: CustomNodePlus, nodeCusEnterprise: CustomNodeEnterprise, nodeCusTemp: NodeTemp };
  const filterData = (id)=>{
    return data_chart.filter((dt)=> dt.id_sharedtable == id)[0]
  }
  const initialNodes = [
    { draggable:false, id: '43', type: 'nodeCus43', position: { x: -100, y: 0 }, data: { value: filterData('43') } },
    { draggable:false, id: '44', type: 'nodeCus44', position: { x: -100, y: 150 }, data: { value: filterData('44') } },
    { draggable:false, id: '45', type: 'nodeCus', position: { x: -100, y: 300 }, data: { value: filterData('45') } },

    { draggable:false, id: '46', type: 'nodeCus', position: { x: 400, y: 75 }, data: { value: filterData('46') } },

    { draggable:false, id: '47', type: 'nodeCusPlus', position: { x: -700, y: 500 }, data: { value: filterData('47') } },
    { draggable:false, id: '48', type: 'nodeCusPlus', position: { x: -300, y: 500 }, data: { value: filterData('48') } },
    { draggable:false, id: '49', type: 'nodeCusPlus', position: { x: 120, y: 500 }, data: { value: filterData('49') } },
    { draggable:false, id: '50', type: 'nodeCusPlus', position: { x: 500, y: 500 }, data: { value: filterData('50') } },
    { draggable:false, id: '51', type: 'nodeCusPlus', position: { x: 850, y: 500 }, data: { value: filterData('51') } },
    { draggable:false, id: '52', type: 'nodeCusPlus', position: { x: -800, y: 620 }, data: { value: filterData('52') } },

    { draggable:false, id: 'temp', type: 'nodeCusTemp', position: { x: 99, y: 650 }, data: { value: '' } },

    { draggable:false, id: '53', type: 'nodeCusEnterprise', position: { x: -800, y: 750 }, data: { value: filterData('53') } },
    { draggable:false, id: '54', type: 'nodeCusEnterprise', position: { x: -620, y: 750 }, data: { value: filterData('54') } },
    { draggable:false, id: '55', type: 'nodeCusEnterprise', position: { x: -440, y: 750 }, data: { value: filterData('55') } },
    { draggable:false, id: '56', type: 'nodeCusEnterprise', position: { x: -260, y: 750 }, data: { value: filterData('56') } },
    { draggable:false, id: '57', type: 'nodeCusEnterprise', position: { x: -80, y: 750 }, data: { value: filterData('57') } },
    { draggable:false, id: '58', type: 'nodeCusEnterprise', position: { x: 100, y: 750 }, data: { value: filterData('58') } },
    { draggable:false, id: '59', type: 'nodeCusEnterprise', position: { x: 280, y: 750 }, data: { value: filterData('59') } },
    { draggable:false, id: '60', type: 'nodeCusEnterprise', position: { x: 460, y: 750 }, data: { value: filterData('60') } },
    { draggable:false, id: '61', type: 'nodeCusEnterprise', position: { x: 640, y: 750 }, data: { value: filterData('61') } },
    { draggable:false, id: '62', type: 'nodeCusEnterprise', position: { x: 820, y: 750 }, data: { value: filterData('62') } },
    { draggable:false, id: '63', type: 'nodeCusEnterprise', position: { x: 1000, y: 750 }, data: { value: filterData('63') } },
    { draggable:false, id: '64', type: 'nodeCusEnterprise', position: { x: 1180, y: 750 }, data: { value: filterData('64') } },
    
  ]
  const initialEdges = [
    { 
      id: 'edge-1', 
      source: '43', 
      target: '44', 
      sourceHandle: 'a' ,
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'}
    },
    { 
      id: 'edge-2', 
      source: '43', 
      target: '46', 
      sourceHandle: 'b',
      targetHandle: 'a',
      
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-3', 
      source: '46', 
      target: '44', 
      targetHandle: 'b',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-5', 
      source: '44', 
      target: '45', 
      targetHandle: 'b',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    //------
    { 
      id: 'edge-6', 
      source: '45', 
      target: '47', 
      targetHandle: 'tarT',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-7', 
      source: '45', 
      target: '48', 
      targetHandle: 'tarT',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-8', 
      source: '45', 
      target: '49', 
      targetHandle: 'tarT',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-9', 
      source: '45', 
      target: '50', 
      targetHandle: 'tarT',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-10', 
      source: '45', 
      target: '51', 
      targetHandle: 'tarT',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    //-----
    { 
      id: 'edge-11', 
      source: '47', 
      target: '48', 
      sourceHandle: 'souR',
      targetHandle: 'tarL',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-12', 
      source: '48', 
      target: '47', 
      sourceHandle: 'souL',
      targetHandle: 'tarR',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-13', 
      source: '48', 
      target: '49', 
      sourceHandle: 'souR',
      targetHandle: 'tarL',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-14', 
      source: '49', 
      target: '48', 
      sourceHandle: 'souL',
      targetHandle: 'tarR',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-15', 
      source: '49', 
      target: '50', 
      sourceHandle: 'souR',
      targetHandle: 'tarL',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-16', 
      source: '50', 
      target: '49', 
      sourceHandle: 'souL',
      targetHandle: 'tarR',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-17', 
      source: '50', 
      target: '51', 
      sourceHandle: 'souR',
      targetHandle: 'tarL',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-18', 
      source: '51', 
      target: '50', 
      sourceHandle: 'souL',
      targetHandle: 'tarR',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-19', 
      source: '47', 
      target: '52', 
      sourceHandle: 'souL',
      targetHandle: 'tarT',
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    //-------
    { 
      id: 'edge-20', 
      source: 'temp', 
      target: '53', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-21', 
      source: 'temp', 
      target: '54', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-22', 
      source: 'temp', 
      target: '55', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-23', 
      source: 'temp', 
      target: '56', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-24', 
      source: 'temp', 
      target: '57', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-25', 
      source: 'temp', 
      target: '58', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-26', 
      source: 'temp', 
      target: '59', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-27', 
      source: 'temp', 
      target: '60', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-28', 
      source: 'temp', 
      target: '61', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-29', 
      source: 'temp', 
      target: '62', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-30', 
      source: 'temp', 
      target: '63', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-31', 
      source: 'temp', 
      target: '64', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-32', 
      source: 'temp', 
      target: '65', 
      type: 'step',
      markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#F48123'
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-33', 
      source: '45', 
      target: 'temp', 
      type: 'step',
      markerEnd: {
          color: '#F48123',
          type: MarkerType.ArrowClosed,
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-33a', 
      source: '45', 
      target: 'temp', 
      type: 'step',
      markerEnd: {
          color: '#F48123',
          type: MarkerType.ArrowClosed,
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-33b', 
      source: '45', 
      target: 'temp', 
      type: 'step',
      markerEnd: {
          color: '#F48123',
          type: MarkerType.ArrowClosed,
      },
      style: { stroke: 'var(--red)'} 
    },
    { 
      id: 'edge-34', 
      source: '47', 
      target: 'temp', 
      sourceHandle: 'souB',
      type: 'step',
      markerEnd: {
          color: '#F48123',
          type: MarkerType.ArrowClosed,
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-35', 
      source: '48', 
      target: 'temp', 
      sourceHandle: 'souB',
      type: 'step',
      markerEnd: {
          color: '#F48123',
          type: MarkerType.ArrowClosed,
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-36', 
      source: '49', 
      target: 'temp', 
      sourceHandle: 'souB',
      type: 'step',
      markerEnd: {
          color: '#F48123',
          type: MarkerType.ArrowClosed,
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-37', 
      source: '50', 
      target: 'temp', 
      sourceHandle: 'souB',
      type: 'step',
      markerEnd: {
          color: '#F48123',
          type: MarkerType.ArrowClosed,
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
    { 
      id: 'edge-38', 
      source: '51', 
      target: 'temp', 
      sourceHandle: 'souB',
      type: 'step',
      markerEnd: {
          color: '#F48123',
          type: MarkerType.ArrowClosed,
      },
      style: { stroke: 'var(--red)',strokeDasharray: '5 5'} 
    },
  ]
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_HOST}/sharedtable/detail/42`)
    .then(response => response.text())
    .then(result => {
        const data = JSON.parse(result).result
        setData(data)
    })
    .catch(error => console.log('error', error));
},[])
  return (
    <Container 
      maxWidth='100%' 
      sx={{
          marginTop:theme.spacing(10),
          marginBottom:theme.spacing(10),
          backgroundImage: `url(/assets/images/bg2.png)`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: 'left bottom'
      }} 
    >
      <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Sơ đồ tổ chức')}</Typography>
      <Box sx={{ height: '85vh', width: '100%', marginTop:'50px'}}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          fitView
          attributionPosition="bottom-left"
          selectNodesOnDrag={false}
          nodeTypes={nodeTypes}
        >
          <Box sx={{zIndex:1,background:theme.color.white}}>
            <label className='line1' style={{display:'flex',alignItems:'center', color:'var(--green4)'}}>{t('Quan hệ trực tuyến')}</label>
            <label className='line2' style={{display:'flex',alignItems:'center', color:'var(--green4)'}}>{t('Quan hệ chức năng')}</label>
          </Box>
          <Box
            sx={{position:'absolute',bottom:0,left:0,background:'#E0F4E5',width:'100px',height:'50px',zIndex:'9'}}
          >

          </Box>
        </ReactFlow>
      </Box>
      <Container maxWidth='xl'>
        <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Giới thiệu bộ máy')}</Typography>
        <Box className='ck-content' sx={{margin:theme.spacing(3)}} dangerouslySetInnerHTML={{__html:data?.["content_"+currentLang] || data?.content}}>

        </Box>
      </Container>
      
    </Container>
  );
};

export default OrgnizationChart;

