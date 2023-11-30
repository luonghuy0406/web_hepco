import { useTheme } from '@emotion/react';
import { Box, Button, Container, ButtonGroup } from '@mui/material';
import React, { forwardRef, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip';

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
        <Box sx={{position:'absolute', left:'50%',top:'0',transform:'translate(-50%,0)'}}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => {book.current.pageFlip().flipPrev()}}>Prev Page</Button>
                <Button onClick={() => {book.current.pageFlip().flipNext()}}>Next Page</Button>
            </ButtonGroup>
        </Box>
    </Container>
  )
}
