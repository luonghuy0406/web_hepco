import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faPlay, fas } from '@fortawesome/free-solid-svg-icons';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PostContentItem from '../Posts/PostContentItem';

library.add(fas, faFontAwesome, faPlay)

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingLeft: 0,
  paddingRight: 0,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  width: '100%',
  paddingBottom: theme.spacing(2),
  textAlign: 'center',
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(4),
}));


export const News = () => {
  const theme = useTheme()
  const {t} = useTranslation()
  const [news, setNews] = useState([])
  const categories = {
    '0': {name: t('Tất cả tin'), value:'0'},
    '1': {name: t('Hoạt động công ty'), value:'1'},
    '2': {name: t('Đảng Đoàn thể'), value:'2'},
    '3': {name: t('Pháp luật môi trường'), value:'3'},
    '4': {name: t('Tin tức khác'), value:'4'},
    '5': {name: t('Thông báo'), value:'5'},
    '6': {name: t('Báo cáo'), value:'6'},
    '7': {name: t('Dự án đầu tư'), value:'7'},
    '8': {name: t('Hợp tác trong nước'), value:'8'},
    '9': {name: t('Hợp tác nước ngoài'), value:'9'}
}
const type = {
    'post' : {path: t('tintuc'), name : t("Tin tức")},
    'project' : {path: t('duan'), name : t("Dự án")},
    'shareholder' : {path: t('codong'), name : t("Cổ đông")},
} 
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_HOST}/post/highlight`)
    .then(response => response.text())
    .then(result => {
        const data = JSON.parse(result).data
        setNews(data.slice(0,3))
    })
    .catch(error => console.log('error', error));
  },[])
  
  return (
    <Container maxWidth='100%' sx={{py:theme.spacing(5), mb:theme.spacing(5),px:'0 !important'}}>
      <Box sx={{
          py:theme.spacing(3),
          backgroundImage:"url(/assets/images/bgg5.png) !important",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          position:"relative"
          }}>
            <StyledContainer>
              <Grid container >
                    <StyledTypography variant="h4" color={theme.color.black} fontWeight="bold" pb={theme.spacing(5)}>
                        {t('Tin tức nổi bật')}
                    </StyledTypography>
                    <StyledGrid container className="wow animate__animated animate__fadeInDown"spacing={2} sx={{justifyContent:'center', padding: theme.spacing(2)}}>
                    {news.map((data) => {
                      return(
                          <PostContentItem key={data.id_post} post={data} categories={categories} typePost={'post'} type={type}/>
                      )
                    })}
                    </StyledGrid>
              </Grid>
            </StyledContainer>
        </Box>
    </Container>
)}
