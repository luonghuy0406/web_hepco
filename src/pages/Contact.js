import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Box, Button, Container, Grid, TextField, Typography, styled, useTheme } from '@mui/material'

const CustomizedButton = styled(Button)(({ theme }) => ({
  // Set background color
  backgroundColor: theme.color.green1,
  fontWeight:"700",
  fontSize:"16px",
  padding:theme.spacing(1),
  // Set text color
  color: theme.color.white,
  borderColor: theme.color.green1,

  // Set border styles
  borderRadius: '4px',

  // Set hover styles
  '&:hover': {
      backgroundColor: theme.color.green1,
      borderColor: theme.color.green1,
  },

  // Set active styles
  '&:active': {
      backgroundColor: theme.color.green1,
      borderColor: theme.color.green1,
  },

  // Set focus styles
  '&:focus': {
      outline: 'none', // Remove the default focus outline
      // boxShadow: `0 0 0 3px rgba(0, 123, 255, 0.3)`, // Add a custom focus border
  },
}));
export default function Contact() {
  const {t} = useTranslation()
  const theme = useTheme()
  const pages = []
  window.scrollTo(0, 0);
  return (
    <>
      <Banner name="Liên hệ" image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={'/lienhe'} pages={pages}/>
      <Container maxWidth='xl'>
        <Grid container spacing={3} pb={5} pt={15}>
          <Grid item xs={6}>
            <Box sx={{padding: theme.spacing(2), width: "100%", height:"100%"}}>
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.4181314318234!2d107.588855975588!3d16.45435218428236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a146b5a816c7%3A0xada6cb22654e37cc!2sHepco%20Inc!5e0!3m2!1sen!2s!4v1698745881314!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{"border":"0"}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="map"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{backgroundColor:'#fafafa', padding: theme.spacing(5), borderRadius: "10px"}}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4" className='type-line' fontWeight={700}>Liên lạc</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography fontWeight={500}>Suspendisse ex neque, sollicitudin in velit eu, luctus gravida nunc. Nulla pul-vinar risus sed metus euismod sodales ut sed nisi.</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField label={t("Tên")} fullWidth variant="outlined" sx={{backgroundColor:"#FFF"}}/>
                </Grid>
                <Grid item xs={6}>
                  <TextField label={t("Email")} fullWidth variant="outlined" sx={{backgroundColor:"#FFF"}} />
                </Grid>
                <Grid item xs={6}>
                  <TextField label={t("Số điện thoại")} fullWidth variant="outlined" sx={{backgroundColor:"#FFF"}} />
                </Grid>
                <Grid item xs={6}>
                  <TextField label={t("Tiêu đề")} fullWidth variant="outlined" sx={{backgroundColor:"#FFF"}} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={t("Nội dung")}
                    multiline
                    rows={4}
                    fullWidth
                    sx={{backgroundColor:"#FFF"}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomizedButton sx={{width:"100%"}} variant="contained">{t("Gửi")}</CustomizedButton>
                </Grid>  
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} pt={5} pb={15}>
          <Grid item xs={6} md={3} >
            <Box sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
                <Box
                  sx={{
                    width:"70px",
                    height:"70px",
                    backgroundColor: theme.color.green1,
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  <img src={'./assets/icons/ic_mobile.svg'} alt='icon phone' width={35} />
                </Box>
                <Typography variant="h5" fontWeight={700} color={theme.color.green1} padding={2}>Gọi chúng tôi</Typography>
                <Typography fontWeight={500}>(0234) 3848242</Typography>
                <Typography fontWeight={500}>(0234) 3997799</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} >
            <Box sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
              <Box
                  sx={{
                    width:"70px",
                    height:"70px",
                    backgroundColor: theme.color.green1,
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  <img src={'./assets/icons/ic_email.svg'} alt='icon phone' width={35} />
                </Box>
                <Typography variant="h5" fontWeight={700} color={theme.color.green1} padding={2}>{t("Gửi email")}</Typography>
                <Typography fontWeight={500}>info@hepco.com.vn</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} >
            <Box sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
            <Box
                  sx={{
                    width:"70px",
                    height:"70px",
                    backgroundColor: theme.color.green1,
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  <img src={'./assets/icons/ic_open.svg'} alt='icon phone' width={35} />
                </Box>
                <Typography variant="h5" fontWeight={700} color={theme.color.green1} padding={2}>Giờ mở cửa</Typography>
                <Typography fontWeight={500}>T2-T6: 7h - 11h30 và 13h - 17h</Typography>
                <Typography fontWeight={500}>T7-CN: Không hoạt động</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} >
            <Box sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
              <Box
                  sx={{
                    width:"70px",
                    height:"70px",
                    backgroundColor: theme.color.green1,
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  <img src={'./assets/icons/ic_address.svg'} alt='icon phone' width={35} />
                </Box>
                <Typography variant="h5" fontWeight={700} color={theme.color.green1} padding={2}>Địa chỉ</Typography>
                <Typography fontWeight={500}>46 Trần Phú, Phường Phước Vĩnh</Typography>
                <Typography fontWeight={500}>Thành phố Huế</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
