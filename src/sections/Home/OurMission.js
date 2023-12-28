import React, { useEffect, useRef, useState } from 'react'
import { keyframes, useTheme } from '@emotion/react'
import { Box, Container, Grid, Modal, Typography, styled } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import 'animate.css';


library.add(fas, faFontAwesome, faPlay)


const ServicesIcon = styled('div')(({ theme }) => ({
}))

const IconImage = styled('img')(({ theme }) => ({
    width: "70px",
    zIndex: 2,
}))

const IconImageCore = styled('img')(({ theme }) => ({
    width: "100px",
    zIndex: 2,
}))

const Background = styled('div')(({ theme }) =>({
    backgroundColor: theme.color.green1,
    width: "50px",
    height: "50px",
    left: "30px",
    top: "30px",
    position: "absolute",
    zIndex: 1,
    opacity: 0.2,
}))
const pulseBorderAnimation = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const PopupVideos = styled('div')(({theme})=>({
    cursor: 'pointer',
    position: 'absolute',
    transform: 'translateX(-50%) translateY(-50%)',
    boxSizing: 'content-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: '50%',
    lineHeight: 90,
    padding: 0,
    margin: 0,
    left: 0,
    top: '50%',
    zIndex: 9,
    textAlign: 'center',
    background: theme.color.green1,
    '&:after': {
      content: '""',
      position: 'absolute',
      zIndex: 1,
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: 80,
      height: 80,
      borderRadius: '50%',
      transition: 'all 200ms',
    },
    '&:before': {
      background: theme.color.green1,
      content: '""',
      position: 'absolute',
      zIndex: 0,
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: 80,
      height: 80,
      borderRadius: '50%',
      animation: `${pulseBorderAnimation} 1500ms ease-out infinite`,
    },
    [theme.breakpoints.down('md')]: {
        left: '50%'
    },
    [theme.breakpoints.up('md')]: {
        left: 0
    }
}));

const PopupVideosBorder = styled('div')(({theme})=>({
    cursor: "pointer",
    position: 'absolute',
    transform: 'translateX(-50%) translateY(-50%)',
    width: 100,
    height: 100,
    borderRadius: '50%',
    lineHeight: 90,
    padding: 0,
    margin: 0,
    left: 0,
    top: '50%',
    zIndex: 9,
    textAlign: 'center',
    border: `1px solid ${theme.color.green1}`,
    [theme.breakpoints.down('md')]: {
        left: '50%'
    },
    [theme.breakpoints.up('md')]: {
        left: 0
    }
}));

const CoreValuestWrap = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.color.white,
    borderRadius: '10px',
    height: '100%',
    '&:hover':{
        boxShadow: '0 0 15px #eee',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    '&:after': {
      borderRadius:'5px',
      content: '""',
      display: 'block',
      background: theme.color.red,
      position: 'absolute',
      top: '20px',
      left: '20px',
      bottom: '20px',
      right: '20px',
      opacity: 0,
      transform: 'rotateY(90deg)',
      transformOrigin: '0 0',
      transition: 'all .4s ease-in-out 0s',
    },
    '&:hover:after': {
      transform: 'rotateY(0)',
      opacity: 0.8,

      transition: 'all .4s ease-in-out 0s',
    },
    '&:hover .core-value-content': {
      display:'flex !important',
      transitionDelay: '0.2s',
      color: theme.color.white,
      zIndex: '3',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      transition: 'all .4s ease-in-out 0s',
    },
    '&:hover .core-value-title': {
      display: 'none',
      transition: 'all .4s ease-in-out 0s',
    },
    '&:hover .core-value-image': {
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    },
    '&:hover .core-value-image img': {
        // width: '100%',
        // transition: 'all .4s ease-in-out 0s',
    }
    
  }));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'unset'
  };

export function OurMission({mission,video, coreVal}) {
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const theme= useTheme()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const visionRef = useRef(null)
    const missonRef = useRef(null)
    const videoLink = video
 
    const data = mission

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        deplay: 300
    })
  
    useEffect(() => {
        if(inView){
            if (visionRef.current) {
                visionRef.current.classList.add('animate__animated','animate__rotateInDownLeft');
            }
            if (missonRef.current) {
                missonRef.current.classList.add('animate__animated','animate__rotateInDownRight');
            }
        }
    }, [inView])
  
  
  if(!data){
      return <></>
  }
  return (
    <Box 
        sx={{
            backgroundImage: `url(https://html.themexriver.com/it-firm/images/background/pattern-19.png)`,
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right'
        }}
    >
        <Container maxWidth='xl' sx={{py: theme.spacing(10), px:0}}>
            <Grid container sx={{px:3}}>
                <Grid ref={visionRef} item xs={12} md={7} sx={{borderRadius: "4px 0 0 4px",backgroundColor: theme.color.white,boxShadow: '0 0 150px #eee',p:theme.spacing(3), py: theme.spacing(8)}}>
                    <Typography ref={ref} variant={'h4'} color={theme.color.black} fontWeight={"bold"} className='type-line' pb={2}>
                        {t('Tầm nhìn - Sứ mệnh')}
                    </Typography> 

                    <Grid container sx={{pt: theme.spacing(4), pl: theme.spacing(4)}} className={"our-mission-wrap"}>
                         <Grid item xs={12} md={12} lg={2}>
                            <ServicesIcon>
                                <IconImage
                                    src="/assets/images/ic1.png"
                                    alt="Rs-service"
                                />
                                <Background className="img-bg" />
                            </ServicesIcon>
                         </Grid>
                         <Grid item xs={12} md={12} lg={10} pr={theme.spacing(2)}>
                            <Typography variant="h5" fontSize={'30px'} fontWeight={"bold"}  color={theme.color.green1} pb={2}>
                                {t('Tầm nhìn')}
                            </Typography>
                            <Typography fontWeight={500} sx={{padding:theme.spacing(1)}} className='ck-content' dangerouslySetInnerHTML={{__html:data[0]?.["content_"+currentLang] || data[0]?.content}}>
                            </Typography>
                         </Grid>
                    </Grid>
                    <Grid container sx={{pt: theme.spacing(4),pl: theme.spacing(4)}} className={"our-mission-wrap"}>
                         <Grid item xs={12} md={12} lg={2}>
                            <ServicesIcon>
                                <IconImage
                                    src="/assets/images/ic2.png"
                                    alt="Rs-service"
                                />
                                <Background className="img-bg" />
                            </ServicesIcon>
                         </Grid>
                         <Grid item xs={12} md={12} lg={10} pr={theme.spacing(2)}>
                            <Typography variant="h5" fontSize={'30px'} fontWeight={"bold"}  color={theme.color.green1} pb={2}>
                                {t('Sứ mệnh')}
                            </Typography>
                            <Typography fontWeight={500} sx={{padding:theme.spacing(1)}} className='ck-content' dangerouslySetInnerHTML={{__html:data[1]?.["content_"+currentLang] || data[1]?.content}}>
                            </Typography>
                            
                         </Grid>
                    </Grid>
                </Grid>
                <Grid ref={missonRef} item xs={12} md={5} sx={{position:'relative'}}>
                    <Grid container sx={{height:{xs: "400px", md:'100%'}}}>
                        <Grid item xs={6} md={7}>
                            <Box sx={{
                                width:"100%", 
                                height:"100%", 
                                backgroundImage:`url(${process.env.REACT_APP_HOST}/read_image/${data[0].image})`,
                                backgroundPosition:'center',
                                backgroundSize:'cover',
                                backgroundRepeat:'no-repeat', 
                                borderRadius: "0 4px 4px 0"
                            }}/>
                        </Grid>
                        <Grid item xs={6} md={5} container alignItems={"center"}>
                            <Box sx={{
                                width:"100%", 
                                height:{xs: "100%", md: "80%"}, 
                                backgroundImage:`url(${process.env.REACT_APP_HOST}/read_image/${data[1].image})`,
                                backgroundPosition:'center',
                                backgroundSize:'cover',
                                backgroundRepeat:'no-repeat',
                                borderRadius: '0 4px 4px 0'
                            }}/>
                        </Grid>
                    </Grid>
                    <PopupVideos>
                        <FontAwesomeIcon icon="fa-solid fa-play" style={{color:"white", fontSize:"1.7rem", marginLeft:"4px"}}/>
                    </PopupVideos>
                    <PopupVideosBorder onClick={handleOpen}/>
                </Grid>
            </Grid>
        </Container>
        <CoreValue coreVal={coreVal}/>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <iframe
                width={900}
                height={600}
                src={videoLink}
                title="THẦM LẶNG NỮ CÔNG NHÂN VỆ SINH MÔI TRƯỜNG"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
            />

            </Box>
      </Modal>
    </Box>
  )
}

const CoreValue = ({coreVal}) =>{
    const {t} = useTranslation()
    const theme= useTheme()
    const data = coreVal
    if(!data){
        return <></>
    }

    return(
        <Container maxWidth='100%' sx={{py:theme.spacing(4), mb:theme.spacing(10),px:'0 !important'}}>
            <Box sx={{
                py:theme.spacing(5),
                backgroundImage:"url(/assets/images/bg1.jpeg) !important",
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                position:"relative",
                // height:"200px"
                }}>
                    <Container maxWidth='xl'>
                        <Grid container sx={{p:theme.spacing(3), textAlign:"center", pt:0}} spacing={2} alignContent={"center"} justifyContent={'center'}>
                            <Grid item xs={12}>
                                <Typography variant="h4" fontWeight={"bold"} mb={5} mt={2} color={theme.color.white} sx={{position:"relative"}} className="core-values">
                                    {t('Giá trị cốt lõi')}
                                </Typography>
                            </Grid>
                            {
                                data.map((value,index)=>{
                                    return(
                                        <CoreItem value={value} key={'coreitem'+index} index={index}/>
                                    )
                                })
                            }

                        </Grid>
                    </Container>
            </Box>
        </Container>
    )
}

const CoreItem = ({value, index})=>{
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''

    const key = ['h','e','p','c','o']
    const theme = useTheme()
    const coreRef = useRef(null)
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        deplay: 1000
    });
    useEffect(() => {
        if(inView){
            if (coreRef.current) {
                setTimeout(()=>{
                    coreRef.current.classList.add('animate__animated','animate__flipInX');
                },0)
            }
        }
    }, [inView]);
    return(
        <Grid item xs={12} sm={6} md={4} lg={ 2.4}>
            <CoreValuestWrap ref={coreRef}>
                <Box 
                    sx={{
                        position:'relative',
                        backgroundColor: theme.color.white,
                        p:theme.spacing(5), 
                        borderRadius:"10px", 
                        height: '100%',
                        minHeight: '350px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    }} 
                    className={"core-values-wrap"}
                >
                    <ServicesIcon className='core-value-image'>
                        <IconImageCore
                            src={"/assets/icons/ic_"+key[index]+".svg"}
                            alt="Rs-service"
                        />
                    </ServicesIcon>
                    <Box ref={ref} className='core-value-title' fontSize={'18px'} py={2} sx={{height:'50px'}} fontWeight={"bold"} dangerouslySetInnerHTML={{__html:value?.["name_"+currentLang] || value?.name}}/>
                    <Box className='core-value-content' sx={{display:'none', position:'relative'}} fontWeight={600} dangerouslySetInnerHTML={{__html:value?.["content_"+currentLang] || value?.content}}/>
                </Box>
            </CoreValuestWrap>
        </Grid>
    )
}