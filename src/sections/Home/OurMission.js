import { useTheme } from '@emotion/react'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'semantic-ui-react'

export default function OurMission() {
    const theme = useTheme()
  return (
    <Box>
        <Container maxWidth='xl'sx={{py:theme.spacing(15), px:0, background:"#fdfdfd"}}>
            <Grid container sx={{backgroundColor: theme.color.white,boxShadow: '0 0 150px #eee', px:3}}>
                <Grid item xs={12} md={7}>
                    <Typography variant='h6' color={theme.color.green1}>
                        WELCOME TO HEPCO
                    </Typography>
                    <Typography variant='h3' color={theme.color.black} fontWeight={"bold"} className='type-line'>
                        25+ Years of Experience in Gadening & Landscaping
                    </Typography>
                    
                </Grid>
                <Grid item xs={12} md={5}>
                    <Grid container>
                        <Grid item xs={7}>
                            <Image src="http://mail.hepco.com.vn/Public/Upload/images/Tintuc/01-01(5).jpg" style={{width:"100%"}}/>
                        </Grid>
                        <Grid item xs={5} sx={{borderRadius: '0 4px'}}>
                            <Image src="http://mail.hepco.com.vn/Public/Upload/images/Tintuc/01-01(5).jpg" style={{width:"100%"}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
