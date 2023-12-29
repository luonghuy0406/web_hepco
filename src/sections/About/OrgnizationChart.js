import react, { useEffect, useState } from 'react';
import ReactFlow, {MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import {Container, Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const OrgnizationChart = () => {
  const {t, i18n} = useTranslation()
  const currentLang = i18n.language == 'en' ? 'en' : ''
  const theme = useTheme()
  const initialNodes = [
    {
      id: '1',
      sourcePosition: 'bottom',
      type: 'input',
      data: { label: t('ĐẠI HỘI CỔ ĐÔNG') },
      position: { x: 300, y: 200 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'200px' }
    },
    {
      id: '2',
      sourcePosition: 'right',
      targetPosition: 'top',
      type: 'default',
      data: { label: t('BAN KIỂM SOÁT') },
      position: { x: 0, y: 350 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'200px' }
    },
    {
      id: '3',
      sourcePosition: 'right',
      targetPosition: 'top',
      type: 'default',
      data: { label: t('HỘI ĐỒNG QUẢN TRỊ') },
      position: { x: 300, y: 310 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'200px' }
    },
    {
      id: '3a',
      targetPosition: 'left',
      type: 'output',
      data: { label: t('HỘI ĐỒNG QUẢN TRỊ') },
      position: { x: 300, y: 310 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'200px' }
    },
    {
      id: '4',
      sourcePosition: 'bottom',
      targetPosition: 'right',
      type: 'default',
      data: { label: t('BAN TỔNG GIÁM ĐỐC') },
      position: { x: 300, y: 390 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'200px' }
    },
    {
      id: '4b',
      data: {},
      position: { x: 399, y: 570 },
      style: {width:0,padding:0, borderColor:"var(--red)"}
    },
    {
      id: '4c',
      data: {},
      position: { x: 399, y: 700 },
      style: {width:0,padding:0, borderColor:"var(--red)"}
    },
    {
      id: '4a',
      targetPosition: 'left',
      type: 'output',
      data: { label: t('BAN TỔNG GIÁM ĐỐC') },
      position: { x: 300, y: 390 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'200px' }
    },
    {
      id: '5',
      sourcePosition: 'left',
      targetPosition: 'left',
      type: 'default',
      data: { label: t('CHỦ TỊCH HĐQT') },
      position: { x: 600, y: 350 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'200px' }
    },
    {
      id: '6',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('PHÒNG TỔ CHỨC HÀNH CHÍNH') },
      position: { x: -250, y: 500 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'250px' }
    },
    {
      id: '7',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('PHÒNG KẾ HOẠCH') },
      position: { x: 100, y: 500 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'250px' }
    },
    {
      id: '8',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('PHÒNG KỸ THUẬT') },
      position: { x: 450, y: 500 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'250px' }
    },
    {
      id: '9',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('PHÒNG KẾ TOÁN - TÀI VỤ') },
      position: { x: 800, y: 500 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'250px' }
    },
    {
      id: '10',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP THOÁT NƯỚC') },
      position: { x: -200, y: 620 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
    {
      id: '11',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP CƠ KHÍ - XÂY LẮP') },
      position: { x: 0, y: 620 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
    {
      id: '12',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP MÔI TRƯỜNG BẮC SÔNG HƯƠNG') },
      position: { x: 200, y: 620 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },

    {
      id: '13',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP MÔI TRƯỜNG NAM SÔNG HƯƠNG') },
      position: { x: 450, y: 620 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
    {
      id: '14',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP VẬN CHUYỂN - XE MÁY') },
      position: { x: 650, y: 620 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
    {
      id: '15',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP ĐIỆN CHIẾU SÁNG') },
      position: { x: 850, y: 620 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
    ,
    {
      id: '16',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP XÂY DỰNG SỐ 2') },
      position: { x: -275, y: 750 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
    {
      id: '17',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP XÂY DỰNG SỐ 1') },
      position: { x: -75, y: 750 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
    {
      id: '18',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('BQL NGHĨA TRANG NHÂN DÂN') },
      position: { x: 125, y: 750 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },

    {
      id: '19',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP XỬ LÝ CHẤT THẢI') },
      position: { x: 325, y: 750 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
    {
      id: '20',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP MTĐT LĂNG CÔ') },
      position: { x: 525, y: 750 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
    {
      id: '21',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP MT&CTĐT HƯƠNG TRÀ') },
      position: { x: 725, y: 750 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
    {
      id: '22',
      targetPosition: 'top',
      type: 'output',
      data: { label: t('XÍ NGHIỆP MT&CTĐT HƯƠNG THUỶ') },
      position: { x: 925, y: 750 },
      style: { background:'var(--green1)', color:"#fff",textTransform: 'uppercase', padding: 10, border: '1px solid var(--green1)', fontWeight:700, width:'150px', minHeight:'80px', display:'flex', alignItems:'center', justifyContent:'center' }
    },
  ]
  const initialEdges = [
      {
        id: 'e1-2',
        source: '1',
        type: 'straight',
        target: '2',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        label: t("(Bầu)"),
      },
      {
        id: 'e1-3',
        source: '1',
        type: 'straight',
        target: '3',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        label: t("(Bầu)"),
      },
      {
        id: 'e2-3a',
        source: '2',
        type: 'straight',
        target: '3a',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
      },
      {
        id: 'e2-4a',
        source: '2',
        type: 'straight',
        target: '4a',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)',strokeDasharray: '5 5' },
      },
      {
        id: 'e3-5',
        source: '3',
        type: 'straight',
        target: '5',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        label: t("(Bầu)"),
      },
      {
        id: 'e5-4',
        source: '5',
        type: 'straight',
        target: '4',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
      },
      {
        id: 'e4-6',
        source: '4',
        type: 'straight',
        target: '6',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
      },
      {
        id: 'e4-7',
        source: '4',
        type: 'straight',
        target: '7',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
      },
      {
        id: 'e4-8',
        source: '4',
        type: 'straight',
        target: '8',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
      },
      {
        id: 'e4-9',
        source: '4',
        type: 'straight',
        target: '9',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
      },
      {
        id: 'e4-4b',
        source: '4',
        type: 'straight',
        target: '4b',
        style: { stroke: 'var(--red)'}
      },
      {
        id: 'e4b-4c',
        source: '4b',
        type: 'straight',
        target: '4c',
        style: { stroke: 'var(--red)'}
      },
      {
        id: 'e4b-10',
        source: '4b',
        target: '10',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4b-11',
        source: '4b',
        target: '11',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4b-12',
        source: '4b',
        target: '12',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4b-13',
        source: '4b',
        target: '13',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4b-14',
        source: '4b',
        target: '14',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4b-15',
        source: '4b',
        target: '15',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4c-16',
        source: '4c',
        target: '16',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4c-17',
        source: '4c',
        target: '17',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4c-18',
        source: '4c',
        target: '18',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4c-19',
        source: '4c',
        target: '19',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4c-20',
        source: '4c',
        target: '20',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4c-21',
        source: '4c',
        target: '21',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      },
      {
        id: 'e4c-22',
        source: '4c',
        target: '22',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#F48123'
        },
        style: { stroke: 'var(--red)'},
        type: 'smoothstep'
      }
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
      <Container maxWidth='xl'>
        <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Giới thiệu bộ máy')}</Typography>
        <Box className='ck-content' sx={{margin:theme.spacing(3)}} dangerouslySetInnerHTML={{__html:data?.["content_"+currentLang] || data?.content}}>

        </Box>
        <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Sơ đồ tổ chức')}</Typography>
      </Container>
      <Box sx={{ height: '85vh', width: '100%', marginTop:'50px'}}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          fitView
          attributionPosition="bottom-left"
          selectNodesOnDrag={false}
          
        >
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

