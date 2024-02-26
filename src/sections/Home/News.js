import React, { useEffect, useRef, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { formatDateTime } from '../../functions';
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

const FeaturedNewstWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.color.white,
  borderRadius: '10px',
  height:'100%',
  boxShadow:'0 5px 20px rgba(34,34,34,.1)'
}));

const FeaturedNewstImage = styled(Box)(({ theme, image }) => ({
  background: `url("${image}")`,
  height: 'auto',
  aspectRatio: 1.6,
  width: '100%',
  borderRadius: '10px 10px 0 0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative'
}));
const BlogButton = styled(Box)(({ theme }) => ({
  a: {
    color: theme.color.black,
    background: 0,
    border: 'none',
    borderRadius: '25px',
    paddingRight: '25px',
    lineHeight: '30px',
    display: 'inline-block',
    transition: 'all .4s ease-in-out 0s',
    position: 'relative',
    fontSize: '16px',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover': {
      color: theme.color.red,
      '.arrow-news': {
        color: theme.color.red,
        transform: 'translateX(20%)',
      },
    },
  },
  '.arrow-news': {
    position: 'absolute',
    top: 0,
    right: 0,
    transition: 'transform 0.5s ease',
    lineHeight: '1.5rem',
  },
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
  const newsRef = useRef(null)
  // const { ref, inView } = useInView({
  //     /* Optional options */
  //     threshold: 0,
  //     deplay: 1000
  // });
  // useEffect(() => {
  //     if(inView){
  //         if (newsRef.current) {
  //             newsRef.current.classList.add('animate__animated','animate__fadeInDown');
  //         }
  //     }
  // }, [inView]);
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
                    <StyledGrid container ref={newsRef} spacing={2} sx={{justifyContent:'center', padding: theme.spacing(2)}}>
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
