import React, { useEffect, useRef } from 'react'
import {  useTheme } from '@emotion/react'
import { Box, Container, Grid, Typography, styled } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'

library.add(fas, faFontAwesome, faPlay)

const IconImage = styled('img')(({ theme }) => ({
    width: "70px",
    zIndex: 2
  }))
const StyledTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    width: '100%',
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    // fontSize:'42px',
    '&:after':{
        content: "''",
        border: 0,
        width: '70px',
        height: '5px',
        background: theme.color.red,
        display: 'block',
        marginTop: '5px',
        position: 'absolute',
        left: '50%',
        right: '50%',
        transform:'translateX(-50%) translateY(50%)',
    }
}));

const BlogButton = styled(Box)(({ theme }) => ({
    a: {
      color: theme.color.black,
      background: 0,
      border: 'none',
      borderRadius: '25px',
      paddingRight: '25px',
      lineHeight: '30px',
      display: 'inline-block',
      transition: 'all .4s ease-in-out 0s',
      position: 'relative',
      fontSize: '16px',
      fontWeight: 600,
      textDecoration: 'none',
      '&:hover': {
        color: theme.color.red,
        '.arrow-news': {
          color: theme.color.red,
          transform: 'translateX(20%)',
        },
      },
    },
    '.arrow-news': {
      position: 'absolute',
      top: 0,
      right: 0,
      transition: 'transform 0.5s ease',
      lineHeight: '1.5rem',
    },
  }));
export function OurServices() {
    const {t} = useTranslation()
    const theme = useTheme()
    const serviceImageRef = useRef(null)
    const serviceContentRef = useRef(null)
    const serviceData = [
        {path:`/${t('dichvu')}`, icon: 'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/ff.png',name: t('Thu gom vận chuyển xử lý rác sinh hoạt'), content: 'Hepco tự hào là đơn vị đạt tiêu chuẩn chất lượng ISO 9001:2015 trong lĩnh vực thu gom, vận chuyển và xử lý rác thải, hiện là đơn vị chủ lực cung cấp dịch vụ thu gom, vận chuyển, xử lý rác thải sinh hoạt tại các chủ nguồn thải, hộ gia đình, khu dân cư, trung tâm thương mại, cơ quan, trường học, doanh nghiệp, khu công nghiệp trên địa bàn thành phố Huế và các Huyện Thị xã trên địa  bàn tỉnh Thừa Thiên Huế. ', image: '/assets/images/mission2.jpg'},
        {path:`/${t('dichvu')}/${t('nguyhai')}`, icon: 'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/ff.png',name: t('Thu gom vận chuyển xử lý rác nguy hại'), content: 'Hepco là đơn vị được Bộ tài nguyên và Môi trường cấp giấy phép để thực hiện hoạt động thu gom, vận chuyển và xử lý chất thải y tế, nguy hại tại khu vực miền Trung Tây nguyên. Hiện chúng tôi đang xử lý chất thải y tế cho các bệnh viện lớn trên địa bàn tỉnh Thừa Thiên Huế: Bệnh viện TW Huế, Bệnh viện Đại Học Y…và chất thải y tế phát sinh từ hơn 300 cơ sở y tế hoạt động khám chữa bệnh, xét nghiệm, phòng khám bệnh.. ', image: '/assets/images/mission2.jpg'},
        {path:`/${t('dichvu')}/${t('cokhi-xaydung')}`, icon: 'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/ff.png',name: t('Xây dựng công trình hạ tầng kỹ thuật đô thị'), content: '1.	SỬA CHỮA CƠ KHÍ: Trung tâm cơ khí Hepco có năng lực sửa chữa phương tiện máy móc thiết bị phục vụ cho hoạt động sản xuất kinh doanh đồng thời cung cấp ra thị trường các loại: xe thu gom rác, xuồng chưa rác..Hepco đã không ngừng đào tạo, bồi dưỡng đội ngũ công nhân cơ khí chất lượng cao thành thạo tay nghề nhằm chủ động trong hoạt động sản xuất kinh doanh đồng thời đảm bảo đáp ứng mọi nhu cầu của khách hàng.', image: '/assets/images/mission2.jpg'},
        {path:`/${t('dichvu')}/${t('thoatnuoc-chieusang')}`, icon: 'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/ff.png',name: t('Dịch vụ điện chiếu sáng - thoát nước'), content: 'Với kinh nghiệm thực tiễn nhiều năm thực hiện công tác thi công, quản lý, duy tu, bảo dưỡng hệ thống thoát nước, vỉa hè, hệ thống điện chiếu sáng công cộng và trang trí đường phố, Hepco là đơn vị uy tín được giao nhiệm vụ, đặt hàng, đấu thầu từ chính quyền địa phương trong các hạng mục công ích về lĩnh vực thoát nước và điện chiếu sáng, ngoài ra còn tham gia thực hiện các công trình hạ tầng kỹ thuật đô thị lớn nhỏ trên địa bàn tỉnh Thừa Thiên Huế.', image: '/assets/images/mission2.jpg'},
        {path:`/${t('dichvu')}/${t('quantrang')}`, icon: 'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/ff.png',name: t('Dịch vụ quản lý nghĩa trang nhân dân'), content: '', image: '/assets/images/service.jpg'},
        {path:`/${t('dichvu')}/${t('kinhdoanhkhac')}`, icon: 'https://rstheme.com/products/wordpress/planteo/wp-content/uploads/2019/12/ff.png',name: t('Dịch vụ kinh doanh doanh khác'), content: 'Bên cạnh những dịch vụ chủ lực, chúng tôi còn cung cấp những dịch vụ và giải pháp giúp duy trì môi trường sạch đẹp với chất lượng và mức giá hợp lý nhất.', image: '/assets/images/mission2.jpg'},
      ]
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        deplay: 1000
    });
    useEffect(() => {
        if(inView){
            if (serviceImageRef.current) {
                serviceImageRef.current.classList.add('animate__animated','animate__fadeInLeft');
            }
            if (serviceContentRef.current) {
                serviceContentRef.current.classList.add('animate__animated','animate__fadeInRight');
            }
        }
    }, [inView]);
  return (  
    <Box
    sx={{
        backgroundImage: `url(/assets/images/bg2.png)`,
        backgroundRepeat: `no-repeat`,
    }}
    >
        <Container maxWidth='100%%'sx={{mt:theme.spacing(5), py: theme.spacing(5)}}>
            <Grid container>
                <Grid ref={serviceImageRef} item xs={0} md ={0} lg={4} sx={{p:theme.spacing(3), display:{xs: 'none', md:'none', lg:'block'}}}>
                    <Box sx={{
                        p:theme.spacing(6),
                        backgroundImage:"url('/assets/images/service.jpg') !important",
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        backgroundRepeat:"no-repeat",
                        position:"relative",
                        height:"100%",
                        minHeight:"400px",
                        borderRadius: "10px"
                    }}/>
                </Grid>
                <Grid ref={serviceContentRef} item conntainer xs={12} md={0} lg={8} sx={{position:'relative',p:theme.spacing(3)}}>
                    <StyledTypography ref={ref} variant='h4'>
                        {t('Dịch vụ của chúng tôi')}
                    </StyledTypography>
                    <Box>
                    <Grid container sx={{pt: theme.spacing(4), pl: theme.spacing(4)}} spacing={6}>
                        {
                            serviceData.map((data,index)=>{
                                return(
                                    <ServiceItem data={data} key={'service-item'+index}/>
                                )
                            })
                        }     
                    </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

const ServiceItem = ({data}) =>{
    const theme = useTheme()
    const {t} = useTranslation()
    return (
        <Grid item xs={12} sm={6} md={4} lg={4} sx={{padding: theme.spacing(3)}}>
            <Link to={data.path}>
                <Box sx={{
                        padding: theme.spacing(3),
                        boxShadow: '0 0 15px #eee', 
                        borderRadius: "10px", 
                        height: '100%',
                        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(9,9,121,0.1) 70%, rgba(0,212,255,0) 100%), url("${data.image}")`, 
                        backgroundPosition: "center", 
                        backgroundRepeat: "no-repeat", 
                        backgroundSize: "cover",
                        display: "flex", 
                        alignItems: "flex-end",
                        minHeight: "350px",
                        "&:hover" : {
                            backgroundImage : `linear-gradient(0deg, #f48123 0%, rgba(9,9,121,0.1) 70%, rgba(0,212,255,0)), url("${data.image}")`
                        }
                    }} 
                    className={"our-service-wrap"}
                >
                    <Grid container sx={{position:'relative', zIndex:2}}>
                        <Grid xs={12} >
                            <Typography variant='h5' className='text-service' fontWeight={700} py={theme.spacing(2)} color={theme.color.white}>{data.name}</Typography>
                        </Grid>
                        <Grid xs={12} pb={theme.spacing(2)}>
                            <Box
                                sx={{
                                    overflow: 'hidden',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '4',
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                <Typography textAlign={'justify'} fontWeight={500} color={theme.color.white}>
                                    {data.content}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Link>
        </Grid>
    )
}