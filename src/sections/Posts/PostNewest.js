import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Card, CardMedia, Grid, Typography, useTheme } from '@mui/material'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { formatDateTime } from '../../functions'

library.add(fas, faFontAwesome, faPlay)


export default function PostNewest({typePost, categories,type}) {
    const theme = useTheme()
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [post, setNewest] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            fetch(`${process.env.REACT_APP_HOST}/${typePost}/list?c=5&type_id=0&title=&p=0&lang=${currentLang || 'vi'}`)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result).result
                setNewest(data.data)
            })
            .catch(error => console.log('error', error));
        },2000)
    },[])
  return (
    <>
        <Typography
             sx={{marginBottom:theme.spacing(3)}} 
             variant='h5' 
             textAlign={"center"} 
             fontWeight={700} 
             color={theme.color.green1}
        >
            {t('Tin tức mới nhất')}
        </Typography>
        {
            post.map((newest)=>{
                const normalizedTitle = (newest["name_"+currentLang] || newest.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
                return(
                    <Box key={'post-newest'+newest['id_'+typePost]} sx={{paddingBottom: theme.spacing(3)}}>
                        <Link to={`/${type[typePost].path}/${normalizedTitle}.${newest['id_'+typePost]}`}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Card 
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            height:'60px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            position:'relative'
                                        }}
                                    >
                                            <CardMedia 
                                                component="img"
                                                alt={newest["name_"+currentLang] || newest.name}
                                                height="auto"
                                                image={`${process.env.REACT_APP_HOST}/read_image/${newest.image}`}
                                                sx={{
                                                    flex: 1,
                                                    objectFit: 'cover'
                                                }}
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null; // prevents looping
                                                    currentTarget.src='/assets/no_image.jpeg'
                                                }}
                                            />
                                    </Card>
                                </Grid>
                                <Grid item xs={9}>
                                    <Box 
                                        sx={{
                                            marginBottom:'5px',
                                            overflow: 'hidden', 
                                            display: '-webkit-box', 
                                            WebkitLineClamp: 2, 
                                            WebkitBoxOrient: 'vertical'
                                        }}
                                    >
                                        <Typography fontWeight={600}>{newest["name_"+currentLang] || newest.name}</Typography>
                                    </Box>
                                    
                                    <Box sx={{display:'flex'}}>
                                        <AccessTimeFilledIcon fontSize={'13px'} color="disabled"/>
                                        <Typography 
                                            sx={{marginLeft:'5px'}} 
                                            fontWeight={600} 
                                            fontSize={'13px'} 
                                            color={theme.color.gray1}
                                        >
                                            {formatDateTime(newest.cre_date,'%d-%m-%Y')}
                                        </Typography>
                                    </Box>
                                    <Typography 
                                        fontWeight={600} 
                                        fontSize={'13px'} 
                                        color={theme.color.gray1}
                                    >
                                        {categories?.[newest?.type_id]?.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Box>
                )
            })
        }
    </>
  )
}
