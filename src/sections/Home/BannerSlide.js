import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import { Box, Grid, Typography, styled } from "@mui/material"; 
import { useTheme } from "@emotion/react";
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
                <Grid item xs={5} container mt={5} sx={{height:'100%'}} alignItems={"flex-end"} justifyContent={"center"}className="animate__animated animate__fadeIn">
                    <Image src='https://rstheme.com/products/wordpress/planteo/wp-content/uploads/revslider/main-home/Layer-6241.png' style={{width:'100%', height:'auto'}}/>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Carousel>
      <Box sx={{width: '100%', position: 'absolute', display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
        <IconNext className="img-bounce animate__animated animate__zoomIn" onClick={executeScroll}>
            <Image src='https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/leaf.png' style={{width:'25px', height:'auto'}}/>
        </IconNext>
      </Box>
    </Box>
  );
};

