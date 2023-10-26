import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
    return (
    <Box
        sx={{minWidth:'100px'}}
        position={"relative"} 
        onMouseEnter={handleOpen} 
        onMouseLeave={handleClose}
    >
        <Link to={page.path} style={{textDecoration:'none'}}>
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
                    color:  (open ? ((theme) => theme.color.green1) : ((theme) => (color ? '#000': theme.color.white))),
                    // textDecoration: open ? 'underline' :'none',
                    "&:hover": {
                        color:  (theme) => theme.color.green1,
                        // textDecoration: 'underline',
                        cursor:"pointer"
                    },
                }}
                >
                {t(page.name)}
            </Typography>
        </Link>
    </Box>
  )
}