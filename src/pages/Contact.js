import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Box, Button, Container, Grid, TextField, Typography, useTheme } from '@mui/material'

export default function Contact() {
  const {t} = useTranslation()
  const theme = useTheme()
  const pages = []
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
                  <TextField label="Tên" fullWidth variant="outlined" sx={{backgroundColor:"#FFF"}}/>
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Email" fullWidth variant="outlined" sx={{backgroundColor:"#FFF"}} />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Số điện thoại" fullWidth variant="outlined" sx={{backgroundColor:"#FFF"}} />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Tiêu đề" fullWidth variant="outlined" sx={{backgroundColor:"#FFF"}} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Nội dung"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{backgroundColor:"#FFF"}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button sx={{width:"100%"}} variant="contained">Gửi</Button>
                </Grid>  
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} pt={5} pb={15}>
          <Grid item xs={3}>
            <Box sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px"}}>

            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px"}}>

            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px"}}>

            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px"}}>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
