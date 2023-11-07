import React, { useState } from 'react'
import { keyframes, useTheme } from '@emotion/react'
import { Box, Container, Grid, Modal, Typography, styled } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'

library.add(fas, faFontAwesome, faPlay)


const ServicesIcon = styled('div')(({ theme }) => ({
    position: "relative"
  }))

const IconImage = styled('img')(({ theme }) => ({
    width: "70px",
    zIndex: 2
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'unset'
  };

export function OurMission() {
  const {t} = useTranslation()
  const theme = useTheme()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
        <Container maxWidth='xl'sx={{mt:theme.spacing(5), py: theme.spacing(5), px:0}}>
            <Grid container sx={{px:3}}>
                <Grid item xs={12} md={7} sx={{borderRadius: "4px 0 0 4px",backgroundColor: theme.color.white,boxShadow: '0 0 150px #eee',p:theme.spacing(3), py: theme.spacing(8)}}>
                    {/* <Typography variant='h6' color={theme.color.green1}>
                        {t("CHÀO MỪNG ĐẾN VỚI HEPCO")}
                    </Typography> */}
                    <Typography variant='h4' color={theme.color.black} fontWeight={"bold"} className='type-line' pb={2}>
                        {t('Tầm nhìn - Sứ mệnh - Giá trị cốt lõi')}
                    </Typography>

                    <Grid container sx={{pt: theme.spacing(4), pl: theme.spacing(4)}} className={"our-mission-wrap"}>
                         <Grid item xs={2}>
                            <ServicesIcon>
                                <IconImage
                                    src="https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/goggles.png"
                                    alt="Rs-service"
                                />
                                <Background className="img-bg" />
                            </ServicesIcon>
                         </Grid>
                         <Grid item xs={10}>
                            <Typography variant="h5" fontWeight={"bold"}  color={theme.color.green2} pb={2}>
                                {t('Tầm nhìn')}
                            </Typography>
                            <Typography fontWeight={500}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                         </Grid>
                    </Grid>
                    <Grid container sx={{pt: theme.spacing(4),pl: theme.spacing(4)}} className={"our-mission-wrap"}>
                         <Grid item xs={2}>
                            <ServicesIcon>
                                <IconImage
                                    src="https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/business.png"
                                    alt="Rs-service"
                                />
                                <Background className="img-bg" />
                            </ServicesIcon>
                         </Grid>
                         <Grid item xs={10}>
                            <Typography variant="h5" fontWeight={"bold"}  color={theme.color.green2} pb={2}>
                                {t('Sứ mệnh')}
                            </Typography>
                            <Typography fontWeight={500}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                         </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5} sx={{position:'relative'}}>
                    <Grid container sx={{height:{xs: "400px", md:'100%'}}}>
                        <Grid item xs={6} md={7}>
                            <Box sx={{
                                width:"100%", 
                                height:"100%", 
                                backgroundImage:`url('./assets/images/mission2.jpg')`,
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
                                backgroundImage:`url('./assets/images/mission.jpg')`,
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
        <Container maxWidth='xl'>
            <Grid container sx={{p:theme.spacing(3), textAlign:"center", pt:0}} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" fontWeight={"bold"} color={theme.color.green2} pb={2} mb={2} className="core-values" sx={{position:"relative"}}>
                        {t('Giá trị cốt lõi')}
                    </Typography>
                </Grid>
                {
                    [1,2,3,4,5].map((id)=>{
                        return(
                            <Grid key={id} item xs={4} sm={4} md={2.4}>
                                <Box sx={{backgroundColor: theme.color.white,boxShadow: '0 0 150px #eee',p:theme.spacing(5), borderRadius:"10px"}} className={"our-mission-wrap"}>
                                    <ServicesIcon>
                                        <IconImage
                                            src="https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/ff.png"
                                            alt="Rs-service"
                                        />
                                    </ServicesIcon>
                                    <Typography variant="h6" fontWeight={"bold"} color={theme.color.black}>
                                        Giá trị cốt lõi {id}
                                    </Typography>
                                </Box>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </Container>
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
                src="https://www.youtube.com/embed/CjH1MlfZ4OU"
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
