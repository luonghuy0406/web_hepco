import {Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

export default function Achievement() {
    const theme = useTheme()
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [achieveData,setAchieveData] = useState([]) 
    const awardData = achieveData?.slice(3) || []
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/achieve/list`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setAchieveData(data)
        })
        .catch(error => console.log('error', error));
    },[])
    const item = useRef(null)
    const { ref, inView } = useInView({
        threshold: 0,
        deplay: 300
    });
    
    useEffect(() => {
        if(inView){
            if (item.current) {
                item.current.classList.add('animate__animated','animate__fadeInUp')
            }
        }
    }, [inView])
    return (
        <Container 
            maxWidth={'xl'} 
            sx={{
                marginTop:theme.spacing(10),
                marginBottom:theme.spacing(10),
            }} 
        >
            <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Thành tựu đạt được')}</Typography>
            
            <Typography sx={{marginBottom:theme.spacing(4)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('KHEN THƯỞNG CẤP NHÀ NƯỚC')}</Typography>
            
            <Grid container>
                {
                    awardData?.map(( award, index)=>{
                        return(
                            <AchieveItem key={"award-"+index} award={award} index={index} currentLang={currentLang}/>
                        )
                    })
                }
            </Grid>
            <Container maxWidth='lg' ref={item}>
                <Typography ref={ref} sx={{marginBottom:theme.spacing(4), marginTop:theme.spacing(4)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('KHEN THƯỞNG BỘ, BAN NGÀNH, HỘI NGHỀ NGHIỆP TRUNG ƯƠNG')}</Typography>
                <Box className='ck-content' dangerouslySetInnerHTML={{__html:achieveData?.[0]?.["content_"+currentLang] || achieveData?.[0]?.content}}/>
                <Typography sx={{marginBottom:theme.spacing(4), marginTop:theme.spacing(4)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('KHEN THƯỞNG CỦA UBND TỈNH VÀ CÁC CƠ QUAN CẤP TỈNH')}</Typography>
                <Box className='ck-content' dangerouslySetInnerHTML={{__html:achieveData?.[1]?.["content_"+currentLang] || achieveData?.[1]?.content}}/>
                <Typography sx={{marginBottom:theme.spacing(4), marginTop:theme.spacing(4)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('KHEN THƯỞNG CÔNG TÁC ĐẢNG - ĐOÀN THỂ')}</Typography>
                <Box className='ck-content' dangerouslySetInnerHTML={{__html:achieveData?.[2]?.["content_"+currentLang] || achieveData?.[2]?.content}}/>
            </Container>
        </Container>
  )
}

const AchieveItem = ({award, index, currentLang})=>{

    const theme = useTheme()
    const item = useRef(null)
    const { ref, inView } = useInView({
        threshold: 0,
        deplay: 300
    });
    
    useEffect(() => {
        if(inView){
            if (item.current) {
                item.current.classList.add('animate__animated','animate__fadeInRight');
            }
        }
    }, [inView])
    return(
        <Grid item xs={6} md={4} ref={ref}>
            <Box 
                ref={item}
                sx={{
                    margin: theme.spacing(2), 
                    display:'flex', 
                    alignItems:"center", 
                    justifyContent:"start", 
                    flexDirection:'column',
                    height:"auto", 
                    width:"85%", 
                    aspectRatio: 1,
                    backgroundImage:'linear-gradient(0deg, #3aa03d 0%, rgba(0,212,255,0) 50%),url(/assets/images/nen.png)',
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    textAlign:"center",
                    boxShadow:'0 5px 20px rgba(34,34,34,.1)',
                    borderRadius:'10px',
                    position: 'relative'
                }}>
                    <Box sx={{padding: theme.spacing(3), height: 'calc( 100% - 100px)', marginTop:'5px'}}>
                        <img  alt='logo' src={`${process.env.REACT_APP_HOST}/read_image/${award.image}`} width="100%"/>
                    </Box>
                    <Box sx={{position:'absolute',marginBottom:'5px', left: 0, right: 0, bottom: 0, height:'100px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <Typography className='ck-content' variant='h6' fontWeight={700} color={theme.color.white} dangerouslySetInnerHTML={{__html:award["name_"+currentLang] || award.name}}/>
                        <Typography className='ck-content' variant="h7" fontWeight={500} color={theme.color.white}  dangerouslySetInnerHTML={{__html:award["content_"+currentLang] || award.content}}/>
                    </Box>
            </Box>
        </Grid>
    )
}