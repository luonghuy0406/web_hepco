import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import {
  AccordionSummary,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { LanguagePopover } from './LanguagePopover'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import MenuNav from './MenuNav';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      borderBottom: `60px solid ${sticky ? theme.color.green1 : theme.color.white}`,
    }
  },
  [theme.breakpoints.up('md')]: {
    height: '70px', // Set height for breakpoint `md` and above
    '&::before': {
      borderBottom: `70px solid ${sticky ? theme.color.green1 : theme.color.white}`,
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
          refSticky.current.style.zIndex = "2";
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
      {
        name: t('Giới thiệu'), 
        path:`/${t('gioithieu')}`,
        child:[
          {name: t('Về Hepco'), path:'',child:[]},
          {name: t('Chức năng - Giấy phép'), path:`/${t('chucnang')}`,child:[]},
          {name: t('Sơ đồ tổ chức'), path:`/${t('sodo')}`,child:[]},
          {name: t('Thành tựu đạt được'), path:`/${t('thanhtuu')}`,child:[]},
          {name: t('Hồ sơ năng lực'), path:`/${t('nangluc')}`,child:[]},
          {name: t('Thư viện ảnh'), path:`/${t('thuvien')}`,child:[]}
        ]
      },
      {
        name: t('Dịch vụ'), 
        path:`/${t('dichvu')}`,
        child:[
          {name: t('Thu gom vận chuyển xử lý rác sinh hoạt'), path:'',child:[]},
          {name: t('Thu gom vận chuyển xử lý rác nguy hại'), path:`/${t('nguyhai')}`,child:[]},
          {name: t('Cơ khí - Xây dựng'), path:`/${t('cokhi-xaydung')}`,child:[]},
          {name: t('Thoát nước - Điện chiếu sáng'), path:`/${t('thoatnuoc-chieusang')}`,child:[]},
          {name: t('Quản trang'), path:`/${t('quantrang')}`,child:[]},
          {name: t('Kinh doanh khác'), path:`/${t('kinhdoanhkhac')}`,child:[]},
        ]
      },
      {
        name: t('Tin tức'), 
        path:`/${t('tintuc')}`,
        child:[
          {name: t('Hoạt động công ty'), path:`/${t('hoatdong')}`,child:[]},
          {name: t('Đảng Đoàn thể'), path:`/${t('dangdoan')}`,child:[]},
          {name: t('Pháp luật môi trường'), path:`/${t('phapluat')}`,child:[]},
          {name: t('Tin tức khác'), path:`/${t('tinkhac')}`,child:[]},
        ]
      },
      {
        name: t('Dự án'), 
        path:`/${t('duan')}`,
        child:[
          {name: t('Dự án đầu tư'), path:`/${t('dautu')}`,child:[]},
          {name: t('Hợp tác trong nước'), path:`/${t('trongnuoc')}`,child:[]},
          {name: t('Hợp tác nước ngoài'), path:`/${t('nuocngoai')}`,child:[]},
        ]
      },
      {
        name: t('Cổ đông'), 
        path:`/${t('codong')}`,
        child:[
          {name: t('Thông báo'), path:`/${t('thongbao')}`,child:[]},
          {name: t('Báo cáo'), path:`/${t('baocao')}`,child:[]},
        ]
    },
      {name: t('Câu hỏi'), path:`/${t('cauhoi')}`,child:[]},
      {name: t('Liên hệ'), path:`/${t('lienhe')}`,child:[]}
    ]
    return (
      <>
      <Box
          className="animate__animated animate__fadeInDown"
          component="header"
          sx={{
            backdropFilter: 'blur(6px)',
            backgroundColor: (theme)=>theme.color.white,
            position: 'relative',
            width: {lg: '100%'},
            zIndex: '1',
          }}
        >
        {/* header below */}
        <Box
          sx={{
            width: '100%'
          }}
        >
          <Container maxWidth={'100%'} sx={{padding: { xs: '0 !important', sm:'0 !important'}}}>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{
                  height: { xs: '60px',sm: '60px', md:'70px'},
                  backgroundColor: '#3aa03db3',
                  boxShadow: '0 0 20px -10px rgba(0,0,0,.8)',
                  position:'fixed',
                  left: '0',
                  right:'0'
                }}
              >
                <Stack
                  spacing={2}
                  px={2}
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <Link to={'/'}>
                      <img src={'/assets/logo2.png'} alt='hepco logo' width={55} height={55} />
                  </Link>
                </Stack>
                <Stack
                  spacing={1}
                  px={2}
                  alignItems="center"
                  direction="row"
                  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }}}
                >
                  {
                    pages.map((page)=>{
                      return <MenuNav key={page.path} page={page}/>
                    })
                  }
                  <MenuNav key={'invoice'} page={{"name":t("Hoá đơn"), "path": 'http://hepco.com.vn/hoadondientu', "child":[]}}/>
                </Stack>
                <Stack
                  spacing={1}
                  px={2}
                  justifyContent="flex-end"
                  flexGrow={1}
                  direction="row"
                  sx={{display: { xs: 'flex',sm: 'flex', md:'flex', lg: 'none' }}}
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
                        <Grid container alignItems={"center"}>
                          <Grid item xs={0} lg={3}  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }, marginBottom:'-5px'}}>
                          <img src={'/assets/icons/ic_phone.svg'} alt='icon phone' width={35} />
                          </Grid>
                          <Grid item xs={0} lg={6}  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }}} container>
                              <Grid item xs={12}>
                                <Typography fontWeight={'bold'} sx={{fontSize:'16px'}} color={theme.color.red}>{t('Hotline')}</Typography>
                              </Grid>
                              <Grid item xs={12} >
                                <Typography sx={{fontSize:'16px',fontFamily:(theme)=>theme.typography.MuktaMahee}} color={theme.color.red}>(0234) 3997799</Typography>
                              </Grid>
                          </Grid>
                          <Grid item xs={12} lg={3}> 
                            <Box sx={{display:'flex', alignItems:'center', justifyContent:'end'}}>
                              <LanguagePopover/>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                  </InvoiceBox>
                </Stack>
              </Stack>
          </Container>
        </Box>
      </Box>

      {/* header sticky */}
      <Container 
        ref={refSticky} 
        maxWidth={'100%'} 
        sx={{padding:'0 !important',position:'fixed',top:'0', display:'none'}} 
        className='menu-sticky sticky'
      >
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
              <Link to={'/'}>
                  <img src={'/assets/logo1.png'} alt='hepco logo' width={60} height={60} />
              </Link>
            </Stack>
            <Stack
              spacing={1}
              px={2}
              alignItems="center"
              direction="row"
              sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }}}
            >
              {
                pages.map((page)=>{
                  return <MenuNav key={page.path} page={page} color="black"/>
                })
              }
              <MenuNav key={'invoice'} page={{name:t("Hoá đơn"), path: 'http://hepco.com.vn/hoadondientu', child:[]}} color="black"/>
            </Stack>
            <Stack
              spacing={1}
              px={2}
              justifyContent="flex-end"
              flexGrow={1}
              direction="row"
              sx={{display: { xs: 'flex',sm: 'flex', md:'flex', lg: 'none' }}}
            >
              <MenuMobile toggleDrawer={toggleDrawer} openRight={openRight} pages={pages} sticky={true}/>
            </Stack>

            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{position:'relative'}}
            >
              <InvoiceBox theme={theme} sticky={true}>
                  <Box sx={{zIndex:'1',position:'relative'}}>
                    <Grid container alignItems={"center"}>
                      <Grid item xs={0} lg={3}  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }, marginBottom:'-5px'}}>
                        <img src={'/assets/icons/ic_phone_white.svg'} alt='icon phone' width={35} />
                      </Grid>
                      <Grid item xs={0} lg={6}  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }}} container>
                          <Grid item xs={12}>
                            <Typography fontWeight={'bold'} sx={{fontSize:'16px'}} color={theme.color.white}>{t('Hotline')}</Typography>
                          </Grid>
                          <Grid item xs={12} >
                            <Typography sx={{fontSize:'16px',fontFamily:(theme)=>theme.typography.MuktaMahee}} color={theme.color.white}>(0234) 3997799</Typography>
                          </Grid>
                      </Grid>
                      <Grid item xs={12} lg={3}> 
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'end'}}>
                          <LanguagePopover/>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
              </InvoiceBox>
            </Stack>
          </Stack>
      </Container>
    </>
    );
}



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
      border: `none`
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "0px 16px"
}));

function MenuMobile({toggleDrawer,openRight,pages,sticky}){
  const theme = useTheme()
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
    <IconButton
      size="large"
      onClick={toggleDrawer(true)}
      sx={{ p: 0 ,display: { xs: "block",md: "block", lg: "none" ,color:(theme)=>(sticky? theme.color.green1 : theme.color.white)}}}
    >
      <MenuIcon sx={{color:(theme)=>(sticky? theme.color.green1 : theme.color.white)}}/>
    </IconButton>
    <Drawer
      anchor={'right'}
      open={openRight}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 350 }}
        role="presentation"
        // onClick={toggleDrawer(false)}
      >
        <IconButton
          size="large"
          onClick={toggleDrawer(false)}
        >
          <CloseIcon sx={{color:(theme)=>theme.color.red}}/>
        </IconButton>
        <Box sx={{padding: theme.spacing(2)}}>
          {
          pages.map((page) => {
            return (
              <Accordion key={page.name+"nav"} expanded={expanded === `pannel${page.name}`} onChange={handleChange(`pannel${page.name}`)}>
                  <AccordionSummary sx={{padding:'10px 0',color: expanded === `pannel${page.name}` ? theme.color.red : theme.color.black}}  expandIcon={page.child?.length > 0 ? <ExpandMoreIcon /> : <></>} aria-controls={`pannel${page.name}d-content`} id={`pannel${page.name}d-header`}>
                     <Link onClick={toggleDrawer(false)} to={page.path} style={{ textDecoration:"none", color: 'black'}}>
                      <Typography  
                          sx={{
                            fontWeight: 700,
                            color: theme.color.black,
                            '&:hover': {
                              color: theme.color.red,
                            },
                          }}
                          >
                            {page.name} 
                          </Typography>
                      </Link>
                  </AccordionSummary>
                  <AccordionDetails>
                      {
                        page.child.map((child)=>{
                          return (
                          <Link onClick={toggleDrawer(false)} key={`${page.path}${child.path}`} to={`${page.path}${child.path}`} style={{ textDecoration:"none", color: 'black', padding:'10px'}}>
                            <Typography  
                                sx={{
                                  fontWeight: 700,
                                  color: theme.color.black,
                                  '&:hover': {
                                    color: theme.color.red,
                                  },
                                }}
                                >
                                  {child.name} 
                              </Typography>
                          </Link>
                          )
                        })
                      }
                  </AccordionDetails>
              </Accordion>
          )})
          }
        </Box>
      </Box>
    </Drawer>
    </>
  )
}