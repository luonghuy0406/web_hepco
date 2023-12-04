import React, { useEffect, useRef } from 'react'
import {  useTheme } from '@emotion/react'
import { Box, Container, Grid, Typography, styled } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'

library.add(fas, faFontAwesome, faPlay)

const IconImage = styled('img')(({ theme }) => ({
    width: "70px",
    zIndex: 2
  }))
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

const BlogButton = styled(Box)(({ theme }) => ({
    a: {
      color: theme.color.black,
      background: 0,
      border: 'none',
      borderRadius: '25px',
      paddingRight: '25px',
      lineHeight: '30px',
      display: 'inline-block',
      transition: 'all .4s ease-in-out 0s',
      position: 'relative',
      fontSize: '16px',
      fontWeight: 600,
      textDecoration: 'none',
      '&:hover': {
        color: theme.color.red,
        '.arrow-news': {
          color: theme.color.red,
          transform: 'translateX(20%)',
        },
      },
    },
    '.arrow-news': {
      position: 'absolute',
      top: 0,
      right: 0,
      transition: 'transform 0.5s ease',
      lineHeight: '1.5rem',
    },
  }));
export function OurServices() {
  const {t} = useTranslation()
  const theme = useTheme()
  const serviceImageRef = useRef(null)
  const serviceContentRef = useRef(null)
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        deplay: 1000
    });
    useEffect(() => {
        if(inView){
            if (serviceImageRef.current) {
                serviceImageRef.current.classList.add('animate__animated','animate__fadeInLeft');
            }
            if (serviceContentRef.current) {
                serviceContentRef.current.classList.add('animate__animated','animate__fadeInRight');
            }
        }
    }, [inView]);
  return (
    <Box
    sx={{
        backgroundImage: `url(/assets/images/bg2.png)`,
        backgroundRepeat: `no-repeat`,
    }}
    >
        <Container maxWidth='100%%'sx={{mt:theme.spacing(5), py: theme.spacing(5)}}>
            <Grid container>
                <Grid ref={serviceImageRef} item xs={0} md ={0} lg={4} sx={{p:theme.spacing(3), display:{xs: 'none', md:'none', lg:'block'}}}>
                    <Box sx={{
                        p:theme.spacing(6),
                        backgroundImage:"url('/assets/images/service.jpg') !important",
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        backgroundRepeat:"no-repeat",
                        position:"relative",
                        height:"100%",
                        minHeight:"500px",
                        borderRadius: "10px"
                    }}/>
                </Grid>
                <Grid ref={serviceContentRef} item conntainer xs={12} md={0} lg={8} sx={{position:'relative',p:theme.spacing(3)}}>
                    <StyledTypography ref={ref} variant='h4'>
                        {t('Dịch vụ của chúng tôi')}
                    </StyledTypography>
                    <Box>
                    <Grid container sx={{pt: theme.spacing(4), pl: theme.spacing(4)}} spacing={2}>
                        {
                            [1,2,3,4,5,6].map((id,index)=>{
                                return(
                                    <ServiceItem id={id} key={'service-item'+index}/>
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

const ServiceItem = ({id}) =>{
    const theme = useTheme()
    const {t} = useTranslation()
    return (
        <Grid key={id} item xs={12} sm={6} md={4} lg={4}>
            <Box sx={{padding:theme.spacing(5),backgroundColor: theme.color.white,boxShadow: '0 0 15px #eee', borderRadius:"10px", height:'100%'}} className={"our-service-wrap service-item"}>
                <div
                    className="service__overlay bg-img"
                    style={{
                        backgroundImage: 'url("/assets/images/mission2.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "10px"
                    }}
                ></div>
                <Grid container sx={{position:'relative', zIndex:2}}>
                    <Grid xs={12} className='service-icon'>
                        <Box
                            sx={{
                                WebkitMaskBoxImage:'url(https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/ff.png)',
                                // WebkitMaskImage: 'url(https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/ff.png)',
                                // maskImage: 'url(https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/ff.png)',
                                WebkitMaskSize: '70%',
                                maskSize: '70%',
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat', 
                                width: '70px',
                                height:'70px',
                                backgroundColor:theme.color.green1
                            }}
                        >

                        </Box>
                    </Grid>
                    <Grid xs={12} className='text-service-title'>
                        <Typography variant='h5' fontWeight={700} py={theme.spacing(2)} color={theme.color.red}>{"Tên dịch vụ " + id}</Typography>
                    </Grid>
                    <Grid xs={12} pb={theme.spacing(2)}>
                        <Typography className='text-service' textAlign={'justify'}>
                            We have a custom cleaning service designed to help you clean when you need it,
                            whether we clean one time or on regular, your house will always sparkle clean
                        </Typography>
                    </Grid>
                    <BlogButton className='text-service'>
                        <Link to="#">
                            <Typography fontWeight={700} lineHeight={'1.5rem'} >{t("Read more")}</Typography>
                            <Typography sx={{display:'inline', pl: '5px'}} className='arrow-news'><FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></Typography>
                        </Link>
                    </BlogButton>
                </Grid>
            </Box>
        </Grid>
    )
}