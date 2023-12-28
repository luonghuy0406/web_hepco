import React, { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react'
import {  Box, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer';

export function CompanyInfo() {
  const {t} = useTranslation()
  const theme = useTheme()
  const [years, setYears] = useState(0)
  const [projects, setProjects] = useState(0)
  const [customers, setCustomers] = useState(0)
  const [members, setMembers] = useState(0)
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    deplay: 100
  });
  useEffect(() => {
    setYears(0)
    setProjects(0)
    setCustomers(0)
    setMembers(0)
  }, [inView]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (years < 10) {
        setYears(years + 1);
      } else {
        clearInterval(timer);
      }
    }, 10/1000);

    return () => {
      clearInterval(timer);
    };
  }, [years]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (projects < 500) {
        setProjects(projects + 1);
      } else {
        clearInterval(timer);
      }
    }, 500/1000);

    return () => {
      clearInterval(timer);
    };
  }, [projects]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (customers < 100) {
        setCustomers(customers + 1);
      } else {
        clearInterval(timer);
      }
    }, 100/1000);

    return () => {
      clearInterval(timer);
    };
  }, [customers]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (members < 100) {
        setMembers(members + 1);
      } else {
        clearInterval(timer);
      }
    }, 100/1000);

    return () => {
      clearInterval(timer);
    };
  }, [members]);
  return (
    <Container maxWidth='100%' sx={{pt:theme.spacing(20), mb:theme.spacing(20),px:'0 !important'}}>
      <Box sx={{
          py:theme.spacing(3),
          pt:theme.spacing(6),
          backgroundImage:"url(/assets/images/bg2.jpg) !important",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          position:"relative",
          height:"200px"
        }}>
        <Typography variant="h4" textAlign={"center"} color={theme.color.white} fontWeight={700}> {t('Thông tin nổi bật')}</Typography>
        <Container maxWidth='xl' sx={{position:"absolute", bottom: "-50%", left:"50%", transform:"translateX(-50%) translateY(0%)"}}>
            <Grid ref={ref} container sx={{py: theme.spacing(5) , background:theme.color.white, borderRadius:"30px"}}>
                <Grid item xs={3}>
                    <Typography sx={{transition:"ease-in 0.1s"}} variant="h3" fontFamily={theme.typography.MuktaMahee} fontWeight={700} color={theme.color.green1} textAlign={"center"}>
                    {years}+
                    </Typography>
                    <Typography variant="h5" fontWeight={700} color={theme.color.black} textAlign={"center"}>
                        Năm kinh nghiệm
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{transition:"ease-in 0.1s"}} variant="h3" fontFamily={theme.typography.MuktaMahee} fontWeight={700} color={theme.color.green1} textAlign={"center"}>
                        {projects}+
                    </Typography>
                    <Typography variant="h5" fontWeight={700} color={theme.color.black} textAlign={"center"}>
                        Dự án 
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{transition:"ease-in 0.1s"}} variant="h3" fontFamily={theme.typography.MuktaMahee} fontWeight={700} color={theme.color.green1} textAlign={"center"}>
                        {customers}+
                    </Typography>
                    <Typography variant="h5" fontWeight={700} color={theme.color.black} textAlign={"center"}>
                        Khách hàng
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{transition:"ease-in 0.1s"}} variant="h3" fontFamily={theme.typography.MuktaMahee} fontWeight={700} color={theme.color.green1} textAlign={"center"}>
                        {members}+
                    </Typography>
                    <Typography variant="h5" fontWeight={700} color={theme.color.black} textAlign={"center"}>
                        Nhân sự
                    </Typography>
                </Grid>
            </Grid>
        </Container>
      </Box>
    </Container>
  )
}
