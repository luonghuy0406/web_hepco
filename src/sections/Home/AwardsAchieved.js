import React, { useEffect, useRef, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import { useInView } from 'react-intersection-observer';

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
//   fontSize:'42px',
  '&:after':{
    content: "''",
    border: 0,
    width: '70px',
    height: '5px',
    background: theme.color.red,
    display: 'block',
    marginTop: '5px',
    position: 'absolute',
    left: '50%',
    right: '50%',
    transform:'translateX(-50%) translateY(50%)',
}
}));


export const AdwardsAchieved = () => {
  const theme = useTheme()
  
  const {t, i18n} = useTranslation()
  const currentLang = i18n.language == 'en' ? 'en' : ''
  const [achieveData,setAchieveData] = useState([])
  const awardData = achieveData?.slice(3) || []
  
  const awardsRef = useRef(null)
  const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0,
      deplay: 1000
  });

  useEffect(()=>{
      fetch(`${process.env.REACT_APP_HOST}/achieve/list`)
      .then(response => response.text())
      .then(result => {
          const data = JSON.parse(result).result
          setAchieveData(data)
      })
      .catch(error => console.log('error', error));
  },[])
  useEffect(() => {
      if(inView){
          if (awardsRef.current) {
              awardsRef.current.classList.add('animate__animated','animate__fadeInDown');
          }
      }
  }, [inView]);
  return (
    <StyledContainer maxWidth="xl">
      <StyledTypography ref={ref} variant="h4" color={theme.color.black} fontWeight="bold">
          {t('Thành tích & Khen thưởng')}
      </StyledTypography>
      <Box ref={awardsRef}>
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay
            autoPlaySpeed={3500}
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
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
                {
                     awardData?.map(( award, index)=>{
                        return (
                            <Box 
                                key={"home_award_"+index}
                                sx={{
                                    margin: theme.spacing(2), 
                                    display:'flex', 
                                    alignItems:"center", 
                                    justifyContent:"start", 
                                    flexDirection:'column',
                                    height:"auto", 
                                    width:"85%", 
                                    aspectRatio: 1,
                                    backgroundImage:'linear-gradient(0deg, #3aa03d 0%, rgba(0,212,255,0) 50%),url(/assets/images/nen.png)',
                                    backgroundPosition:'center',
                                    backgroundSize:'cover',
                                    backgroundRepeat:'no-repeat',
                                    textAlign:"center",
                                    boxShadow:'0 5px 20px rgba(34,34,34,.1)',
                                    borderRadius:'10px',
                                    position: 'relative'
                                }}>
                                    <Box sx={{padding: theme.spacing(3), height: 'calc( 100% - 80px)', marginTop:'5px'}}>
                                        <img  alt='logo' src={`${process.env.REACT_APP_HOST}/read_image/${award.image}`} width="100%"/>
                                    </Box>
                                    <Box sx={{position:'absolute',marginBottom:'2px', left: 0, right: 0, bottom: 0, height:'80px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                        <Typography className='ck-content' fontWeight={700} color={theme.color.white} dangerouslySetInnerHTML={{__html:award["name_"+currentLang] || award.name}}/>
                                        <Typography className='ck-content' fontSize="14px" fontWeight={500} color={theme.color.white}  dangerouslySetInnerHTML={{__html:award["content_"+currentLang] || award.content}}/>
                                    </Box>
                            </Box>
                        )
                    })
                }
                
        </Carousel>
      </Box>
    </StyledContainer>
)}