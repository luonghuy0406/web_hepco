import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useMatch } from 'react-router-dom';

export default function MenuNav({page, color}) {
    const {t} = useTranslation()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const match = useMatch(page.path)
    const matchChild = useMatch(page.path+'/:page')
    return (
    <Box
        className='menu-item'
        sx={{minWidth:'100px'}}
        position={"relative"} 
        onMouseEnter={handleOpen} 
        onMouseLeave={handleClose}
    >
        
        <Link to={page.path} style={{textDecoration:'none'}} target={page.name=='Hoá đơn' ? "_blank" : ""}>
            <Typography
                key={page.path}
                sx={{
                    p:1,
                    display: "block",
                    fontSize: {xs: '13px', md:'14px', lg:'16px'},
                    fontWeight: "bold",
                    borderRadius: "unset",
                    transition: "all 0.5s",
                    // fontFamily: (theme) => theme.typography.header,
                    textTransform: 'uppercase',
                    textAlign:"center",
                    color:  (open || Boolean(match) || (Boolean(matchChild) && matchChild?.pattern.path !='/:page') ? ((theme) => theme.color.red) : ((theme) => (color ? '#000': theme.color.white))),
                    // textDecoration: open ? 'underline' :'none',
                    "&:hover": {
                        color:  (theme) => theme.color.red,
                        // textDecoration: 'underline',
                        cursor:"pointer"
                    },
                }}
                >
                {page.name}
            </Typography>
        </Link>

        {
            page.child?.length > 0 &&
            <ul 
                className='sub-menu'
            >
                {
                    page.child?.map((child)=>{
                        return (
                            <Link key={`${child.path}`} to={`${page.path}${child.path}`}>
                                <li>
                                    {child.name}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        }

        
    </Box>
  )
}