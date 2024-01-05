import { Box, Popover, Popper, Typography, useTheme } from '@mui/material'
import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'

export default function Node({data, width}) {
  const theme = useTheme()

  const {t, i18n} = useTranslation()
  const currentLang = i18n.language == 'en' ? 'en' : ''

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = () => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box sx={{position:'relative'}}>
      <Box
        sx={{
            backgroundColor: theme.color.green1,
            minWidth: width,
            width: 'auto',
            height:'70px',
            textAlign: 'center',
            color: '#fff',
            fontWeight: '700',
            borderRadius: '50px',
            display: 'flex',
        }}
        onMouseOver={()=>{handleClick()}}
        onMouseOut={()=>{handleClose()}}
      >
        {
          data.value.image?.trim()?.length > 0 &&
          <Box
            sx={{
                backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${data.value.image})`,
                backgroundPosition:'center',
                backgroundSize:'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%',
                width: '70px',
                height:'70px',
                flexBasis:'70px'
            }}
          >

          </Box>
        }
      <Box
        sx={{
            backgroundColor: theme.color.green1,
            padding: theme.spacing(2),
            textAlign: 'center',
            color: '#fff',
            fontWeight: '700',
            borderRadius: '50px',
            display: 'flex',
            alignItems:'center',
            flexGrow:1,
            justifyContent:'center'
        }}
      >
        <Typography fontWeight={"700"} dangerouslySetInnerHTML={{__html:data.value?.["name_"+currentLang] || data.value?.name}}></Typography>
      </Box>
      </Box>
      {
        data.value?.["content_"+currentLang]?.trim()?.length > 0 || data.value?.content?.trim()?.length > 0 &&

        <Box 
          sx={{
            textAlign:'left',
            opacity:open ? 1 : 0,
            color:"#000",  
            boxShadow:'0 5px 20px rgba(34,34,34,.1)', 
            borderRadius: '5px',
            p: theme.spacing(2), 
            bgcolor: theme.color.white,
            position:'absolute !important', 
            bottom: '0px' ,
            transform: 'translate(0%,100%)',
            minWidth: width,
            transition: 'all .4s ease-in-out 0s',
            zIndex: 9,
            fontWeight: 100
          }}
          className='ck-content'
          dangerouslySetInnerHTML={{__html:data.value?.["content_"+currentLang] || data.value?.content}}
        />
      }
    </Box>
  )
}
