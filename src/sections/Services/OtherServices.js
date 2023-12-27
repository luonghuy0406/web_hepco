import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function OtherServices({id}) {
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

    const [dataChild,setDataChild] = useState(null)
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/sharedtable/father/21`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setDataChild(data)
        })
        .catch(error => console.log('error', error));
    },[])
    return (
        <Container 
            maxWidth={'100%'} 
            sx={{
                backgroundImage: `url(/assets/images/bg2.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'left bottom'
            }}
        >
            <Container 
                maxWidth={'xl'} 
                sx={{
                    marginTop:theme.spacing(10),
                    marginBottom:theme.spacing(10),
                }} 
            >
                <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{data["name_"+currentLang] || data.name}</Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Box sx={{padding: theme.spacing(2)}} className='ck-content' dangerouslySetInnerHTML={{__html:data["content_"+currentLang] || data.content}}/>
                    </Grid>
                    {
                        dataChild?.map((dataC,index)=>{
                            return(
                                <Grid sx={{display:"flex", flexDirection: index %2==0 ? 'row' : 'row-reverse'}} key={"khac"+index} item container spacing={2} xs={12} md={6}>
                                    <Grid item xs={6} >
                                        <Typography variant="h5" sx={{marginBottom:theme.spacing(2)}} fontWeight={700} color={index %2==0 ? theme.color.green1 : theme.color.red}>
                                            {dataC["name_"+currentLang] || dataC.name}
                                        </Typography>
                                        <Typography className='ck-content' sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'} dangerouslySetInnerHTML={{__html:dataC["content_"+currentLang] || dataC.content}}/>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Box
                                            sx={{
                                                width:'100%',
                                                minHeight:'200px',                                    
                                                backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${dataC.image})`,
                                                backgroundPosition:'center',
                                                backgroundSize:'cover',
                                                backgroundRepeat: 'no-repeat',
                                                borderRadius:'0 20px'
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Container>
    )
}
