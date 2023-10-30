import React from 'react'
import {  useTheme } from '@emotion/react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export function OurServices() {
  const {t} = useTranslation()
  const theme = useTheme()
  return (
    <Box>
        <Container maxWidth='xl'sx={{mt:theme.spacing(5), py: theme.spacing(5), px:0}}>
            <Grid container>
                <Grid item xs={0} md={4} sx={{p:theme.spacing(3), display:{xs: 'none', md:'block'}}}>
                    <Box sx={{
                        p:theme.spacing(6),
                        backgroundImage:"url('https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/355265243_564632125875881_828254695048474631_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEsJKXZ7MhiznNCdMmAYVRNR17hoVtbJ89HXuGhW1snz5cKA-fADt4SnFt90EqjmBvsqtOUkAaVyPpn2uxpjZWC&_nc_ohc=Wup_gHhwG40AX80CrK5&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfBtT0VY1lqA2kUbhOKFc6aVxBVLQvyG8dowLeI3rIIphg&oe=65432D16') !important",
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        backgroundRepeat:"no-repeat",
                        position:"relative",
                        height:"100%",
                        minHeight:"500px",
                        borderRadius: "10px"
                    }}/>
                </Grid>
                <Grid item conntainer xs={12} md={8} sx={{position:'relative',p:theme.spacing(3)}}>
                    <Typography variant='h4' color={theme.color.black} fontWeight={"bold"} className='type-line' pb={2}>
                        {t('Dịch vụ của chúng tôi')}
                    </Typography>

                    <Box>
                    <Grid container sx={{pt: theme.spacing(4), pl: theme.spacing(4)}} spacing={2}>
                        {
                            [1,2,3,4,5,6,7,8].map((id)=>{
                                return(
                                    <Grid key={id} item xs={3} sm={3} md={3}>
                                        <Box sx={{backgroundColor: theme.color.white,boxShadow: '0 0 15px #eee', borderRadius:"10px"}} className={"our-mission-wrap"}>
                                            <Box
                                                style={{
                                                    background:
                                                    'url("https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/355265243_564632125875881_828254695048474631_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEsJKXZ7MhiznNCdMmAYVRNR17hoVtbJ89HXuGhW1snz5cKA-fADt4SnFt90EqjmBvsqtOUkAaVyPpn2uxpjZWC&_nc_ohc=Wup_gHhwG40AX80CrK5&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfBtT0VY1lqA2kUbhOKFc6aVxBVLQvyG8dowLeI3rIIphg&oe=65432D16")',
                                                    height: "auto",
                                                    aspectRatio: 1,
                                                    width: "100%",
                                                    borderRadius: "6px 6px 0 0",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    backgroundRepeat: "no-repeat"
                                                }}
                                            />
                                            <Typography variant="h6" fontWeight={"bold"} color={theme.color.black} textAlign={"center"} sx={{p:theme.spacing(3)}}>
                                                Tên dịch vụ {id}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }     
                    </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
