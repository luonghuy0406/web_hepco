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
export default function Question() {
  const {t} = useTranslation()
  const pages = []
  const theme = useTheme()
  window.scrollTo(0, 0);
  return (
    <>
      <Banner name="Câu hỏi" image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={'/cauhoi'} pages={pages}/>
      <Container maxWidth='xl' sx={{py:theme.spacing(10)}}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{border: '1px solid #eee',height: '100%',borderRadius: '5px', padding: theme.spacing(3)}}
            >
              <Typography variant='h5' fontWeight={700} pb={theme.spacing(2)}>
                Chi phí sử dụng Google One là bao nhiêu?
              </Typography>
              <Typography px={theme.spacing(1)}>
                Google One cung cấp rất nhiều gói khác nhau, do đó, bạn có thể tìm một gói phù hợp với mình nhất. Mỗi quốc gia lại có các gói khác nhau. Vì vậy, bạn hãy tham khảo biểu giá dành cho quốc gia của mình. Google One cung cấp rất nhiều gói khác nhau, do đó, bạn có thể tìm một gói phù hợp với mình nhất. Mỗi quốc gia lại có các gói khác nhau. Vì vậy, bạn hãy tham khảo biểu giá dành cho quốc gia của mình.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{border: '1px solid #eee',height: '100%',borderRadius: '5px', padding: theme.spacing(3)}}
            >
              <Typography variant='h5' fontWeight={700} pb={theme.spacing(2)}>
                Chi phí sử dụng Google One là bao nhiêu?
              </Typography>
              <Typography px={theme.spacing(1)}>
                Google One cung cấp rất nhiều gói khác nhau, do đó, bạn có thể tìm một gói phù hợp với mình nhất. Mỗi quốc gia lại có các gói khác nhau. Vì vậy, bạn hãy tham khảo biểu giá dành cho quốc gia của mình.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{border: '1px solid #eee',height: '100%',borderRadius: '5px', padding: theme.spacing(3)}}
            >
              <Typography variant='h5' fontWeight={700} pb={theme.spacing(2)}>
                Chi phí sử dụng Google One là bao nhiêu?
              </Typography>
              <Typography px={theme.spacing(1)}>
                Google One cung cấp rất nhiều gói khác nhau, do đó, bạn có thể tìm một gói phù hợp với mình nhất. Mỗi quốc gia lại có các gói khác nhau. Vì vậy, bạn hãy tham khảo biểu giá dành cho quốc gia của mình.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{border: '1px solid #eee',height: '100%',borderRadius: '5px', padding: theme.spacing(3)}}
            >
              <Typography variant='h5' fontWeight={700} pb={theme.spacing(2)}>
                Chi phí sử dụng Google One là bao nhiêu?
              </Typography>
              <Typography px={theme.spacing(1)}>
                Google One cung cấp rất nhiều gói khác nhau, do đó, bạn có thể tìm một gói phù hợp với mình nhất. Mỗi quốc gia lại có các gói khác nhau. Vì vậy, bạn hãy tham khảo biểu giá dành cho quốc gia của mình.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{border: '1px solid #eee',height: '100%',borderRadius: '5px', padding: theme.spacing(3)}}
            >
              <Typography variant='h5' fontWeight={700} pb={theme.spacing(2)}>
                Chi phí sử dụng Google One là bao nhiêu?
              </Typography>
              <Typography px={theme.spacing(1)}>
                Google One cung cấp rất nhiều gói khác nhau, do đó, bạn có thể tìm một gói phù hợp với mình nhất. Mỗi quốc gia lại có các gói khác nhau. Vì vậy, bạn hãy tham khảo biểu giá dành cho quốc gia của mình.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{border: '1px solid #eee',height: '100%',borderRadius: '5px', padding: theme.spacing(3)}}
            >
              <Typography variant='h5' fontWeight={700} pb={theme.spacing(2)}>
                Chi phí sử dụng Google One là bao nhiêu?
              </Typography>
              <Typography px={theme.spacing(1)}>
                Google One cung cấp rất nhiều gói khác nhau, do đó, bạn có thể tìm một gói phù hợp với mình nhất. Mỗi quốc gia lại có các gói khác nhau. Vì vậy, bạn hãy tham khảo biểu giá dành cho quốc gia của mình.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{border: '1px solid #eee',height: '100%',borderRadius: '5px', padding: theme.spacing(3)}}
            >
              <Typography variant='h5' fontWeight={700} pb={theme.spacing(2)}>
                Chi phí sử dụng Google One là bao nhiêu?
              </Typography>
              <Typography px={theme.spacing(1)}>
                Google One cung cấp rất nhiều gói khác nhau, do đó, bạn có thể tìm một gói phù hợp với mình nhất. Mỗi quốc gia lại có các gói khác nhau. Vì vậy, bạn hãy tham khảo biểu giá dành cho quốc gia của mình.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{backgroundColor:'#fafafa', padding: theme.spacing(5), borderRadius: "10px"}}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4" textAlign={"center"} fontWeight={700}>{t("Gửi câu hỏi")}</Typography>
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
      </Container>
    </>
  )
}
