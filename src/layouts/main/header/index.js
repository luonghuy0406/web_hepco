import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import {
  Box,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { LanguagePopover } from './LanguagePopover'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import MenuNav from './MenuNav';




const InvoiceBox = styled('div')(({ theme, sticky }) => ({
  backgroundColor: theme.palette.green1,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(6),
  width:"100%",
  '&::before': {
    content: '""',
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100%',
    borderLeft: '50px solid transparent',
    zIndex: '1',
    transition: 'all .5s ease',
    width:'inherit'
  },
  [theme.breakpoints.down('md')]: {
    height: '60px', // Set height for breakpoint `xs`
    '&::before': {
      borderBottom: `60px solid ${theme.color.green1}`,
    }
  },
  [theme.breakpoints.up('md')]: {
    height: '70px', // Set height for breakpoint `md` and above
    '&::before': {
      borderBottom: `70px solid ${sticky ? theme.color.green1 : theme.color.gray1}`,
    }
  },
}));


export default function Header() {
    const {t} = useTranslation()
    const [openRight, setOpenRight] = useState(false);
    const toggleDrawer = (open) => (event) => {setOpenRight(open);};
    const theme = useTheme();
    const refSticky = useRef()
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 190) {
          refSticky.current.style.display = "block";
          refSticky.current.style.zIndex = "99999";
        }else{
          refSticky.current.style.display = "none";
        }
      };
    
      $(window).on("scroll", handleScroll);
    
      return () => {
        $(window).off("scroll", handleScroll);
      };
    }, []);
    const pages = [
      {name: t('Trang chủ'), path:'',child:[]},
      {name: t('Giới thiệu'), path:'/gioithieu',child:[]},
      {name: t('Dịch vụ'), path:'/dichvu',child:[]},
      {name: t('Tin tức'), path:'/tintuc',child:[]},
      {name: t('Dự án'), path:'/duan',child:[]},
      {name: t('Cổ đông'), path:'/codong',child:[]},
      {name: t('Câu hỏi'), path:'/cauhoi',child:[]},
      {name: t('Liên hệ'), path:'/lienhe',child:[]}
    ]
    return (
      <>
      <Box
          component="header"
          sx={{
            
            backdropFilter: 'blur(6px)',
            backgroundColor: (theme)=>theme.color.white,
            position: 'relative',
            width: {lg: '100%'},
            zIndex: '1',
            padding: { xs: '0',sm: "0" , md:"30px 0 50px", lg: "30px 0 50px" }
          }}
        >
        {/*Header above */}
        <Container maxWidth='xl' sx={{display: { xs: 'none',sm: 'none', md:'block', lg: 'block' }}}>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              spacing={2}
              sx={{
                minHeight: { xs: '60px',md: '60px', lg: '60px' },
              }}
            >
              <Stack
                alignItems="center"
                direction="row"
                spacing={2}
              >
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                >
                  <Link href={'/'} legacyBehavior>
                        <img src={'./assets/logo.png'} alt='hepco logo' width={70} height={70} />
                    </Link>
                </Stack>
              </Stack>
              <Stack sx={{textAlign:'center',display:{xs:'none', md:'none', lg:'block'}}}>
                <Typography variant='h5' fontWeight={'bold'} >
                  {t('CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ')}
                </Typography>
              </Stack>
              <Stack
                alignItems="center"
                direction="row"
                spacing={2}
              >
                <Grid container alignItems={"center"}>
                    <Grid item xs={3} sx={{marginBottom:'-5px'}}>
                      <img src={'./assets/icons/ic_phone.svg'} alt='icon phone' width={35} />
                    </Grid>
                    <Grid item xs={9} container>
                        <Grid item xs={12}>
                          <Typography fontWeight={'bold'} sx={{fontSize:'16px'}}>{t('Hotline')}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography sx={{fontSize:'16px',fontFamily:(theme)=>theme.typography.MuktaMahee}}>(0234) 3997799</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <LanguagePopover/>
              </Stack>
            </Stack>
        </Container>
        {/* header below */}
        <Box
          sx={{
            position: { xs: 'relative',sm: 'relative', md:'absolute', lg: 'absolute' },
            width: {lg: '100%'},
            Right: '0',
            right: '0',
            bottom: { xs: '0', md:'-35px',sm: '0', lg: '-35px' }
          }}
        >
          <Container maxWidth={'xl'} sx={{padding: { xs: '0 !important', sm:'0 !important'}}}>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{
                  height: { xs: '60px',sm: '60px', md:'70px'},
                  backgroundColor: {
                    xs: theme.color.white, // Set background color for breakpoint `xs`
                    sm: theme.color.white, // Set background color for breakpoint `sm`
                    md: theme.color.green1, // Set background color for breakpoint `md`
                  },
                  borderRadius: { xs: '0',sm: '0', md:'5px', lg: '5px' },
                  boxShadow: '0 0 20px -10px rgba(0,0,0,.8)'
                }}
              >
                <Stack
                  spacing={2}
                  px={2}
                  alignItems="center"
                  justifyContent={"center"}
                  sx={{display: { xs: 'flex',sm: 'flex', md:'none', lg: 'none' }}}
                >
                  <Link href={'/'} legacyBehavior>
                      <img src={'./assets/logo.png'} alt='hepco logo' width={45} height={45} />
                  </Link>
                </Stack>
                <Stack
                  spacing={1}
                  px={2}
                  alignItems="center"
                  direction="row"
                  sx={{display: { xs: 'none',sm: 'none', md:'flex', lg: 'flex' }}}
                >
                  {
                    pages.map((page)=>{
                      return <MenuNav key={page.path} page={page}/>
                    })
                  }
                </Stack>
                <Stack
                  spacing={1}
                  px={2}
                  justifyContent="flex-end"
                  flexGrow={1}
                  direction="row"
                  sx={{display: { xs: 'flex',sm: 'flex', md:'none', lg: 'none' }}}
                >
                  <MenuMobile toggleDrawer={toggleDrawer} openRight={openRight} pages={pages}/>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                  sx={{position:'relative'}}
                >
                  <InvoiceBox theme={theme}>
                      <Box sx={{zIndex:'1',position:'relative'}}>
                        <a href={'http://hepco.com.vn/hoadondientu'} target='_blank' legacyBehavior style={{textDecoration:'none'}}>  
                          <Typography fontWeight={'bold'} color={(theme)=>theme.color.white} fontSize={{xs: '13px', md:'14px', lg:'16px'}} textTransform={'uppercase'}>{t('Tra cứu hoá đơn')}</Typography>
                        </a>
                      </Box>
                  </InvoiceBox>
                </Stack>
              </Stack>
          </Container>
        </Box>
      </Box>

      {/* header sticky */}
      <Container ref={refSticky} maxWidth={'100%'} sx={{padding:'0 !important',position:'fixed',top:'0', display:'none'}} className='menu-sticky sticky'>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{
              height: { xs: '60px',sm: '60px', md:'70px'},
              backgroundColor: theme.color.white,
              borderRadius: 0
            }}
          >
            <Stack
              spacing={2}
              px={2}
              alignItems="center"
              justifyContent={"center"}
            >
              <Link href={'/'} legacyBehavior>
                  <img src={'./assets/logo.png'} alt='hepco logo' width={60} height={60} />
              </Link>
            </Stack>
            <Stack
              spacing={1}
              px={2}
              alignItems="center"
              direction="row"
              sx={{display: { xs: 'none',sm: 'none', md:'flex', lg: 'flex' }}}
            >
              {
                pages.map((page)=>{
                  return <MenuNav key={page.path} page={page} color="black"/>
                })
              }
            </Stack>
            <Stack
              spacing={1}
              px={2}
              justifyContent="flex-end"
              flexGrow={1}
              direction="row"
              sx={{display: { xs: 'flex',sm: 'flex', md:'none', lg: 'none' }}}
            >
              <MenuMobile toggleDrawer={toggleDrawer} openRight={openRight} pages={pages}/>
            </Stack>

            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{position:'relative'}}
            >
              <InvoiceBox theme={theme} sticky={true}>
                  <Box sx={{zIndex:'1',position:'relative'}}>
                    <a href={'http://hepco.com.vn/hoadondientu'} target='_blank' legacyBehavior style={{textDecoration:'none'}}>  
                      <Typography fontWeight={'bold'} color={(theme)=>theme.color.white} fontSize={{xs: '13px', md:'14px', lg:'16px'}} textTransform={'uppercase'}>{t('Tra cứu hoá đơn')}</Typography>
                    </a>
                  </Box>
              </InvoiceBox>
            </Stack>
          </Stack>
      </Container>
    </>
    );
}

function MenuMobile({toggleDrawer,openRight,pages}){
  const theme = useTheme()
  return (
    <>
    <IconButton
      size="large"
      onClick={toggleDrawer(true)}
      sx={{ p: 0 ,display: { xs: "block",md: "block", lg: "none" ,color:(theme)=>theme.color.green1}}}
    >
      <MenuIcon sx={{color:(theme)=>theme.color.green1}}/>
    </IconButton>
    <Drawer
      anchor={'right'}
      open={openRight}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 350 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <IconButton
          size="large"
          onClick={toggleDrawer(false)}
        >
          <CloseIcon sx={{color:(theme)=>theme.color.green1}}/>
        </IconButton>
        <List>
          {
          pages.map((page) => {
            return (
              <Box key={page.name+"nav"} >
                <Link to={page.path} style={{ textDecoration:"none", color: 'black'}}>
                    <ListItem >
                        <ListItemButton
                          sx={{
                            color: theme.color.black,
                            '&:hover': {
                              color: theme.color.green1,
                            },
                          }}
                        >
                            <Typography  
                            sx={{fontWeight:'700'}}
                            >
                              {page.name} 
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Divider sx={{boderColor:'rgb(0 0 0 / 4%)'}}/>
              </Box>
          )})
          }
        </List>
      </Box>
    </Drawer>
    </>
  )
}