import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '@emotion/react'
import { AccordionSummary, Box, Button, Container, Grid, TextField, Typography, styled } from '@mui/material'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import 'animate.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendMail from '../SendMail';



const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        borderBottom: `1px solid`,
        '&:last-child': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: "0px 16px 25px"
}));
const TextInput = styled(TextField)(({ theme }) => ({
    // Set background color
    backgroundColor: '#03611A4d',

    // Set text color
    color: '#fff !important',

    // Set border styles
    // border: '1px solid #fff',
    borderRadius: '8px',

    // Set hover styles
    '&:hover': {
        borderColor: '#fff',
    },

    // Set active styles
    '&:active': {
        borderColor: '#fff',
    },
    '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline' : {
        borderColor: '#ffffffde !important',
        border: '1px solid !important'
    },
    '& .MuiFormControl-root:hover .MuiOutlinedInput-notchedOutline':{
        borderColor: '#ffffffde !important'
    },
    '& .MuiOutlinedInput-notchedOutline':{
        borderColor:'#ffffff3b !important'
    },
    '& .MuiOutlinedInput-root':{
        color: '#fff !important'
    },
    // Override placeholder styles
    '& .MuiInputLabel-root': {
        color: '#fff !important',
    },
    '& .MuiInputBase-input::placeholder': {
        color: '#fff !important',
    },
}));
const StyledTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: theme.spacing(5),
    textAlign: 'center',
    // fontSize:'42px',
}));
const CustomizedButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#009241",
    fontWeight:"700",
    fontSize:"16px",
    padding:theme.spacing(1),
    color: theme.color.white,
    borderColor: "#009241",
    borderRadius: '4px',
    '&:hover': {
        backgroundColor: "#009241",
        borderColor: "#009241",
    },
    '&:active': {
        backgroundColor: "#009241",
        borderColor: "#009241",
    },
    '&:focus': {
        outline: 'none'
    },
}));

export function Questions() {

  const {t, i18n} = useTranslation()
  const currentLang = i18n.language == 'en' ? 'en' : ''
  const theme= useTheme()
  const questionsRef = useRef(null) 
  const formQuesRef = useRef(null)
  const [open, setOpen] = useState(false);
  const [ques, setQues] = useState([])
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    deplay: 300
  });
  
  useEffect(() => {
    if(inView){
        if (questionsRef.current) {
            questionsRef.current.classList.add('animate__animated','animate__rotateInDownLeft');
        }
        if (formQuesRef.current) {
            formQuesRef.current.classList.add('animate__animated','animate__rotateInDownRight');
        }
    }
  }, [inView])
  
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_HOST}/qna/highlight`)
    .then(response => response.text())
    .then(result => {
        const data = JSON.parse(result).data
        setQues(data.slice(0,5))
    })
    .catch(error => console.log('error', error));
  },[])
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Container maxWidth='100%' sx={{pb:theme.spacing(5),px:'0 !important'}}>
        <Box sx={{
          py:theme.spacing(5),
          backgroundImage:"url(https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/bgg.jpg?id=5580) !important",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          position:"relative",
        //   height: {xs:'auto',md: '600px'}
          }}>
            <Box >
                <Container maxWidth='xl'>
                    <StyledTypography ref={ref} variant="h4" color={theme.color.white} fontWeight="bold" py={theme.spacing(10)} pb={theme.spacing(15)}>
                        {t('Câu hỏi')}
                    </StyledTypography>
                    <Grid container>
                        <Grid 
                            ref={questionsRef} 
                            item xs={12} 
                            md={6} 
                            sx={{
                                borderRadius: {xs: '10px' , md : "10px 0 0 10px"}, 
                                backgroundColor: theme.color.white, 
                                boxShadow:'0 5px 20px rgba(34,34,34,.1)'
                            }}
                        >
                            <Box
                                sx={{
                                    padding: theme.spacing(5),
                                    height:"100%",
                                    
                                }}
                            >
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <Typography ref={ref} variant='h5' color={theme.color.black} fontWeight={700} textAlign="center">
                                            {t('Câu hỏi thường gặp')}
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={12} >
                                        {
                                            ques.map((q,id)=>{

                                                return (
                                                        <Accordion key={'ques-'+q.id_qna} expanded={expanded === `pannel${q.id_qna}`} onChange={handleChange(`pannel${q.id_qna}`)}>
                                                            <AccordionSummary sx={{padding:'10px 0',color: expanded === `pannel${q.id_qna}` ? theme.color.red : theme.color.black}}  expandIcon={<ExpandMoreIcon />} aria-controls={`pannel${q.id_qna}d-content`} id={`pannel${q.id_qna}d-header`}>
                                                                <Typography fontWeight={700}>{q["question_"+currentLang] || q.question} </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography fontWeight={500} className='ck-content' dangerouslySetInnerHTML={{__html: q["answer_"+currentLang] || q.answer}}/>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                )
                                            })
                                        }

                                        <SendMail open={open} setOpen={setOpen}/>         
                                        <CustomizedButton onClick={()=>{setOpen(true)}} variant='contained' sx={{display:{xs:'block', md:'none', float: 'right', margin: theme.spacing(2)}}}>
                                            {t('Gửi câu hỏi')}
                                        </CustomizedButton>
                                    </Grid>
                                </Grid>  
                            </Box>
                        </Grid>
                        <Grid 
                            ref={formQuesRef} 
                            item 
                            xs={0} 
                            md={6} 
                            sx={{height:"auto", display: {xs: 'none',md:'flex'}}}
                        >
                            <Box
                                sx={{
                                    backgroundImage:"url(https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/quote.jpg?id=5470) !important",
                                    backgroundSize:"cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat:"no-repeat",
                                    padding: theme.spacing(5),
                                    height:"100%",
                                    borderRadius: "0 10px 10px 0"
                                }}
                            >
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" color={theme.color.white} fontWeight={700} textAlign={"center"}>{t("Gửi câu hỏi")}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput  label={t("Tên")} fullWidth variant="outlined" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput label={t("Email")} fullWidth variant="outlined"  />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput label={t("Số điện thoại")} fullWidth variant="outlined"  />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput label={t("Tiêu đề")} fullWidth variant="outlined"  />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput
                                            label={t("Nội dung")}
                                            multiline
                                            rows={4}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                    <CustomizedButton sx={{width:"100%", marginTop: theme.spacing(4)}} variant="contained">{t("Gửi")}</CustomizedButton>
                            </Box>
                            
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    </Container>
  )
}