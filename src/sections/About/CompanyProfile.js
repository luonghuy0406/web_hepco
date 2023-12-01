import { useTheme } from '@emotion/react';
import { Box, Typography, Container } from '@mui/material';
import React, { forwardRef, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTranslation } from 'react-i18next';

export default function CompanyProfile() {
const pages = ['0','end','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
const book = useRef()
const theme = useTheme()
const {t} = useTranslation()
  return (
    <Container maxWidth='100%' sx={{marginTop:theme.spacing(10), marginBottom:theme.spacing(10)}}>
        <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Hồ sơ năng lực')}</Typography>
        <Container maxWidth='xl' sx={{display:'flex', alignItems:'center',justifyContent:'center',position:'relative'}}>
            <HTMLFlipBook 
                width={600} 
                height={800} 
                ref={book}
                // showCover={true}
                flippingTime={1000}
                mobileScrollSupport={true}
            >
                {
                    pages.map((page)=>{
                        return (
                            <div className="page">
                                <img src={`/assets/images/company_profile/${page}.jpeg`} alt={'company profile page'+page} style={{width:'100%', height:'100%'}}/>
                            </div>
                        )
                    })
                }
            </HTMLFlipBook>
            <Box onClick={() => {book.current.pageFlip().flipPrev()}} className='button-next-image'
                sx={{

                    transition: 'all .4s ease-in-out 0s',
                    opacity:'.3', 
                    marginLeft:'10px', 
                    display:'flex',
                    cursor:'pointer', 
                    alignItems:'center',
                    justifyContent:'center',
                    width:'60px', 
                    color:'#fff', 
                    height:'60px', 
                    borderRadius:'50%', 
                    background: '#00000066', 
                    position:'absolute', 
                    left:0, 
                    bottom:'50%'
                }}
                >
                <KeyboardArrowLeftIcon/>
            </Box>
            <Box onClick={() => {book.current.pageFlip().flipNext()}} className='button-next-image'
            sx={{
                transition: 'all .4s ease-in-out 0s',
                opacity:'.3', 
                marginRight:'10px', 
                display:'flex',
                cursor:'pointer', 
                alignItems:'center',
                justifyContent:'center',
                width:'60px', 
                color:'#fff', 
                height:'60px', 
                borderRadius:'50%', 
                background: '#00000066', 
                position:'absolute', 
                right:0, 
                bottom:'50%'
                }}
            >
                <KeyboardArrowRightIcon/>
            </Box>
        </Container>
    </Container>
  )
}
