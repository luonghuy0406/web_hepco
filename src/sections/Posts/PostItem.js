import { Box, Breadcrumbs, Container, Divider, Grid, Typography, useTheme } from '@mui/material'
import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload'
import { Link, useParams } from 'react-router-dom';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import PostNewest from './PostNewest'
import PostRelated from './PostRelated'
import { formatDateTime } from '../../functions';
import Banner from '../Banner';

export default function PostItem({typePost}) {
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const theme = useTheme()
    const { threadId } = useParams();
    const lastDotIndex = threadId.lastIndexOf('.');
    const idPart = threadId.substring(lastDotIndex + 1);
    const categories = {
        '0': {path: "",name: t('Tất cả tin'), value:'0'},
        '1': {path: t("hoatdong"),name: t('Hoạt động công ty'), value:'1'},
        '2': {path: t("dangdoan"),name: t('Đảng Đoàn thể'), value:'2'},
        '3': {path: t("phapluat"),name: t('Pháp luật môi trường'), value:'3'},
        '4': {path: t("tinkhac"),name: t('Tin tức khác'), value:'4'},
        '5': {path: t("thongbao"),name: t('Thông báo'), value:'5'},
        '6': {path: t("baocao"),name: t('Báo cáo'), value:'6'},
        '7': {path: t("dautu"),name: t('Dự án đầu tư'), value:'7'},
        '8': {path: t("trongnuoc"),name: t('Hợp tác trong nước'), value:'8'},
        '9': {path: t("nuocngoai"),name: t('Hợp tác nước ngoài'), value:'9'}
    }
    const type = {
        'post' : {path: t('tintuc'), name : t("Tin tức")},
        'project' : {path: t('duan'), name : t("Dự án")},
        'shareholder' : {path: t('codong'), name : t("Cổ đông")},
    } 
    
    const [data,setData] = useState()
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/${typePost}/detail/${idPart}`)
        .then(response => response.text())
        .then(result => {
            const dtPost = JSON.parse(result).result
            setData([dtPost])
        })
        .catch(error => console.log('error', error));
    },[idPart])

  window.scrollTo(0, 0)
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
    if(!data){
        return <></>
    }
  return (
    <>
        <Helmet>
          <title>{t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
        </Helmet>
      <Banner name={''} image={'/assets/images/bg4.jpg'} path={`/`} pages={[]}/>
      <Container 
            maxWidth={'xl'} 
            sx={{
                marginTop:theme.spacing(5),
                marginBottom:theme.spacing(10),
            }} 
        >
          <LazyLoad height={400} offset={100}>
              <Box 
                sx={{ 
                    width: "100%", 
                    height: '400px', 
                    backgroundImage: imageError ? 'url("/assets/no_image.jpeg")' : `url(${process.env.REACT_APP_HOST}/read_image/${data[0]?.image})` ,
                    backgroundPosition:'center', 
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    marginBottom:theme.spacing(5)
                  }}
              >
                <img
                    src={`${process.env.REACT_APP_HOST}/read_image/${data[0]?.image}`}
                    alt="Image"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src='/assets/no_image.jpeg'
                        handleImageError()
                    }}
                    style={{ display: 'none' }}
                />
              </Box>
          </LazyLoad>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" to={`/${type[typePost].path}`}>
                    {type[typePost].name}
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    to={`/${type[typePost].path}/${categories?.[data[0]?.type_id]?.path}`}
                >
                    {categories?.[data[0]?.type_id]?.name}
                </Link>
                <Typography color={theme.color.red}>
                    {data[0]?.["name_"+currentLang] || data[0]?.name}
                </Typography>
            </Breadcrumbs>
            <Grid container spacing={2} sx={{marginTop:theme.spacing(2)}}>
                <Grid item container spacing={2}>
                    
                    <Grid item container xs={12} md={9} sx={{height:'fit-content'}}>
                    <Grid item container spacing={3} xs={12} sx={{height:'fit-content'}}>
                        <Grid item xs={12}>
                            <Box sx={{borderLeft: `5px solid ${theme.color.green1}`, paddingLeft:theme.spacing(2)}}>
                                <Typography variant="h4" fontWeight={700}>{data[0]?.["name_"+currentLang] || data[0]?.name}</Typography>
                                <Box
                                    sx={{display: 'flex',alignItems:'center', paddingTop:theme.spacing(1)}}
                                >
                                    <Typography fontWeight={700}><PersonIcon sx={{color:theme.color.green1}}/></Typography>
                                    <Typography fontWeight={700} sx={{margin: '0px 25px 0px 10px'}} color={theme.color.gray1}>{data[0]?.author}</Typography>
                                    <Typography fontWeight={700}><AccessTimeFilledIcon sx={{color:theme.color.green1}}/></Typography>
                                    <Typography fontWeight={700} sx={{margin: '0px 25px 0px 10px'}} color={theme.color.gray1}>{formatDateTime(data[0]?.cre_date,'%d-%m-%Y')}</Typography>
                                    <Typography fontWeight={700}><CategoryIcon sx={{color:theme.color.green1}}/></Typography>
                                    <Typography fontWeight={700} sx={{margin: '0px 25px 0px 10px'}} color={theme.color.gray1}>{categories?.[data[0]?.type_id]?.name}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{height:'fit-content'}}>
                        <br/>
                        <Divider/>
                        <Box className='ck-content' sx={{padding: theme.spacing(1), px: theme.spacing(2)}} dangerouslySetInnerHTML={{__html: data[0]?.["content_"+currentLang] || data[0]?.content}}/>
                    </Grid>
                    </Grid>
                    <Grid item container xs={12} md={3}>
                        <Box sx={{padding: theme.spacing(3),backgroundColor: theme.color.white, boxShadow:'0 5px 20px rgba(34,34,34,.1)', borderRadius: '10px', width:'100%', height: 'fit-content'}}>
                            <PostRelated data={data} typePost={typePost} categories={categories} type={type}/>
                            <br/>
                            <Divider/>
                            <br/>
                            <PostNewest typePost={typePost} type={type} categories={categories}/>
                        </Box>
                    </Grid>
                </Grid>
                
            </Grid>
        </Container>
    </>
  )
}
