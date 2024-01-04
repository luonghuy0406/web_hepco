import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function CemeteryManagement({id}) {
    const theme = useTheme()
    const {t,i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/service/detail/${id}`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setData(data)
        })
        .catch(error => console.log('error', error));
    },[])
    return (
        <>
         <Container 
            maxWidth={'100%'} 
            sx={{
                padding:0,
                backgroundImage: 'url(/assets/images/bgg1.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
                backgroundSize:'30%'
            }}
        >
            <Container 
                maxWidth={'xl'} 
                sx={{
                    marginTop:theme.spacing(10),
                    // marginBottom:theme.spacing(10),
                }} 
            >
                <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{data["name_"+currentLang] || data.name}</Typography>
                <Grid container spacing={3} sx={{marginBottom:theme.spacing(4)}}>
                    <Grid item xs={0} md={6}>
                        <Box
                            sx={{
                                width:'100%',
                                height:'100%',
                                minHeight:{xs: 0, md: '400px'},
                                backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${data?.image})`,
                                backgroundPosition:'70%',
                                backgroundSize:'cover',
                                backgroundRepeat: 'no-repeat',
                                borderRadius:'10px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={{padding: theme.spacing(2), backgroundColor: '#ffffff7d',fontWeight: '500'}} className='ck-content' dangerouslySetInnerHTML={{__html:data["content_"+currentLang] || data.content}}/>
                    </Grid>
                </Grid>
            </Container>
        </Container>
        </>
    )
}
