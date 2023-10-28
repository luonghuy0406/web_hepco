import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton } from "@mui/material";
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

const Home = () => {
  return (
    <Box>
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
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
              
            </Box>
          );
        })}
      </Carousel>
      <Box>
        <IconButton>
            test
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;
