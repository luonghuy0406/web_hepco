import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import { Image } from 'semantic-ui-react';
import LazyLoad from 'react-lazyload';

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
  fontSize:'42px',
  '&:after':{
    content: "''",
    border: 0,
    width: '70px',
    height: '5px',
    background: theme.color.green1,
    display: 'block',
    marginTop: '5px',
    position: 'absolute',
    left: '50%',
    right: '50%',
    transform:'translateX(-50%) translateY(50%)',
}
}));


export const Customers = () => {
  const theme = useTheme()
  const {t} = useTranslation()
  return (
    <StyledContainer maxWidth="xl">
      <StyledTypography variant="h4" color={theme.color.black} fontWeight="bold">
          {t('Đối tác & Khách hàng')}
      </StyledTypography>
      <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay
          autoPlaySpeed={3000}
          customTransition="all 0.5s linear"
          centerMode={true}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
              desktop: {
                  breakpoint: {
                      max: 3000,
                      min: 1024
                  },
                  items: 6,
                  partialVisibilityGutter: 40
              },
              mobile: {
                  breakpoint: {
                      max: 464,
                      min: 0
                  },
                  items: 5,
                  partialVisibilityGutter: 30
              },
              tablet: {
                  breakpoint: {
                      max: 1024,
                      min: 464
                  },
                  items: 5,
                  partialVisibilityGutter: 30
              }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
          >
            <LazyLoad height={200} offset={100}>
              <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Image  alt='logo' src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="100%"/>
              </Box>
            </LazyLoad>
            <LazyLoad height={200} offset={100}>
              <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Image  alt='logo' src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="100%"/>
              </Box>
            </LazyLoad><LazyLoad height={200} offset={100}>
              <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Image  alt='logo' src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="100%"/>
              </Box>
            </LazyLoad><LazyLoad height={200} offset={100}>
              <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Image  alt='logo' src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="100%"/>
              </Box>
            </LazyLoad><LazyLoad height={200} offset={100}>
              <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Image  alt='logo' src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="100%"/>
              </Box>
            </LazyLoad><LazyLoad height={200} offset={100}>
              <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Image  alt='logo' src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="100%"/>
              </Box>
            </LazyLoad><LazyLoad height={200} offset={100}>
              <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Image  alt='logo' src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="100%"/>
              </Box>
            </LazyLoad><LazyLoad height={200} offset={100}>
              <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Image  alt='logo' src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="100%"/>
              </Box>
            </LazyLoad><LazyLoad height={200} offset={100}>
              <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Image  alt='logo' src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="100%"/>
              </Box>
            </LazyLoad><LazyLoad height={200} offset={100}>
              <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Image  alt='logo' src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" width="100%"/>
              </Box>
            </LazyLoad>
      </Carousel>
    </StyledContainer>
)}