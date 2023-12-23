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

export default function RelatedShareholder({data}) {
    const theme = useTheme()
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [shareholderRelated,setShareholderRelated] = useState([])
    useEffect(()=>{
        if(data[0]?.type_id){
            fetch(`${process.env.REACT_APP_HOST}/shareholder/list?c=5&type_id=${data[0]?.type_id}&title=&p=0`)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result).result
                setShareholderRelated(data.data)
            })
            .catch(error => console.log('error', error));
        }
    },[data])
    return (
        <>
            <Typography sx={{marginBottom:theme.spacing(3)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Tin liên quan')}</Typography>
            {
                shareholderRelated.map((related)=>{
                    const normalizedTitle = (related?.["name_"+currentLang] || related?.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                    return(
                        <Box key={'shareholder-related'+related.id_shareholder} sx={{paddingBottom: theme.spacing(3)}}>
                            <Link to={`/${t('codong')}/${normalizedTitle}.${related.id_shareholder}`}>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                        <Card 
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                // aspectRatio: '1',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                position:'relative'
                                            }}
                                        >
                                                <CardMedia 
                                                    component="img"
                                                    alt={related?.["name_"+currentLang] || related?.name}
                                                    height="auto"
                                                    image={`${process.env.REACT_APP_HOST}/read_image/${related.image}`}
                                                    sx={{flex: 1,
                                                    objectFit: 'cover'}}
                                                />
                                        </Card>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Box sx={{marginBottom:'5px',overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
                                            <Typography fontWeight={600}>{related?.["name_"+currentLang] || related?.name}</Typography>
                                        </Box>
                                        <Box sx={{display:'flex'}}>
                                            <AccessTimeFilledIcon fontSize={'13px'} color="disabled"/>
                                            <Typography sx={{marginLeft:'5px'}} fontWeight={600} fontSize={'13px'} color={theme.color.gray1}>{formatDateTime(related.cre_date,'%d-%m-%Y')}</Typography>
                                        </Box>
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
