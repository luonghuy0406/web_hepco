import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import 'animate.css';

export default function Mandates() {
    const theme = useTheme()
    const {t} = useTranslation()
    return (
        <Container 
            maxWidth={'xl'} 
            sx={{
                marginTop:theme.spacing(10),
                marginBottom:theme.spacing(10),
            }} 
        >
            <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Chức năng hoạt động')}</Typography>
            <Grid container spacing={2}>
                {
                [1,2,3].map((id)=>{
                    return(
                        <MandatesItem key={"MandatesItem"+id} reverse={id%2==0}/>
                    )
                })
                }
            </Grid>
            <Typography sx={{marginBottom:theme.spacing(4), marginTop:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Giấy phép - Chứng nhận')}</Typography>
        
            <Grid container spacing={2}>
                {
                    [1,2,3,4,5,6].map((index)=>{
                        return <License key={"License"+index} index={index}/>
                    })
                }
            </Grid>
        </Container>
    )
}

const License = ({index})=>{
    const item = useRef(null)
    const { ref, inView } = useInView({
        threshold: 0,
        deplay: 300
    });
    
    useEffect(() => {
        if(inView){
            if (item.current) {
                setTimeout(()=>{
                    item.current.classList.add('animate__animated','animate__fadeInRight');
                },index*200)
            }
        }
    }, [inView]);
    return(
        <Grid item xs={6} md={3} ref={ref}>
            <Box 
                ref={item}
                sx={{
                    width:'100%',
                    height:'100%',
                    borderRadius:'10px'
                }}
            >
                <img src='/assets/images/iso1.jpeg' width={'100%'} alt='giay phep 1'/>
            </Box>
        </Grid>
    )
}

const MandatesItem = ({reverse}) =>{
    const theme = useTheme()
    const {t} = useTranslation()


    const item1 = useRef(null)
    const item2 = useRef(null)
    
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        deplay: 300
    });
    
    useEffect(() => {
        if(inView){
            if(reverse){
                if (item1.current) {
                    item1.current.classList.add('animate__animated','animate__fadeInRight')
                }
                if (item2.current) {
                    item2.current.classList.add('animate__animated','animate__fadeInLeft')
                }
            }else{
                if (item1.current) {
                    item1.current.classList.add('animate__animated','animate__fadeInLeft')
                }
                if (item2.current) {
                    item2.current.classList.add('animate__animated','animate__fadeInRight')
                }
            }
        }
    }, [inView]);
    return(
        <Grid item xs={12} container spacing={2} sx={{marginBottom:theme.spacing(4), flexDirection: reverse ? "row-reverse" : "row"}}>
            <Grid item xs={0} md={6} >
                <Box
                    ref={item1}
                    sx={{
                        width:'100%',
                        height:'100%',
                        minHeight:{xs: 0, md: '400px'},
                        backgroundImage: 'url(/assets/images/thungo.jpeg)',
                        backgroundPosition:'70%',
                        backgroundSize:'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius:'10px'
                    }}
                />
            </Grid>
            <Grid item xs={12} md={6} ref={item2}>
                <Box sx={{padding: theme.spacing(2)}} >
                    <Typography ref={ref} sx={{marginBottom:theme.spacing(3)}} variant='h5' fontWeight={700} color={theme.color.green1}>{t('Lĩnh vực Vệ Sinh Môi Trường')}</Typography>
                    <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                        <b>Vệ sinh, thu gom và Vận Chuyển xử lý Chất Thải:</b> HEPCO có chức năng Vệ sinh, thu gom và vận chuyển và xử lý chất thải sinh hoạt từ các nguồn khác nhau như hộ gia đình, tổ chức, doanh nghiệp, khu công nghiệp, trường học, bệnh viện..; chất thải y tế, nguy hại, xây dựng..
                    </Typography>
                    <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                        <b>Vệ sinh công cộng:</b> Thực hiện các công tác vệ sinh đường phố, khu công nghiệp, khu đô thị..; tưới nước rửa đường; quét hút bụi..
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}