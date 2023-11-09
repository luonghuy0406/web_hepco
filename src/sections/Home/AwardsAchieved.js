import React, { useEffect, useRef } from 'react';
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


export const AdwardsAchieved = () => {
  const theme = useTheme()
  const {t} = useTranslation()

  const awardsRef = useRef(null)
  const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0,
      deplay: 1000
  });
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
                    items: 4,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 3,
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
                    [1,2,3,4,5,6,7,8,9].map((index)=>{
                        return (
                            // <Box 
                            //     key={index}
                            //         sx={{
                            //             margin: theme.spacing(3), 
                            //             padding: theme.spacing(2),
                            //             display:'flex', 
                            //             alignItems:"center", 
                            //             justifyContent:"end", 
                            //             flexDirection:'column',
                            //             height:"auto", 
                            //             // width:"100%", 
                            //             aspectRatio: 1,
                            //             backgroundImage:'url(https://png.pngtree.com/element_our/png_detail/20181106/golden-lotus-flower-png_229208.jpg)',
                            //             backgroundPosition:'center',
                            //             backgroundSize:'cover',
                            //             backgroundRepeat:'no-repeat',
                            //             textAlign:"center",
                            //             boxShadow:'0 5px 20px rgba(34,34,34,.1)'
                            //         }}>
                            //             <Image  alt='logo' src="https://icdn.dantri.com.vn/thumb_w/680/2022/06/16/huan-chuong-lao-dong-1655346540689.png" width="150px"/>
                            //             <Typography pt={2} variant="h6" fontWeight={700} color={theme.color.black} fontFamily={theme.typography.MuktaMahee}>TÊN HUÂN CHƯƠNG</Typography>
                            //             <Typography variant="h6" fontWeight={700} color={theme.color.black} fontFamily={theme.typography.MuktaMahee}>2022</Typography>
                            //     </Box>
                            <   Box 
                                    key={index}
                                    sx={{
                                        margin: theme.spacing(3), 
                                        padding: theme.spacing(2),
                                        display:'flex', 
                                        alignItems:"center", 
                                        justifyContent:"end", 
                                        flexDirection:'column',
                                        height:"auto", 
                                        width:"85%", 
                                        aspectRatio: 1,
                                        backgroundImage:
                                        index%2 === 0 ? 'url(https://www.baovietnhantho.com.vn/storage/96e0d599-3d5b-46e8-aa55-7fbf3ef9bd5e/c/huanchuonglaodonghangnhi-%282%29-large.jpg)':
                                        'url(https://www.baovietnhantho.com.vn/storage/96e0d7b9-4d73-44de-a68a-1ed0ae594d8a/huanchuonglaodonghangnhi3.jpg)',
                                        backgroundPosition:'center',
                                        backgroundSize:'cover',
                                        backgroundRepeat:'no-repeat',
                                        textAlign:"center",
                                        boxShadow:'0 5px 20px rgba(34,34,34,.1)',
                                        borderRadius:'10px'
                                    }}>
                                        {/* <Image  alt='logo' src="https://icdn.dantri.com.vn/thumb_w/680/2022/06/16/huan-chuong-lao-dong-1655346540689.png" width="150px"/>
                                        <Typography pt={2} variant="h6" fontWeight={700} color={theme.color.black} fontFamily={theme.typography.MuktaMahee}>TÊN HUÂN CHƯƠNG</Typography>
                                        <Typography variant="h6" fontWeight={700} color={theme.color.black} fontFamily={theme.typography.MuktaMahee}>2022</Typography> */}
                                </Box>
                                
                        )
                    })
                }
                
        </Carousel>
      </Box>
    </StyledContainer>
)}