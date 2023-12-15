import { Box, Card, CardMedia, Container, Divider, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import Banner from '../sections/Banner'
import { useParams } from 'react-router-dom';
import { project } from '../sections/Projects/ProjectsContent';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';

export default function ProjectsItem() {
  const {t} = useTranslation()
  const theme = useTheme()
  const { threadId } = useParams();
  const lastDotIndex = threadId.lastIndexOf('.');
  const idPart = threadId.substring(lastDotIndex + 1);
  const projectNewest = project.slice(0, 3)
  const data = project.filter((n)=> n.id == idPart)
  const projectRelated = project.filter((n)=> n.group_id == data[0]?.group_id && n.id != data[0]?.id ).slice(0, 3)
  const categories = {
    '0': {name: t('Tất cả dự án'), value:'0'},
    '1': {name: t('Dự án đầu tư'), value:'1'},
    '2': {name: t('Hợp tác trong nước'), value:'2'},
    '3': {name: t('Hợp tác nước ngoài'), value:'3'}
}
  window.scrollTo(0, 0)
  
  return (
    <>
      <Banner name={''} image={'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/inner3.jpg'} path={`/`} pages={[]}/>
      <Container 
            maxWidth={'xl'} 
            sx={{
                marginTop:theme.spacing(5),
                marginBottom:theme.spacing(10),
            }} 
        >
          <LazyLoad height={400} offset={100}>
              <Box 
                sx={{ 
                    width: "100%", 
                    height: '400px', 
                    backgroundImage: `url(${data[0]?.image})`, 
                    backgroundPosition:'center', 
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    marginBottom:theme.spacing(5)
                  }}
              />
          </LazyLoad>
            <Grid container spacing={2}>
                <Grid item container spacing={2}>
                  
                  <Grid item container xs={12} md={9} sx={{height:'fit-content'}}>
                    <Grid item container spacing={3} xs={12} sx={{height:'fit-content'}}>
                        <Grid item xs={12}>
                            <Box sx={{borderLeft: `5px solid ${theme.color.green1}`, paddingLeft:theme.spacing(2)}}>
                                <Typography variant="h4" fontWeight={700}>{data[0]?.title}</Typography>
                                <Box
                                    sx={{display: 'flex',alignItems:'center', paddingTop:theme.spacing(1)}}
                                >
                                    <Typography fontWeight={700}><PersonIcon sx={{color:theme.color.green1}}/></Typography>
                                    <Typography fontWeight={700} sx={{margin: '0px 25px 0px 10px'}} color={theme.color.gray1}>{data[0]?.author}</Typography>
                                    <Typography fontWeight={700}><AccessTimeFilledIcon sx={{color:theme.color.green1}}/></Typography>
                                    <Typography fontWeight={700} sx={{margin: '0px 25px 0px 10px'}} color={theme.color.gray1}>{data[0]?.date}</Typography>
                                    <Typography fontWeight={700}><CategoryIcon sx={{color:theme.color.green1}}/></Typography>
                                    <Typography fontWeight={700} sx={{margin: '0px 25px 0px 10px'}} color={theme.color.gray1}>{categories?.[data[0]?.group_id]?.name}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{height:'fit-content'}}>
                      <Box className='ck-content' sx={{padding: theme.spacing(1)}} dangerouslySetInnerHTML={{__html: data[0]?.content}}>
                        
                        </Box>
                    </Grid>
                  </Grid>
                  <Grid item container xs={12} md={3}>
                      <Box sx={{padding: theme.spacing(3),backgroundColor: theme.color.white, boxShadow:'0 5px 20px rgba(34,34,34,.1)', borderRadius: '10px', width:'100%', height: 'fit-content'}}>
                          
                          
                      <Typography sx={{marginBottom:theme.spacing(3)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Dự án liên quan')}</Typography>
                          {
                              projectRelated.map((related)=>{
                                  const normalizedTitle = related.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                                  return(
                                      <Box key={'project-related'+related.id} sx={{paddingBottom: theme.spacing(3)}}>
                                          <Link to={`/${t('duan')}/${normalizedTitle}.${related.id}`}>
                                              <Grid container spacing={1}>
                                                  <Grid item xs={3}>
                                                      <Card 
                                                          sx={{
                                                              width: '100%',
                                                              height: '100%',
                                                              // aspectRatio: '1',
                                                              display: 'flex',
                                                              flexDirection: 'column',
                                                              position:'relative'
                                                          }}
                                                      >
                                                              <CardMedia 
                                                                  component="img"
                                                                  alt={related.title}
                                                                  height="auto"
                                                                  image={related.image}
                                                                  sx={{flex: 1,
                                                                  objectFit: 'cover'}}
                                                              />
                                                      </Card>
                                                  </Grid>
                                                  <Grid item xs={9}>
                                                      <Box sx={{marginBottom:'5px',overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
                                                          <Typography fontWeight={600}>{related.title}</Typography>
                                                      </Box>
                                                      <Box sx={{display:'flex'}}>
                                                          <AccessTimeFilledIcon fontSize={'13px'} color="disabled"/>
                                                          <Typography sx={{marginLeft:'5px'}} fontWeight={600} fontSize={'13px'} color={theme.color.gray1}>{related.date}</Typography>
                                                      </Box>
                                                  </Grid>
                                              </Grid>
                                          </Link>
                                      </Box>
                                  )
                              })
                          }
                          <br/>
                          <Divider/>
                          <Typography sx={{marginBottom:theme.spacing(3), marginTop:theme.spacing(3)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Dự án mới nhất')}</Typography>
                          {
                              projectNewest.map((newest)=>{
                                  const normalizedTitle = newest.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

                                  return(
                                      <Box key={'project-newest'+newest.id} sx={{paddingBottom: theme.spacing(3)}}>
                                          <Link to={`/${t('tintuc')}/${normalizedTitle}.${newest.id}`}>
                                              <Grid container spacing={1}>
                                                  <Grid item xs={3}>
                                                      <Card 
                                                          sx={{
                                                              width: '100%',
                                                              height: '100%',
                                                              // aspectRatio: '1',
                                                              display: 'flex',
                                                              flexDirection: 'column',
                                                              position:'relative'
                                                          }}
                                                      >
                                                              <CardMedia 
                                                                  component="img"
                                                                  alt={newest.title}
                                                                  height="auto"
                                                                  image={newest.image}
                                                                  sx={{flex: 1,
                                                                  objectFit: 'cover'}}
                                                              />
                                                      </Card>
                                                  </Grid>
                                                  <Grid item xs={9}>
                                                      <Box sx={{marginBottom:'5px',overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
                                                          <Typography fontWeight={600}>{newest.title}</Typography>
                                                      </Box>
                                                      <Box sx={{display:'flex'}}>
                                                          <AccessTimeFilledIcon fontSize={'13px'} color="disabled"/>
                                                          <Typography sx={{marginLeft:'5px'}} fontWeight={600} fontSize={'13px'} color={theme.color.gray1}>{newest.date}</Typography>
                                                      </Box>
                                                  </Grid>
                                              </Grid>
                                          </Link>
                                      </Box>
                                  )
                              })
                          }
                      </Box>
                  </Grid>
                </Grid>
                
            </Grid>
        </Container>
    </>
  )
}
