import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import { Box, Grid, Typography } from "@mui/material"; 
import { useTheme } from "@emotion/react";
import LazyLoad from 'react-lazyload';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export function BannerSlide({executeScroll,banner,info}){
  
  const {t, i18n} = useTranslation()
  const currentLang = i18n.language == 'en' ? 'en' : ''
  const theme = useTheme()
  const dataBanner = banner
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
        {dataBanner.map((banner, index) => {
          return (
            <LazyLoad height={200} offset={100} key={'banner-slide'+index}>
              <Box sx={{ 
                  width: "100%", 
                  height: {xs: '300px', sm: '400px', md:'550px', lg:'calc( 100vh - 10px )'}, 
                  maxHeight:'calc( 100vh - 10px )' , 
                  backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${banner.image?.replace(/%2f|%2F/g,'%252F')})`, 
                  backgroundPosition:'center', 
                  backgroundSize:'cover',
                  backgroundRepeat:'no-repeat',
                  '&:before' : {
                    content: '""',
                    width: '100%',
                    height: '100%',
                    backgroundColor: (!banner.content_1 && !banner.content_1_en && !banner.content_2 && !banner.content_2_en) ? 'transparent':'#001d0778',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                }
                
                }}
                >
                <Grid container sx={{height:'100%', justifyContent:'center'}}>
                  
                    {
                      (banner.content_1 || banner.content_1_en) && !(banner.content_2 || banner.content_2_en) &&
                        <Grid item xs={12} container sx={{height:'100%'}} alignItems={"start"} justifyContent={"center"} direction={"column"}>
                          <Typography variant="h2" p={30} textAlign="center" color={theme.color.white} fontWeight={"700"} className="animate__animated animate__fadeInDown">
                            {banner["content_1_"+currentLang] || banner.content_1}
                          </Typography>
                        </Grid>
                    }
                    {
                      (banner.content_1 || banner.content_1_en) && (banner.content_2 || banner.content_2_en) &&
                        <Grid item xs={12} container sx={{height:'100%'}} alignItems={"center"} justifyContent={"center"} direction={"column"}>
                          <Typography variant="h3" textAlign={"center"} pl={5} color={theme.color.white} fontWeight={"700"} className="animate__animated animate__fadeInDown">
                            {banner["content_1_"+currentLang] || banner.content_1}
                          </Typography>
                          <Typography variant="h1" textAlign={"center"} pl={5} color={theme.color.red} fontFamily={"'Great Vibes', cursive"} fontWeight={"700"} className="animate__animated animate__zoomIn">
                            {banner["content_2_"+currentLang] || banner.content_2}
                          </Typography>
                        </Grid>
                    }
                </Grid>
              </Box>
            </LazyLoad>
          );
        })}
      </Carousel>
      <Info info={info}/>
    </Box>
  );
};

const Info = ({info}) =>{
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
  }, [inView])
  useEffect(() => {
    const timer = setInterval(() => {
      if (years < info[0].data) {
        setYears(years + 1);
      } else {
        clearInterval(timer);
      }
    }, info[0].data/1000);

    return () => {
      clearInterval(timer);
    };
  }, [years])
  useEffect(() => {
    const timer = setInterval(() => {
      if (projects < info[1].data) {
        setProjects(projects + 1);
      } else {
        clearInterval(timer);
      }
    }, info[1].data/1000);

    return () => {
      clearInterval(timer);
    };
  }, [projects])
  useEffect(() => {
    const timer = setInterval(() => {
      if (customers < info[2].data) {
        setCustomers(customers + 1);
      } else {
        clearInterval(timer);
      }
    }, info[2].data/1000);

    return () => {
      clearInterval(timer);
    };
  }, [customers])
  useEffect(() => {
    const timer = setInterval(() => {
      if (members < info[3].data) {
        setMembers(members + 1);
      } else {
        clearInterval(timer);
      }
    }, info[3].data/1000);

    return () => {
      clearInterval(timer);
    };
  }, [members])
  return(
    <Grid ref={ref} container sx={{zIndex:1, alignItems:'center', justifyContent:'center', position: 'absolute', bottom: '0', left: '0', right: '0', padding: theme.spacing(2)}} direction={"row"}>
          <Grid item xs={3}>
              <Typography sx={{transition:"ease-in 0.1s", fontSize: {xs: '1.5rem', md:'2rem'}}} variant="h4"  fontWeight={700} color={theme.color.white} textAlign={"center"}>
              {years}+
              </Typography>
              <Typography variant="h6" fontWeight={700} sx={{transition:"ease-in 0.1s", fontSize: {xs: '0.8rem', md:'1.5rem'}}} color={theme.color.white} textAlign={"center"}>
                  {t("Năm kinh nghiệm")}
              </Typography>
          </Grid>
          <Grid item xs={3}>
              <Typography sx={{transition:"ease-in 0.1s", fontSize: {xs: '1.5rem', md:'2rem'}}} variant="h4"  fontWeight={700} color={theme.color.white} textAlign={"center"}>
                  {projects}+
              </Typography>
              <Typography variant="h6" fontWeight={700} sx={{transition:"ease-in 0.1s", fontSize: {xs: '0.8rem', md:'1.5rem'}}} color={theme.color.white} textAlign={"center"}>
                  {t("Dự án")} 
              </Typography>
          </Grid>
          <Grid item xs={3}>
              <Typography sx={{transition:"ease-in 0.1s", fontSize: {xs: '1.5rem', md:'2rem'}}} variant="h4"  fontWeight={700} color={theme.color.white} textAlign={"center"}>
                  {customers}+
              </Typography>
              <Typography variant="h6" fontWeight={700} sx={{transition:"ease-in 0.1s", fontSize: {xs: '0.8rem', md:'1.5rem'}}} color={theme.color.white} textAlign={"center"}>
                  {t("Khách hàng")}
              </Typography>
          </Grid>
          <Grid item xs={3}>
              <Typography sx={{transition:"ease-in 0.1s", fontSize: {xs: '1.5rem', md:'2rem'}}} variant="h4"  fontWeight={700} color={theme.color.white} textAlign={"center"}>
                  {members}+
              </Typography>
              <Typography variant="h6" fontWeight={700} sx={{transition:"ease-in 0.1s", fontSize: {xs: '0.8rem', md:'1.5rem'}}} color={theme.color.white} textAlign={"center"}>
                  {t("Nhân sự")}
              </Typography>
          </Grid>
      </Grid>
  )
}