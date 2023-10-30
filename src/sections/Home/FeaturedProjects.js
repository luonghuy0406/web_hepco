import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  paddingLeft: 0,
  paddingRight: 0,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  width: '100%',
  paddingBottom: theme.spacing(2),
  textAlign: 'center',
  '&:after':{
    content: "''",
    border: 0,
    width: '100px',
    height: '5px',
    background: theme.color.green1,
    display: 'block',
    marginTop: '10px',
    position: 'absolute',
    left: '50%',
    right: '50%',
    transform:'translateX(-50%) translateY(50%)',
}
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(4),
}));

const FeaturedProjectWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.color.green1,
  boxShadow: '0 0 15px #eee',
  borderRadius: '10px',
  '&:after': {
    content: '""',
    display: 'block',
    background: theme.color.green1,
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
    opacity: 0.9,
  },
  '&:hover .featured-project-content': {
    opacity: 1,
    transform: 'translate(0,-50%)',
    transitionDelay: '0.2s',
  },
  '&:hover .featured-project-name': {
    opacity: 0,
    transform: 'translate(0,-50%)',
    transitionDelay: '0.2s',
  },
}));

const FeaturedProjectImage = styled(Box)(({ theme, image }) => ({
  background: `url("${image}")`,
  height: 'auto',
  aspectRatio: 1,
  width: '100%',
  borderRadius: '6px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const FeaturedProjectContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '20px',
  right: '20px',
  opacity: 0,
  zIndex: 1,
  padding: '0 15px',
  transform: 'translate(10%,-50%)',
  transition: 'all .2s ease-out',
}));

const FeaturedProjectName = styled(Box)(({ theme }) => ({
  width: '80%',
  background: theme.color.green1,
  bottom: 0,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%) translateY(50%)',
  padding: theme.spacing(2),
  borderRadius: '10px',
  opacity: 1,
}));

export const FeaturedProjects = () => {
  const projects = [1, 2, 3];
  const theme = useTheme()
  const {t} = useTranslation()
  return (
    <StyledContainer maxWidth="xl">
      <Grid container>
            <StyledTypography variant="h4" color={theme.color.black} fontWeight="bold">
                Dự án nổi bật
            </StyledTypography>
            <StyledGrid container spacing={2}>
            {projects.map((id) => (
                <Grid key={id} item xs={4} sm={4} md={4}>
                <FeaturedProjectWrap>
                    <FeaturedProjectImage image={"https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/355265243_564632125875881_828254695048474631_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEsJKXZ7MhiznNCdMmAYVRNR17hoVtbJ89HXuGhW1snz5cKA-fADt4SnFt90EqjmBvsqtOUkAaVyPpn2uxpjZWC&_nc_ohc=Wup_gHhwG40AX80CrK5&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfBtT0VY1lqA2kUbhOKFc6aVxBVLQvyG8dowLeI3rIIphg&oe=65432D16"}/>
                    <FeaturedProjectContent className="featured-project-content">
                    <Typography variant="h5" textAlign="center" fontWeight={700} color={theme.color.white} sx={{padding:theme.spacing(3)}}>
                        Chi tiết dự án
                    </Typography>
                    <Grid container>
                         <Grid item xs={5}><Typography variant="h6" fontWeight={700} color={theme.color.white}>{t('Tên dự án:')}</Typography></Grid>
                         <Grid item xs={7}><Typography variant="h6" color={theme.color.white}>{t('Dự án 1')}</Typography></Grid>
                         <Grid item xs={5}><Typography variant="h6" fontWeight={700} color={theme.color.white}>{t('Chủ đầu tư:')}</Typography></Grid>
                         <Grid item xs={7}><Typography variant="h6" color={theme.color.white}>{t('Chủ đầu tư 1')}</Typography></Grid>
                         <Grid item xs={5}><Typography variant="h6" fontWeight={700} color={theme.color.white}>{t('Địa điểm:')}</Typography></Grid>
                         <Grid item xs={7}><Typography variant="h6" color={theme.color.white}>{t('Địa điểm 1')}</Typography></Grid>
                                                
                         <Grid item xs={5}><Typography variant="h6" fontWeight={700} color={theme.color.white}>{t('Công việc:')}</Typography></Grid>
                         <Grid item xs={7}><Typography variant="h6" color={theme.color.white}>{t('Công việc 1')}</Typography></Grid>
                         <Grid item xs={5}><Typography variant="h6" fontWeight={700} color={theme.color.white}>{t('Năm thực hiện:')}</Typography></Grid>
                         <Grid item xs={7}><Typography variant="h6" color={theme.color.white}>{t('2022')}</Typography></Grid>
                     </Grid>
                    </FeaturedProjectContent>
                    <FeaturedProjectName className="featured-project-name">
                    <Typography variant="h5" textAlign="center" fontWeight={700} color={theme.color.white}>
                        Tên dự án
                    </Typography>
                    </FeaturedProjectName>
                </FeaturedProjectWrap>
                </Grid>
                ))}
            </StyledGrid>
        </Grid>
    </StyledContainer>
)}