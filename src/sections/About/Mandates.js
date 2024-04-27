import { Box, Container, Grid, Link, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';

export default function Mandates() {
    const theme = useTheme()
    const {t} = useTranslation()
    const [license, setLicense] = useState([])
    const [mandates, setMandates] = useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/certificate/list`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setLicense(data)
        })
        .catch(error => console.log('error', error));

        fetch(`${process.env.REACT_APP_HOST}/sharedtable/father/14`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setMandates(data)
        })
        .catch(error => console.log('error', error));
    },[])
    return (
        <Container
            maxWidth='100%'
            sx={{
                padding:0,
                backgroundImage: `url(/assets/images/bg2.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'left center',
            }}
        >
            <Container 
                maxWidth={'xl'} 
                sx={{
                    marginTop:theme.spacing(10),
                    marginBottom:theme.spacing(10)
                }} 
            >
                <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Chức năng hoạt động')}</Typography>
                <Grid container spacing={2}>
                    {
                    mandates.map((mandate,id)=>{
                        return(
                            <MandatesItem key={"MandatesItem"+id} mandate={mandate} reverse={id%2==0}/>
                        )
                    })
                    }
                </Grid>
                <Typography sx={{marginBottom:theme.spacing(4), marginTop:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Giấy phép - Chứng nhận')}</Typography>
            
                <Grid container spacing={2}>
                    {
                        license.map((data,index)=>{
                            return <License key={"License"+index} index={index} data={data}/>
                        })
                    }
                </Grid>
            </Container>
        </Container>
    )
}

const License = ({index, data})=>{
    return(
        <Grid item xs={6} md={3} >
            <Link href={data.name || data.name_en} target='_blank'>
                <LazyLoad height={200} offset={100}>
                    <Box 
                        className="wow animate__animated animate__fadeInRight"
                        sx={{
                            width:'100%',
                            borderRadius:'10px',
                            height:'350px',
                            backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${data.image?.replace(/%2f|%2F/g,'%252F')})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover',
                            backgroundPosition:'center',
                            boxShadow: '2px 2px 11px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </LazyLoad>
            </Link>
        </Grid>
    )
}

const MandatesItem = ({mandate, reverse}) =>{
    const theme = useTheme()
    const {t,i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''

    return(
        <Grid item xs={12} container spacing={2} sx={{marginBottom:theme.spacing(4), flexDirection: reverse ? "row-reverse" : "row"}}>
            <Grid item xs={0} md={6} >
                <Box
                    className={"wow animate__animated " + (reverse ? "animate__fadeInRight" : "animate__fadeInLeft") }
                    sx={{
                        width:'100%',
                        height:'100%',
                        minHeight:{xs: 0, md: '400px'},
                        backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${mandate.image?.replace(/%2f|%2F/g,'%252F')})`,
                        backgroundPosition:'70%',
                        backgroundSize:'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius:'10px'
                    }}
                />
            </Grid>
            <Grid item xs={12} md={6} className={"wow animate__animated " + (reverse ? "animate__fadeInLeft" : "animate__fadeInRight") }>
                <Box sx={{padding: theme.spacing(2)}} >
                    <Typography sx={{marginBottom:theme.spacing(3)}} variant='h5' fontWeight={700} color={theme.color.green1}>{mandate?.["name_"+currentLang] || mandate?.name}</Typography>
                    <Box className='ck-content' dangerouslySetInnerHTML={{__html:mandate?.["content_"+currentLang] || mandate?.content}}/>
                            
                </Box>
            </Grid>
        </Grid>
    )
}