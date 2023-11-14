
import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Image } from "semantic-ui-react";

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
                    <Grid item xs={4} px={2} container  spacing={2}>
                        <Typography variant="h5" fontWeight={700} color={theme.color.white} textAlign={"center"}>
                            Công ty Cổ phần Môi trường và Công trình Đô thị Huế - HEPCO    
                        </Typography>
                        <Grid item xs={3}><Typography fontWeight={600} color={theme.color.white}>Địa chỉ:</Typography></Grid>
                        <Grid item xs={9}><Typography fontWeight={500} color={theme.color.white}>46 Trần Phú, Phường Phước Vĩnh, TP. Huế</Typography></Grid>
                        <Grid item xs={3}><Typography fontWeight={600} color={theme.color.white}>Điện thoại:</Typography></Grid>
                        <Grid item xs={9}><Typography fontWeight={500} color={theme.color.white}>(0234) 3848242 </Typography></Grid>
                        <Grid item xs={3}><Typography fontWeight={600} color={theme.color.white}>Fax:</Typography></Grid>
                        <Grid item xs={9}><Typography fontWeight={500} color={theme.color.white}>(0234) 3848075</Typography></Grid>
                        <Grid item xs={3}><Typography fontWeight={600} color={theme.color.white}>Hotline:</Typography></Grid>
                        <Grid item xs={9}><Typography fontWeight={500} color={theme.color.white}>(0234) 3997799</Typography></Grid>
                        <Grid item xs={3}><Typography fontWeight={600} color={theme.color.white}>Email:</Typography></Grid>
                        <Grid item xs={9}><Typography fontWeight={500} color={theme.color.white}>info@hepco.com.vn</Typography></Grid>
                        <Grid item xs={12} container  spacing={1}>
                            <Grid item><Image src='./assets/icons/ic_zalo.svg' alt="zalo icon" width="25" height="25"/></Grid>
                            <Grid item><Image src='./assets/icons/ic_facebook.svg' alt="zalo icon" width="25" height="25"/></Grid>
                            <Grid item><Image src='./assets/icons/ic_youtube.svg' alt="zalo icon" width="25" height="25"/></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} px={2}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.4181314318234!2d107.588855975588!3d16.45435218428236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a146b5a816c7%3A0xada6cb22654e37cc!2sHepco%20Inc!5e0!3m2!1sen!2s!4v1698745881314!5m2!1sen!2s" 
                            width="100%" 
                            height="100%" 
                            style={{"border":"0"}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="map"
                        />
                    </Grid>
                    <Grid item xs={4} px={2} container>
                        <Grid item xs={12}>
                            <Typography variant="h5" fontWeight={700} color={theme.color.white} textAlign={"center"}>
                                Hỗ trợ khách hàng
                            </Typography>
                        </Grid>
                        {/* <Grid item xs={4}>
                            <Image src='./assets/icons/ic_zalo.svg' alt="zalo icon" width="25" height="25"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Image src='./assets/icons/ic_facebook.svg' alt="zalo icon" width="25" height="25"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Image src='./assets/icons/ic_youtube.svg' alt="zalo icon" width="25" height="25"/>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='100%' sx={{pt: theme.spacing(4), fontSize:'14px',padding:theme.spacing(2), color:theme.color.white, display:'flex', justifyContent:'space-between'}}>
                <Box>
                    Chứng chỉ iso...
                </Box>
                <Box>
                    Copyright 2023 © Công ty Cổ phần Môi trường và Công trình Đô thị Huế - HEPCO
                </Box>
            </Container>
        </Container>
    )
}