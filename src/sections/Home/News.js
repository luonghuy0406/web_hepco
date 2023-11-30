import React, { useEffect, useRef } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { useInView } from 'react-intersection-observer';

library.add(fas, faFontAwesome, faPlay)

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(10),
  paddingLeft: 0,
  paddingRight: 0,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  width: '100%',
  paddingBottom: theme.spacing(2),
  textAlign: 'center',
  // fontSize:'42px',
  // '&:after':{
  //   content: "''",
  //   border: 0,
  //   width: '70px',
  //   height: '5px',
  //   background: theme.color.green1,
  //   display: 'block',
  //   marginTop: '5px',
  //   position: 'absolute',
  //   left: '50%',
  //   right: '50%',
  //   transform:'translateX(-50%) translateY(50%)',
// }
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(4),
}));

const FeaturedNewstWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.color.white,
  // boxShadow: '0 0 15px #eee',
  borderRadius: '10px'
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
  const projects = [1, 2, 3];
  const theme = useTheme()
  const {t} = useTranslation()


  const newsRef = useRef(null)
  const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0,
      deplay: 1000
  });
  useEffect(() => {
      if(inView){
          if (newsRef.current) {
              newsRef.current.classList.add('animate__animated','animate__fadeInDown');
          }
      }
  }, [inView]);

  
  return (
    <Container maxWidth='100%' sx={{py:theme.spacing(5), mb:theme.spacing(10),px:'0 !important'}}>
      <Box sx={{
          py:theme.spacing(5),
          mb: theme.spacing(15),
          backgroundImage:"url(https://html.themexriver.com/it-firm/images/background/pattern-14.png) !important",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          position:"relative",
          height: '600px'
          }}>
            <StyledContainer sx={{position:"absolute", bottom: "-30%", left:"50%", transform:"translateX(-50%) translateY(0%)"}}>
              <Grid container >
                    <StyledTypography ref={ref} variant="h4" color={theme.color.black} fontWeight="bold" pb={theme.spacing(5)}>
                        {t('Tin tức nổi bật')}
                    </StyledTypography>
                    <StyledGrid container spacing={2} ref={newsRef}>
                    {projects.map((id) => (
                        <Grid key={id} item xs={4} sm={4} md={4}>
                          <Link to="#">
                            <FeaturedNewstWrap>
                                <LazyLoad height={200} offset={100}>
                                  <FeaturedNewstImage image={"./assets/images/1.jpg"}>
                                    <Box
                                      sx={{
                                        // width: '20%',
                                        px: theme.spacing(4),
                                        py:theme.spacing(1),
                                        background: theme.color.green1,
                                        // aspectRatio: '0.9',
                                        position: 'absolute',
                                        borderRadius: '4px',
                                        textAlign:'center',
                                        bottom: '0',
                                        left: '50%',
                                        transform: 'translate(-50%, 20px)',
                                        boxShadow:'0 5px 20px rgba(34,34,34,.1)'
                                      }}
                                    >
                                      <Typography 
                                        className='news-date' 
                                        fontFamily={theme.typography.MuktaMahee}
                                        color={theme.color.white}
                                        fontWeight={700}
                                      >20-10-2023</Typography>
                                    </Box>
                                  </FeaturedNewstImage>
                                </LazyLoad>
                                <Box
                                  sx={{padding:theme.spacing(4), boxShadow:'0 5px 20px rgba(34,34,34,.1)'}}
                                >
                                  <Grid container spacing={1}>
                                      <Grid item xs={12} pb={1}>
                                        <Typography variant="h6" color={theme.color.red} fontWeight={700}>Tên bài post</Typography>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <Box sx={{display:'flex'}}>
                                          <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>Tác giả</Typography>
                                          <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>-</Typography>
                                          <Typography color={theme.color.gray1} fontWeight={700} >Phân loại tin</Typography>
                                        </Box>
                                      </Grid>
                                      <Grid item xs={12}>
                                        <Box className='ck-content' sx={{overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                                          <Typography fontWeight={500}>Nội dung hiển thị tối đa 3 dòng Duis eleifend molestie leo, at mollis eros rutrum sit amet. Nam venenatis enim at magna euismod congue. Fusce semper malesuada purus. Duis eleifend molestie leo, at mollis eros rutrum sit amet. Nam venenatis enim at magna euismod congue. Fusce semper malesuada purus. Duis eleifend molestie leo, at mollis eros rutrum sit amet. Nam venenatis enim at magna euismod congue. Fusce semper malesuada purus.</Typography>
                                        </Box>
                                      </Grid>
                                      <Grid item>
                                        <BlogButton>
                                          <Link to="#">
                                            <Typography fontWeight={700} lineHeight={'1.5rem'}>Read More</Typography>
                                            <Typography sx={{display:'inline', pl: '5px'}} className='arrow-news'><FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></Typography>
                                          </Link>
                                        </BlogButton>
                                      </Grid>
                                  </Grid>
                                </Box>
                            </FeaturedNewstWrap>
                          </Link>
                        </Grid>
                        ))}
                    </StyledGrid>
              </Grid>
            </StyledContainer>
        </Box>
    </Container>
)}
