import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Box, Button, Container, Grid, TextField, Typography, styled, useTheme } from '@mui/material'
import { useInView } from 'react-intersection-observer';

const CustomizedButton = styled(Button)(({ theme }) => ({
  // Set background color
  backgroundColor: theme.color.green1,
  fontWeight:"700",
  fontSize:"16px",
  padding:theme.spacing(1),
  width:"100%", 
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
}))

export default function Question() {
  const {t,} = useTranslation()
  const [ques, setQues] = useState([])
  const pages = []
  const theme = useTheme()
  window.scrollTo(0, 0)

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_HOST}/qna/list?p=0&c=100`)
    .then(response => response.text())
    .then(result => {
        const data = JSON.parse(result).result.data
        setQues(data)
    })
    .catch(error => console.log('error', error));
  },[])
  return (
    <>
      <Helmet>
        <title> {t("Câu hỏi")} | {t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
     </Helmet>
      <Banner 
        name={t("Câu hỏi")} 
        image={'/assets/question.png'} 
        path={`/${t('cauhoi')}`} 
        pages={pages}
        sub_name={t("Hepco cam kết mang đến trải nghiệm tốt nhất cho quý khách hàng và luôn sẵn lòng lắng nghe mọi ý kiến đóng góp, giải đáp tất cả những thắc mắc, phản ánh của quý khách hàng qua các kênh thông tin hotline, website, fanpage..một cách nhanh chóng và thỏa đáng nhất.")}
      />
      <Container maxWidth='xl' sx={{py:theme.spacing(10)}}>
        <Grid container spacing={5}>
          {
          ques.map((q,index)=>{
            return(
              <QuestionItem key={"question-"+index} index={index} q={q}/>
            )
          })
          }
          <Grid item xs={12}>
            <Box sx={{backgroundColor:'#fafafa', padding: theme.spacing(5), borderRadius: "10px"}}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography  variant="h4" textAlign={"center"} fontWeight={700}>{t("Gửi câu hỏi")}</Typography>
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
                <Grid item xs={12} sx={{padding: '32px 0'}}>
                  <CustomizedButton variant="contained">{t("Gửi")}</CustomizedButton>
                </Grid>  
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

const QuestionItem = ({index, q})=>{
  const {t, i18n} = useTranslation()
  const currentLang = i18n.language == 'en' ? 'en' : ''
  const theme = useTheme()
  const item = useRef(null)
    const { ref, inView } = useInView({
        threshold: 0,
        deplay: 300
    });
    useEffect(() => {
        if(inView){
            if (item.current) {
              if(index%2==0){
                item.current.classList.add('animate__animated','animate__fadeInLeft')
              }else{
                item.current.classList.add('animate__animated','animate__fadeInRight')
              }
            }
        }
    }, [inView])
  return(
    <Grid item xs={12} md={6}>
      <Box
        ref={item}
        sx={{border: '1px solid #eee',height: '100%',borderRadius: '5px', padding: theme.spacing(3)}}
      >
        <Typography variant='h5' fontWeight={700} pb={theme.spacing(2)} ref={ref}>
          {q["question_"+currentLang] || q.question}
        </Typography>
        <Typography px={theme.spacing(1)} className='ck-content' dangerouslySetInnerHTML={{__html: q["answer_"+currentLang] || q.answer}}/>
      </Box>
    </Grid>
  )
}