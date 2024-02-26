import { Box, Container, Grid, Link, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import 'animate.css';
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
            <Link href={data.name || data.name_en} target='_blank'>
                <LazyLoad height={200} offset={100}>
                    <Box 
                        ref={item}
                        sx={{
                            width:'100%',
                            // height:'100%',
                            borderRadius:'10px',
                            height:'350px',
                            backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${data.image?.replace(/%2f|%2F/g,'%252F')})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover',
                            backgroundPosition:'center'
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

    const item1 = useRef(null)
    const item2 = useRef(null)
    
    // const { ref, inView } = useInView({
    //     /* Optional options */
    //     threshold: 0,
    //     deplay: 300
    // });
    
    // useEffect(() => {
    //     if(inView){
    //         if(reverse){
    //             if (item1.current) {
    //                 item1.current.classList.add('animate__animated','animate__fadeInRight')
    //             }
    //             if (item2.current) {
    //                 item2.current.classList.add('animate__animated','animate__fadeInLeft')
    //             }
    //         }else{
    //             if (item1.current) {
    //                 item1.current.classList.add('animate__animated','animate__fadeInLeft')
    //             }
    //             if (item2.current) {
    //                 item2.current.classList.add('animate__animated','animate__fadeInRight')
    //             }
    //         }
    //     }
    // }, [inView]);
    
    return(
        <Grid item xs={12} container spacing={2} sx={{marginBottom:theme.spacing(4), flexDirection: reverse ? "row-reverse" : "row"}}>
            <Grid item xs={0} md={6} >
                <Box
                    ref={item1}
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
            <Grid item xs={12} md={6} ref={item2}>
                <Box sx={{padding: theme.spacing(2)}} >
                    <Typography sx={{marginBottom:theme.spacing(3)}} variant='h5' fontWeight={700} color={theme.color.green1}>{mandate?.["name_"+currentLang] || mandate?.name}</Typography>
                    <Box className='ck-content' dangerouslySetInnerHTML={{__html:mandate?.["content_"+currentLang] || mandate?.content}}/>
                            
                </Box>
            </Grid>
        </Grid>
    )
}