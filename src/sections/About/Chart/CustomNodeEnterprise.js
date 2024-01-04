import { Box, useTheme, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Handle, Position } from 'reactflow';

function CustomNodeEnterprise({ data, isConnectable }) {
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
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <Box
        sx={{
            backgroundColor: theme.color.green1,
            width: '70px',
            height:'auto',
            minHeight:'300px',
            textAlign: 'center',
            color: '#fff',
            fontWeight: '700',
            borderRadius: '50px',
            display: 'flex',
            flexDirection:'column'
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
              width: '70px',
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
              p: theme.spacing(1), 
              bgcolor: theme.color.white,
              position:'absolute !important', 
              right: '0' ,
              top: 0,
              transform: 'translate(100%,0)',
              minHeight:'300px',
              transition: 'all .4s ease-in-out 0s',
              fontWeight: '100',
              minWidth:'500px'
            }}
            className='ck-content'
            dangerouslySetInnerHTML={{__html:data.value?.["content_"+currentLang] || data.value?.content}}
          />
        }
    </Box>
  );
}

export default CustomNodeEnterprise;
