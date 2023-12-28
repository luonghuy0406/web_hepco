
import { useTheme } from "@emotion/react";
import { Box, Button, Card, CardMedia, Container, Grid, Typography, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Image } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobile, faPhone, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


library.add(fas, faFontAwesome, faLocationDot, faMobile, faPhone, faFax, faEnvelope, faFacebook, faYoutube)

const CustomizedButton = styled(Button)(({ theme }) => ({
    // Set background color
    backgroundColor: theme.color.red,
    fontWeight:"700",
    fontSize:"16px",
    padding:theme.spacing(1),
    // Set text color
    color: theme.color.white,
    borderColor: theme.color.red,

    // Set border styles
    borderRadius: '4px',

    // Set hover styles
    '&:hover': {
        backgroundColor: theme.color.red,
        borderColor: theme.color.red,
    },

    // Set active styles
    '&:active': {
        backgroundColor: theme.color.red,
        borderColor: theme.color.red,
    },

    // Set focus styles
    '&:focus': {
        outline: 'none', // Remove the default focus outline
        // boxShadow: `0 0 0 3px rgba(0, 123, 255, 0.3)`, // Add a custom focus border
    },
}));
export default function Footer({company_data}){
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const theme = useTheme()
    const footerRef = useRef(null)
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        deplay: 1000
    });
    useEffect(() => {
        if(inView){
            if (footerRef.current) {
                footerRef.current.classList.add('animate__animated','animate__fadeInUp');
            }
        }
    }, [inView]);
    return(
        <Container 
            ref={ref}
            maxWidth='100%' 
            p={0} 
            sx={{
                background: `url(/assets/images/bg3.jpeg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', 
                py:theme.spacing(5), pb:theme.spacing(2)
            }}
        >
            <Container maxWidth='xl' sx={{padding:theme.spacing(4)}} ref={footerRef}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} px={2} mb={3} container spacing={2}>
                        <Grid item xs={12}>
                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <img src={'/assets/logo2.png'} alt='hepco logo' width={85} height={85} />
                                <Typography variant="h5" pl={3} color={theme.color.white} fontWeight={"bold"}>HEPCO</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography fontWeight={500} color={theme.color.white}>We work with a passion of taking challenges and creating new ones in advertising sector.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to={`/${t('gioithieu')}`}>
                                <CustomizedButton sx={{width:"150px"}} variant="contained">{t('Giới thiệu')}</CustomizedButton>
                            </Link>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12} md={4} px={2} mb={3} container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" fontWeight={700} color={theme.color.white} className="type-line2">
                                {t('Thông tin công ty:')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}><Typography fontWeight={600} color={theme.color.white}>CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ</Typography></Grid>
                        <Grid item xs={12}><Typography fontWeight={500} color={theme.color.white}>{company_data[4]?.["data_"+currentLang] || company_data[4].data}</Typography></Grid>
                        <Grid item xs={12}><Typography fontWeight={500} color={theme.color.white}>{company_data[5]?.["data_"+currentLang] || company_data[5].data} </Typography></Grid>
                        <Grid item xs={12}><Typography fontWeight={500} color={theme.color.white}>{company_data[6]?.["data_"+currentLang] || company_data[6].data}</Typography></Grid>
                        <Grid item xs={12}><Typography fontWeight={500} color={theme.color.white}>{company_data[7]?.["data_"+currentLang] || company_data[7].data}</Typography></Grid>
                        <Grid item xs={12}><Typography fontWeight={500} color={theme.color.white}>{company_data[10]?.["data_"+currentLang] || company_data[10].data}</Typography></Grid>

                        <Grid item xs={12} container  spacing={1}>
                            
                            
                            
                            <Grid item>
                                <Link to={company_data[13]?.data} style={{textDecoration:'none'}} target={"_blank"}>
                                    <Image src='/assets/icons/ic_zalo.svg' alt="zalo icon" width="25" height="25"/>
                                </Link> 
                            </Grid>
                            <Grid item>
                                <Link to={company_data[11]?.data} style={{textDecoration:'none'}} target={"_blank"}>
                                    <Image src='/assets/icons/ic_facebook.svg' alt="zalo icon" width="25" height="25"/>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={company_data[12]?.data} style={{textDecoration:'none'}} target={"_blank"}>
                                    <Image src='/assets/icons/ic_youtube.svg' alt="zalo icon" width="25" height="25"/>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} px={2} mb={3} container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" spacing={2} fontWeight={700} color={theme.color.white} className="type-line2">
                                {t('Thư viện ảnh:')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} container spacing={1}>
                            <MiniGallery/>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='100%' sx={{padding:theme.spacing(2), pt: theme.spacing(10), fontSize:'14px', color:theme.color.white, display:'flex', justifyContent:'space-between'}}>
                <Grid container>
                    <Grid item xs={4} alignItems={"center"}>
                        <Typography fontSize='14px' textAlign={"left"} color={theme.color.white}>{company_data[8]?.["data_"+currentLang] || company_data[8].data}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Box onClick={()=>{window.open('http://flyaz.vn/', '_blank').focus()}} sx={{display:'flex',alignItems:'center', justifyContent:'center', cursor:'pointer'}}>
                            {t('Thiết kế và xây dựng bởi')} <img style={{paddingLeft:'5px'}} src='/assets/flyaz.png' alt='logo flyaz' width={'auto'} height={'20'}/>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography fontSize='14px' textAlign={"right"} color={theme.color.white}>{t('Copyright 2023 © CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ - HEPCO')}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

const MiniGallery = ()=>{
    const {t} = useTranslation()
    const [images, setImages] = useState([])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/library/list?p=0&c=8&id_album=0`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setImages(data.data)
        })
        .catch(error => console.log('error', error));
    },[])
    return(
        images.map((image,id)=>{
            return(
               <Grid item xs={3} key={'gallery-'+id}>
                <Link to={`/${t('gioithieu')}/${t("thuvien")}`}>
                    <Box 
                    sx={{
                        width:"100%", 
                        height:"auto", 
                        aspectRatio:"1", 
                        backgroundImage:`url(${process.env.REACT_APP_HOST}/read_image/${image.link})`,
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        backgroundRepeat:"no-repeat"
                    }}>

                    </Box>
                </Link>
                </Grid> 
            )
        })
    )
}