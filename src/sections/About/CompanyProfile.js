import { useTheme } from '@emotion/react';
import { Box, Button, Container, ButtonGroup } from '@mui/material';
import React, { forwardRef, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function CompanyProfile() {
const pages = ['0','end','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
const book = useRef()
const theme = useTheme()
  return (
    <Container maxWidth='xl' sx={{display:'flex', alignItems:'center',justifyContent:'center',position:'relative',padding:theme.spacing(2), marginTop:theme.spacing(10)}}>
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
        {/* <Box sx={{position:'absolute', left:'50%',top:'0',transform:'translate(-50%,0)'}}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => {book.current.pageFlip().flipPrev()}}>Prev Page</Button>
                <Button onClick={() => {book.current.pageFlip().flipNext()}}>Next Page</Button>
            </ButtonGroup>
        </Box> */}
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
  )
}
