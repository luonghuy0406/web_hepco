import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import { Box, Grid, Typography, styled } from "@mui/material"; 
import { useTheme } from "@emotion/react";

import LazyLoad from 'react-lazyload';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
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
  
  const {t} = useTranslation()
  const theme = useTheme()
  return (
    <Box sx={{position:"relative"}}> 
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay
        pauseOnHover={false}
        autoPlaySpeed={10000}
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
        {images.slice(0, 5).map((image, index) => {
          return (
            <LazyLoad height={200} offset={100}>
              <Box className='banner-slide-image' sx={{ 
                  width: "100%", 
                  height: {xs: '300px', sm: '400px', md:'550px', lg:'calc( 100vh - 10px )'}, 
                  maxHeight:'calc( 100vh - 10px )' , 
                  backgroundImage: `url(${image})`, 
                  backgroundPosition:'center', 
                  backgroundSize:'cover',
                  backgroundRepeat:'no-repeat'}}
                >
                <Grid container sx={{height:'100%', justifyContent:'center'}}>
                  
                    {
                      index == 0 ? 
                      <Grid item xs={12} container sx={{height:'100%'}} alignItems={"start"} justifyContent={"center"} direction={"column"}>
                        <Typography variant="h2" p={30} textAlign="center" color={theme.color.white} fontWeight={"700"} className="animate__animated animate__fadeInDown">
                          CÔNG TY CỔ PHẦN ĐÔ THỊ VÀ MÔI TRƯỜNG CÔNG CỘNG HUẾ
                        </Typography>
                      </Grid>
                      :
                      <Grid item xs={7} container sx={{height:'100%'}} alignItems={"start"} justifyContent={"center"} direction={"column"}>
                        <Typography variant="h3" pl={5} color={theme.color.white} fontWeight={"700"} className="animate__animated animate__fadeInDown">
                          Find Professional
                        </Typography>
                        <Typography variant="h1" pl={5} color={theme.color.white} fontWeight={"700"} className="animate__animated animate__zoomIn">
                          Hepco Huế
                        </Typography>
                      </Grid>
                    }
                </Grid>
              </Box>
            </LazyLoad>
          );
        })}
      </Carousel>
      <Info/>
    </Box>
  );
};

const Info = () =>{
  const {t} = useTranslation()
  const theme = useTheme()
  const [years, setYears] = useState(0)
  const [projects, setProjects] = useState(0)
  const [customers, setCustomers] = useState(0)
  const [members, setMembers] = useState(0)
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    deplay: 100
  });
  useEffect(() => {
    setYears(0)
    setProjects(0)
    setCustomers(0)
    setMembers(0)
  }, [inView]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (years < 10) {
        setYears(years + 1);
      } else {
        clearInterval(timer);
      }
    }, 10/1000);

    return () => {
      clearInterval(timer);
    };
  }, [years]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (projects < 500) {
        setProjects(projects + 1);
      } else {
        clearInterval(timer);
      }
    }, 500/1000);

    return () => {
      clearInterval(timer);
    };
  }, [projects]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (customers < 100) {
        setCustomers(customers + 1);
      } else {
        clearInterval(timer);
      }
    }, 100/1000);

    return () => {
      clearInterval(timer);
    };
  }, [customers]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (members < 200) {
        setMembers(members + 1);
      } else {
        clearInterval(timer);
      }
    }, 200/1000);

    return () => {
      clearInterval(timer);
    };
  }, [members]);
  return(
    <Grid ref={ref} container sx={{zIndex:1, alignItems:'center', justifyContent:'center', position: 'absolute', bottom: '0', left: '0', right: '0', padding: theme.spacing(2)}} direction={"row"}>
          <Grid item xs={3}>
              <Typography sx={{transition:"ease-in 0.1s"}} variant="h4"  fontWeight={700} color={theme.color.white} textAlign={"center"}>
              {years}+
              </Typography>
              <Typography variant="h6" fontWeight={700} color={theme.color.white} textAlign={"center"}>
                  Năm kinh nghiệm
              </Typography>
          </Grid>
          <Grid item xs={3}>
              <Typography sx={{transition:"ease-in 0.1s"}} variant="h4"  fontWeight={700} color={theme.color.white} textAlign={"center"}>
                  {projects}+
              </Typography>
              <Typography variant="h6" fontWeight={700} color={theme.color.white} textAlign={"center"}>
                  Dự án 
              </Typography>
          </Grid>
          <Grid item xs={3}>
              <Typography sx={{transition:"ease-in 0.1s"}} variant="h4"  fontWeight={700} color={theme.color.white} textAlign={"center"}>
                  {customers}+
              </Typography>
              <Typography variant="h6" fontWeight={700} color={theme.color.white} textAlign={"center"}>
                  Khách hàng
              </Typography>
          </Grid>
          <Grid item xs={3}>
              <Typography sx={{transition:"ease-in 0.1s"}} variant="h4"  fontWeight={700} color={theme.color.white} textAlign={"center"}>
                  {members}+
              </Typography>
              <Typography variant="h6" fontWeight={700} color={theme.color.white} textAlign={"center"}>
                  Nhân sự
              </Typography>
          </Grid>
      </Grid>
  )
}