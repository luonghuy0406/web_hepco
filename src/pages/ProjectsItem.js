import { Box, Container, Divider, Grid, Typography, useTheme } from '@mui/material'
import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload'
import Banner from '../sections/Banner'
import { useParams } from 'react-router-dom';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import { formatDateTime } from '../functions'
import ProjectsNewest from '../sections/Projects/ProjectsNewest'
import RelatedProjects from '../sections/Projects/RelatedProjects'

export default function ProjectsItem() {
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const theme = useTheme()
    const { threadId } = useParams();
    const lastDotIndex = threadId.lastIndexOf('.');
    const idPart = threadId.substring(lastDotIndex + 1);
    const categories = {
        '0': {name: t('Tất cả dự án'), value:'0'},
        '7': {name: t('Dự án đầu tư'), value:'7'},
        '8': {name: t('Hợp tác trong nước'), value:'8'},
        '9': {name: t('Hợp tác nước ngoài'), value:'9'}
    }
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/project/detail/${idPart}`)
        .then(response => response.text())
        .then(result => {
            const dtProjects = JSON.parse(result).result
            setData([dtProjects])
        })
        .catch(error => console.log('error', error));
    },[idPart])

  window.scrollTo(0, 0)
  return (
    <>
        <Helmet>
          <title> {t("Dự án")} | {t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
        </Helmet>
      <Banner name={''} image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={`/`} pages={[]}/>
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
                    backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${data[0]?.image})`, 
                    // backgroundImage: `url(https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg)`, 
                    
                    backgroundPosition:'center', 
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    marginBottom:theme.spacing(5)
                  }}
              />
          </LazyLoad>
            <Grid container spacing={2}>
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
                          <RelatedProjects data={data}/>
                          <br/>
                          <Divider/>
                          <br/>
                          <ProjectsNewest/>
                      </Box>
                  </Grid>
                </Grid>
                
            </Grid>
        </Container>
    </>
  )
}
