import { Box, Container, Typography, Grid, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import 'animate.css';

export default function AlleyLetter() {
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const theme = useTheme()
    const alleyLetter1 = useRef(null)
    const alleyLetter2 = useRef(null)
    const [data,setData] = useState(null)
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        deplay: 300
    });
    
    useEffect(() => {
        if(inView){
            if (alleyLetter1.current) {
                alleyLetter1.current.classList.add('animate__animated','animate__fadeInLeft');
            }
            if (alleyLetter2.current) {
                alleyLetter2.current.classList.add('animate__animated','animate__fadeInRight');
            }
        }
    }, [inView])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/sharedtable/detail/1`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setData(data)
        })
        .catch(error => console.log('error', error));
    },[])
    if(!data){
        return <></>
    }
    return (
        <Container 
            maxWidth='100%' 
            sx={{
                padding:0,
                backgroundImage: 'url(/assets/images/bgg7.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center'
            }}
        >
            <Container 
                maxWidth='xl' 
                sx={{
                    marginTop:theme.spacing(10),
                }}>
                <Grid container spacing={10}>
                    <Grid ref={alleyLetter1} item xs={0}  md={5} sm={0} lg={5}>
                        <Box
                            sx={{
                                width:'100%',
                                height:'100%',
                                // backgroundImage: data.image? `url(${process.env.REACT_APP_HOST}/read_image/${data.image})` : 'url(/assets/images/thungo.jpeg)',
                                backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                backgroundPosition:'70%',
                                backgroundSize:'cover',
                                backgroundRepeat: 'no-repeat',
                                borderRadius:'10px'
                            }}
                        >

                        </Box>
                    </Grid>
                    <Grid ref={alleyLetter2} item xs={12} md={7} sm={12} lg={7}>
                        <Box>
                            <Typography ref={ref} fontWeight={500}  variant="h2" fontFamily={"'Great Vibes', cursive"} color={theme.color.green1} textAlign={"center"}>{t('Thư ngỏ')}</Typography>
                            <br/>
                            <Box className='ck-content' sx={{ backgroundColor: '#ffffff7d',fontWeight: '500'}} dangerouslySetInnerHTML={{__html:data?.["content_"+currentLang] || data?.content}}/>
                            
                        </Box>
                    </Grid>
                </Grid>
                
            </Container>
        </Container>
    )
}
