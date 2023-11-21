
import { useTheme } from "@emotion/react";
import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Image } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobile, faPhone, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";


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
export default function Footer(){
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
                background: `url(https://rstheme.com/products/wordpress/planteo/wp-content/uploads/revslider/main-home/slider-1.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', 
                py:theme.spacing(5), pb:theme.spacing(2)
            }}
        >
            <Container maxWidth='xl' sx={{padding:theme.spacing(4)}} ref={footerRef}>
                <Grid container spacing={2}>
                    <Grid item xs={4} px={2} container spacing={2}>
                        <Grid item xs={12}>
                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <img src={'./assets/logo.png'} alt='hepco logo' width={85} height={85} />
                                <Typography variant="h5" pl={3} color={theme.color.white} fontWeight={"bold"}>HEPCO Huế</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography fontWeight={500} color={theme.color.white}>We work with a passion of taking challenges and creating new ones in advertising sector.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to='/gioithieu'>
                                <CustomizedButton sx={{width:"150px"}} variant="contained">Giới thiệu</CustomizedButton>
                            </Link>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={4} px={2} container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" fontWeight={700} color={theme.color.white} className="type-line2">
                                Thông tin công ty:  
                            </Typography>
                        </Grid>
                        <Grid item xs={1}><Typography fontWeight={600} color={theme.color.red}><FontAwesomeIcon icon="fa-solid fa-location-dot" /></Typography></Grid>
                        <Grid item xs={11}><Typography fontWeight={500} color={theme.color.white}>46 Trần Phú, Phường Phước Vĩnh, TP. Huế</Typography></Grid>
                        <Grid item xs={1}><Typography fontWeight={600} color={theme.color.red}><FontAwesomeIcon icon="fa-solid fa-mobile" /></Typography></Grid>
                        <Grid item xs={11}><Typography fontWeight={500} color={theme.color.white}>(0234) 3848242 </Typography></Grid>
                        <Grid item xs={1}><Typography fontWeight={600} color={theme.color.red}><FontAwesomeIcon icon="fa-solid fa-fax" /></Typography></Grid>
                        <Grid item xs={11}><Typography fontWeight={500} color={theme.color.white}>(0234) 3848075</Typography></Grid>
                        <Grid item xs={1}><Typography fontWeight={600} color={theme.color.red}><FontAwesomeIcon icon="fa-solid fa-phone" /></Typography></Grid>
                        <Grid item xs={11}><Typography fontWeight={500} color={theme.color.white}>(0234) 3997799</Typography></Grid>
                        <Grid item xs={1}><Typography fontWeight={600} color={theme.color.red}><FontAwesomeIcon icon="fa-solid fa-envelope" /></Typography></Grid>
                        <Grid item xs={11}><Typography fontWeight={500} color={theme.color.white}>info@hepco.com.vn</Typography></Grid>
                        <Grid item xs={12} container  spacing={1}>
                            <Grid item><Image src='./assets/icons/ic_zalo.svg' alt="zalo icon" width="25" height="25"/></Grid>
                            <Grid item><Image src='./assets/icons/ic_facebook.svg' alt="zalo icon" width="25" height="25"/></Grid>
                            <Grid item><Image src='./assets/icons/ic_youtube.svg' alt="zalo icon" width="25" height="25"/></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} px={2} container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" spacing={2} fontWeight={700} color={theme.color.white} className="type-line2">
                                Thư viện ảnh:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} container spacing={1}>
                            {[1,2,3,4,5,6,7,8].map((id)=>{
                                return(
                                   <Grid item xs={3} key={'gallery-'+id}>
                                    <Box 
                                    sx={{
                                        width:"100%", 
                                        height:"auto", 
                                        aspectRatio:"1", 
                                        backgroundImage:"url(https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg)",
                                        backgroundSize:"cover",
                                        backgroundPosition:"center",
                                        backgroundRepeat:"no-repeat"
                                    }}>

                                    </Box>
                                    </Grid> 
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='100%' sx={{pt: theme.spacing(4), fontSize:'14px',padding:theme.spacing(2), color:theme.color.white, display:'flex', justifyContent:'space-between'}}>
                <Box>
                    Chứng nhận ISO 9001:2015 và ISO 14001:2015
                </Box>
                <Box>
                    Copyright 2023 © Công ty Cổ phần Môi trường và Công trình Đô thị Huế - HEPCO
                </Box>
            </Container>
        </Container>
    )
}