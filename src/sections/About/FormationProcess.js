import React, { useEffect, useState } from 'react'
import { Container, Typography, useTheme } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';
import StarIcon from '@mui/icons-material/Star';

export default function FormationProcess() {
    const theme = useTheme()
        const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [data, setData] = useState([])
    
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/history/list`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setData(data.data)
        })
        .catch(error => console.log('error', error));
    },[])

    if(!data) return <></>

    return (
        <Container 
            maxWidth={'100%'} 
            sx={{
                backgroundImage: `url(/assets/images/bg2.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'left center'
            }}
        >
            <Container maxWidth={'xl'} sx={{marginTop:theme.spacing(15),marginBottom:theme.spacing(10)}}>
                <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Quá trình hình thành và phát triển')}</Typography>
                <VerticalTimeline lineColor="var(--green4)">
                    {
                        data.reverse().map((dt, index)=>{
                            return(
                                <VerticalTimelineElement
                                    key={dt.time}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ borderRadius:'5px', border: index%2==0 ? '2px solid var(--green4)' : '2px solid var(--red)', color: '#000',boxShadow:'0 3px 12px #ddd' }}
                                    contentArrowStyle={{ borderRight: '7px solid  var(--green4)' }}
                                    iconStyle={{ background: index%2==0 ?'var(--green4)':'var(--red)', color: '#fff' }}
                                    icon={<StarIcon />}
                                    date={dt.time}
                                >
                                    <Typography variant="h5" textAlign={"center"} fontWeight={700} color={theme.color.green1} className="vertical-timeline-element-title">{dt.time}</Typography>
                                    <Typography fontWeight={500} color={theme.color.black}>
                                        {dt?.["content_"+currentLang] || dt?.content}
                                    </Typography>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </Container>
        </Container>
    )
}
