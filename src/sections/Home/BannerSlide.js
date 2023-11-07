import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import { Box, Grid, Typography, styled } from "@mui/material"; 
import { useTheme } from "@emotion/react";

import LazyLoad from 'react-lazyload';
const images = [
  "./assets/images/banner1.jpeg",
  "./assets/images/banner2.jpeg",
  "./assets/images/banner3.jpeg",
  "./assets/images/banner4.jpeg",
  "./assets/images/banner5.jpeg",
];


const IconNext = styled('div')(({ theme }) => ({
  width: '90px',
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.color.green1,
  borderRadius: '50%',
  position: 'absolute',
  bottom: '-45px'
}));

export function BannerSlide({executeScroll}){
  const theme = useTheme()
  return (
    <Box sx={{position:"relative"}}> 
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        // autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container animate__animated animate__fadeInRight"
        customTransition="all 0.5s linear"
        infinite
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        slidesToSlide={1}
        swipeable
      >
        {images.slice(0, 5).map(image => {
          return (
            <LazyLoad height={200} offset={100}>
              <Box sx={{ width: "100%", height: {xs: '300px', sm: '400px', md:'550px', lg:'700px'}, maxHeight:'700px' , backgroundImage: `url(${image})`, backgroundPosition:'center', backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                <Grid container sx={{height:'100%'}}>
                  <Grid item xs={7} container sx={{height:'100%'}} alignItems={"start"} justifyContent={"center"} direction={"column"}>
                      <Typography variant="h3" pl={5} color={theme.color.white} fontWeight={"700"} className="animate__animated animate__fadeInDown">
                        Find Professional
                      </Typography>
                      <Typography variant="h1" pl={5} color={theme.color.white} fontWeight={"700"} className="animate__animated animate__zoomIn">
                        Hepco Huế
                      </Typography>
                  </Grid>
                  {/* <Grid item xs={5} container mt={5} sx={{height:'100%'}} alignItems={"flex-end"} justifyContent={"center"}className="animate__animated animate__fadeIn">
                      <Image src='https://rstheme.com/products/wordpress/planteo/wp-content/uploads/revslider/main-home/Layer-6241.png' style={{width:'100%', height:'auto'}}/>
                  </Grid> */}
                </Grid>
              </Box>
            </LazyLoad>
          );
        })}
      </Carousel>
      {/* <Box sx={{width: '100%', position: 'absolute', display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
        <IconNext className="img-bounce animate__animated animate__zoomIn" onClick={executeScroll}>
            <Image src='https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/leaf.png' style={{width:'25px', height:'auto'}}/>
        </IconNext>
      </Box> */}
    </Box>
  );
};

