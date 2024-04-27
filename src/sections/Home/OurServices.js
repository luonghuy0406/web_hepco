import { useTheme } from '@emotion/react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const StyledTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    // fontSize:'42px',
    '&:after':{
        content: "''",
        border: 0,
        width: '70px',
        height: '5px',
        background: theme.color.red,
        display: 'block',
        marginTop: '5px',
        position: 'absolute',
        left: '50%',
        right: '50%',
        transform:'translateX(-50%) translateY(50%)',
    }
}));

export function OurServices() {
    const {t} = useTranslation()
    const theme = useTheme()
    const [serviceData, setServiceData] = useState([]) 
    
    useEffect(()=>{
        const dt = localStorage.getItem(`${process.env.REACT_APP_HOST}/service/list`)
        if(dt){
            const data = JSON.parse(dt)
            setServiceData(data.slice(0,6))
        }else{
            fetch(`${process.env.REACT_APP_HOST}/service/list`)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result).result
                localStorage.setItem(`${process.env.REACT_APP_HOST}/service/list`,JSON.stringify(data))
                setServiceData(data.slice(0,6))
            })
            .catch(error => console.log('error', error));
        }
    },[])
  return (  
    <Box
    sx={{
        backgroundImage: `url(/assets/images/bg2.png)`,
        backgroundRepeat: `no-repeat`,
    }}
    >
        <Container maxWidth='100%%'sx={{mt:theme.spacing(5), py: theme.spacing(5)}}>
            <Grid container >
                <Grid className="wow animate__animated animate__fadeInLeft" item xs={0} md ={0} lg={4} sx={{p:theme.spacing(3), display:{xs: 'none', md:'none', lg:'block'}}}>
                    <Box sx={{
                        p:theme.spacing(6),
                        backgroundImage:"url('/assets/images/service.png') !important",
                        backgroundSize:"contain",
                        backgroundPosition:"center",
                        backgroundRepeat:"no-repeat",
                        position:"relative",
                        height:"100%",
                        minHeight:"400px",
                        borderRadius: "10px"
                    }}/>
                </Grid>
                <Grid className="wow animate__animated animate__fadeInRight" item conntainer xs={12} md={0} lg={8} sx={{position:'relative',p:theme.spacing(3)}}>
                    <StyledTypography variant='h4'>
                        {t('Dịch vụ của chúng tôi')}
                    </StyledTypography>
                    <Box>
                    <Grid container sx={{pt: theme.spacing(4), pl: theme.spacing(4)}} spacing={6}>
                        {
                            serviceData.map((data,index)=>{
                                return(
                                    <ServiceItem data={data} key={'service-item'+index}/>
                                )
                            })
                        }     
                    </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

const ServiceItem = ({data}) =>{
    const theme = useTheme()
    const {t,i18n} = useTranslation()

    const currentLang = i18n.language == 'en' ? 'en' : ''
    const path = {
        'ser_01':`/${t('dichvu')}`,
        'ser_02':`/${t('dichvu')}/${t('nguyhai')}`,
        'ser_03':`/${t('dichvu')}/${t('cokhi-xaydung')}`,
        'ser_04':`/${t('dichvu')}/${t('thoatnuoc-chieusang')}`,
        'ser_05':`/${t('dichvu')}/${t('quantrang')}`,
        'ser_06':`/${t('dichvu')}/${t('kinhdoanhkhac')}`
    }
    return (
        <Grid item xs={12} sm={6} md={4} lg={4} sx={{padding: theme.spacing(3)}}>
            <Link to={path[data.id_service]}>
                <Box sx={{
                        padding: theme.spacing(3),
                        boxShadow: '0 0 15px #eee', 
                        borderRadius: "10px", 
                        height: '100%',
                        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(9,9,121,0.1) 70%, rgba(0,212,255,0) 100%), url("${process.env.REACT_APP_HOST}/read_image/${data.image?.replace(/%2f|%2F/g,'%252F')}")`, 
                        backgroundPosition: "center", 
                        backgroundRepeat: "no-repeat", 
                        backgroundSize: "cover",
                        display: "flex", 
                        alignItems: "flex-end",
                        minHeight: "350px",
                        "&:hover" : {
                            backgroundImage : `linear-gradient(0deg, #f48123 0%, rgba(9,9,121,0.1) 70%, rgba(0,212,255,0)), url("${process.env.REACT_APP_HOST}/read_image/${data.image?.replace(/%2f|%2F/g,'%252F')}")`
                        }
                    }} 
                    className={"our-service-wrap"}
                >
                    <Grid container sx={{position:'relative', zIndex:2}}>
                        <Grid xs={12} >
                            <Typography variant='h5' className='text-service' textAlign="center" fontWeight={700} py={theme.spacing(2)} color={theme.color.white}>{data["name_"+currentLang] || data.name}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Link>
        </Grid>
    )
}