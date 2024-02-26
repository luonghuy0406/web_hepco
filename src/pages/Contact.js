import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Alert, Box, Button, Container, Grid, Snackbar, TextField, Typography, styled, useTheme } from '@mui/material'

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
  const data = window.data
  const {t,i18n} = useTranslation()
  const currentLang = i18n.language == 'en' ? 'en' : ''
  const theme = useTheme()
  const pages = []
  window.scrollTo(0, 0);
  const info = data.company_data.data

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [sbContent, setSbContent] = useState({type:"info", content:t("Đang gửi email")})
  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const [contentMail,setContentMail] = useState({name:"",email:"",phone:"",subject:"",content:""})


  const handleChangeContent = (key,value)=>{
    const data = { ...contentMail }; // Shallow copy
    data[key] = value;
    setContentMail(data);
  }
  
    const handleSendMail = (data, setContentMail, setSbContent, setOpenSnackbar) => {
        
        let content = `
            Dear Mr/Ms,<br>Some clients has contact in website<br>
            Below is their infomation:<br>
            Name: ${data.name},<br>
            Email: ${data.email},<br>
            Phone number: ${data.phone},<br>
            Message: ${data.content}<br>
            Please reply them asap.<br>regard!!
        `
        let raw = JSON.stringify({
        "content": content
        });
        let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: 'POST',
            body: raw,
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_HOST}/sendmail`, requestOptions)
        .then(response => response.json())
        .then(result => {
            setOpenSnackbar(true)
            if(result.status == 'success'){
                setContentMail({name:"",email:"",phone:"",subject:"",content:""})
            }
            setSbContent({type:result.status, content: result.msg})
            setTimeout(()=>{
                setSbContent({type:"info", content:t("Đang gửi email")})
            },4000)
        })
        .catch(error => {
            setOpenSnackbar(true)
            setSbContent({type:'error', content: error})
            setTimeout(()=>{
                setSbContent({type:"info", content:t("Đang gửi email")})
            },4000)
        });
    }
  return (
    <>
      <Helmet>
          <title> {t("Liên hệ")} | {t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
      </Helmet>
      <Banner 
        name={t("Liên hệ")} 
        image={'/assets/lienhe.png'} 
        path={`/${t('lienhe')}`} 
        pages={pages}
        sub_name={t("Với phương châm phục vụ tận tâm – uy tín – trách nhiệm, Hepco cam kết mang đến cho quý khách hàng các giải pháp tối ưu với mức giá hợp lý và cạnh tranh nhất. Hãy liên hệ với chúng tôi để trải nghiệm sự chuyên nghiệp và dịch vụ chất lượng. Sự hài lòng của quý khách hàng là chìa khóa cho sự thành công của chúng tôi.")}
      />
      <Container maxWidth='xl'>
        <Grid container spacing={3} pb={5} pt={15}>
          <Grid item xs={12} md={6}>
            <Box sx={{padding: theme.spacing(2), width: "100%", height:"100%", minHeight:'400px'}}>
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
          <Grid item xs={12} md={6}>
            <Box sx={{backgroundColor:'#fafafa', padding: theme.spacing(5), borderRadius: "10px"}}>
              <Grid container spacing={4}>
              <Grid item xs={12}>
                  <Typography variant="h4" className='type-line' fontWeight={700}>Liên lạc</Typography>
                </Grid>
                <Grid item xs={6}>
                      <TextField  
                          label={t("Tên")} 
                          fullWidth 
                          variant="outlined" 
                          value = {contentMail["name"] || ""}
                          onChange={(e)=>{handleChangeContent("name",e.target.value)}}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <TextField 
                          label={t("Email")} 
                          fullWidth 
                          variant="outlined"  
                          value = {contentMail["email"] || ""}
                          onChange = {(e)=>{handleChangeContent("email",e.target.value)}}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <TextField 
                          label={t("Số điện thoại")} 
                          fullWidth 
                          variant="outlined"  
                          value = {contentMail["phone"] || ""}
                          onChange={(e)=>{handleChangeContent("phone",e.target.value)}}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <TextField 
                          label={t("Tiêu đề")} 
                          fullWidth 
                          variant="outlined"  
                          value = {contentMail["subject"] || ""}
                          onChange={(e)=>{handleChangeContent("subject",e.target.value)}}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          label={t("Nội dung")}
                          multiline
                          rows={4}
                          fullWidth
                          value = {contentMail["content"] || ""}
                          onChange={(e)=>{handleChangeContent("content",e.target.value)}}
                      />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomizedButton 
                      sx={{width:"100%"}} 
                      variant="contained"
                      onClick={()=>{
                        setOpenSnackbar(true)
                        handleSendMail(contentMail, setContentMail, setSbContent, setOpenSnackbar)
                    }}
                    >{t("Gửi")}</CustomizedButton>
                  </Grid>  
                </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} pt={5} pb={15}>
          <Grid item xs={12} md={3} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
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
                  <img src={'/assets/icons/ic_mobile.svg'} alt='icon phone' width={35} />
                </Box>
                <Typography variant="h5" fontWeight={700} color={theme.color.green1} padding={2}>{t("Gọi chúng tôi")}</Typography>
                <Typography textAlign="center" fontWeight={500}>{info?.[5].data}</Typography>
                <Typography textAlign="center" fontWeight={500}>{info?.[6].data}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
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
                  <img src={'/assets/icons/ic_email.svg'} alt='icon phone' width={35} />
                </Box>
                <Typography variant="h5" fontWeight={700} color={theme.color.green1} padding={2}>{t("Gửi email")}</Typography>
                <Typography textAlign="center" fontWeight={500}>{info?.[10].data}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
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
                  <img src={'/assets/icons/ic_open.svg'} alt='icon phone' width={35} />
                </Box>
                <Typography variant="h5" fontWeight={700} color={theme.color.green1} padding={2}>Giờ mở cửa</Typography>
                <Typography textAlign="center" fontWeight={500} dangerouslySetInnerHTML={{__html: info?.[9]["data_"+currentLang] || info?.[9]?.data}}></Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
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
                  <img src={'/assets/icons/ic_address.svg'} alt='icon phone' width={35} />
                </Box>
                <Typography variant="h5" fontWeight={700} color={theme.color.green1} padding={2}>{t("Địa chỉ")}</Typography>
                <Typography textAlign="center" fontWeight={500} dangerouslySetInnerHTML={{__html: info?.[4]["data_"+currentLang] || info?.[4]?.data}}/>
            </Box>
          </Grid>
        </Grid>
        {
            sbContent.type == "info" &&
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert severity="info" sx={{ width: '100%' }}>
                    {sbContent.content}
                </Alert>
            </Snackbar>
        }
        {
            sbContent.type == "success" &&
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    {sbContent.content}
                </Alert>
            </Snackbar>
        }
        {
            sbContent.type == "error" &&
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    {sbContent.content}
                </Alert>
            </Snackbar>
        }
      </Container>
    </>
  )
}
