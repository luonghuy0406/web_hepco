import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Mandates() {
    const theme = useTheme()
    const {t} = useTranslation()
    return (
        <Container 
            maxWidth={'xl'} 
            sx={{
                marginTop:theme.spacing(10),
                marginBottom:theme.spacing(10),
            }} 
        >
            <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Chức năng hoạt động')}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} container spacing={2} sx={{marginBottom:theme.spacing(4)}}>
                    <Grid item xs={0} md={6}>
                        <Box
                            sx={{
                                width:'100%',
                                height:'100%',
                                minHeight:{xs: 0, md: '400px'},
                                backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                backgroundPosition:'70%',
                                backgroundSize:'cover',
                                backgroundRepeat: 'no-repeat',
                                borderRadius:'10px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={{padding: theme.spacing(2)}} >
                            <Typography sx={{marginBottom:theme.spacing(3)}} variant='h5' fontWeight={700} color={theme.color.green1}>{t('Lĩnh vực Vệ Sinh Môi Trường')}</Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Thu Gom và Vận Chuyển xử lý Chất Thải:</b> HEPCO có chức năng thu gom và vận chuyển và xử lý chất thải sinh hoạt từ các nguồn khác nhau như hộ gia đình, tổ chức, doanh nghiệp, khu công nghiệp, trường học, bệnh viện..; chất thải y tế, nguy hại, xây dựng..
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Vệ sinh công cộng:</b> Thực hiện các công tác vệ sinh đường phố, khu công nghiệp, khu đô thị..; tưới nước rửa đường; quét hút bụi..
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2} sx={{marginBottom:theme.spacing(4)}}>
                    <Grid item xs={12} md={6} >
                        <Box sx={{padding: theme.spacing(2)}}>
                            <Typography sx={{marginBottom:theme.spacing(3)}} variant='h5' fontWeight={700} color={theme.color.green1}>{t('Tư Vấn, thi công, xây dựng và quản lý duy tu bảo dưỡng các công trình công cộng và hạ tầng đô thị')}</Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Tư Vấn Thiết Kế:</b> HEPCO có năng lực  tư vấn thiết kế cho các công trình hạ tầng như hệ thống thoát nước, vỉa hè, và lề đường, điện chiếu sáng công cộng và trang trí đường phố.
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Thi Công Công Trình:</b> Công ty nhận thầu và thi công các công trình xây dựng, thoát nước lề đường, vỉa hè, hệ thống chiếu sáng công cộng, hệ thống đèn tín hiệu giao thông, hệ thống đèn trang trí đường phố..
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Quản lý, duy Tu và bảo dưỡng hệ thống hạ tầng đô thị:</b> HEPCO hiện đang được chính quyền đô thị đặt hàng quản lý và duy tu bảo dưỡng hệ thống thoát nước, vỉa hè, lề đường, hệ thống điện chiếu sáng và trang trí đường phố.
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Quản Lý Nghĩa Trang Nhân dân:</b> Công ty được UBND tỉnh giao trách nhiệm nhiệm quản lý, duy tu nghĩa trang nhân dân. Hiện công ty đang thực hiện quản lý 03 Nghĩa trang…
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={0} md={6}>
                        <Box
                            sx={{
                                width:'100%',
                                height:'100%',
                                minHeight:{xs: 0, md: '400px'},
                                backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                backgroundPosition:'70%',
                                backgroundSize:'cover',
                                backgroundRepeat: 'no-repeat',
                                borderRadius:'10px'
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2} sx={{marginBottom:theme.spacing(4)}}>
                    <Grid item xs={0} md={6}>
                        <Box
                            sx={{
                                width:'100%',
                                height:'100%',
                                minHeight:{xs: 0, md: '400px'},
                                backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                backgroundPosition:'70%',
                                backgroundSize:'cover',
                                backgroundRepeat: 'no-repeat',
                                borderRadius:'10px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={{padding: theme.spacing(2)}} >
                            <Typography sx={{marginBottom:theme.spacing(3)}} variant='h5' fontWeight={700} color={theme.color.green1}>{t('Kinh doanh khác')}</Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Hút Hầm Vệ Sinh:</b> Hepco cung cấp dịch vụ hút hầm vệ sinh chuyên nghiệp, bao gồm việc hút chất thải từ hầm, bể phốt và các hệ thống thoát nước, đảm bảo rằng hệ thống thoát nước hoạt động hiệu quả và an toàn.
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Thông Tắc Cống:</b> Dịch vụ này liên quan đến việc loại bỏ chất tắc đường ống và cống để đảm bảo nước thoát ra khỏi các hệ thống đô thị diễn ra một cách trơn tru.
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Cho Thuê Nhà Vệ Sinh:</b> Hepco cung cấp các giải pháp cho việc thuê các nhà vệ sinh công cộng di động, giúp duy trì vệ sinh tại các sự kiện, công trình xây dựng hoặc các nơi công cộng.
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Bán và Cho Thuê Xuồng, Thiết Bị Thu Gom Rác, Thùng Rác:</b> Cung cấp xuồng, thiết bị thu gom rác và thùng rác chất lượng cao cho việc thu gom và vận chuyển chất thải từ các khu vực nước.
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Tưới Nước và Chở Xe Nước:</b> Hepco cung cấp dịch vụ tưới nước cho các khu vực cây xanh và cung cấp nước thông qua việc chở xe nước đến các địa điểm cần thiết, giúp đáp ứng nhu cầu nước của cộng đồng.
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                <b>Các lĩnh vực khác trong giấy phép đăng ký kinh doanh..</b>
                            </Typography>
                            
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Typography sx={{marginBottom:theme.spacing(4), marginTop:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Giấy phép - Chứng nhận')}</Typography>
        
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            width:'100%',
                            height:'100%',
                            borderRadius:'10px'
                        }}
                    >
                        <img src='/assets/images/iso1.jpeg' width={'100%'} alt='giay phep 1'/>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            width:'100%',
                            height:'100%',
                            borderRadius:'10px'
                        }}
                    >
                        <img src='/assets/images/iso1.jpeg' width={'100%'} alt='giay phep 1'/>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            width:'100%',
                            height:'100%',
                            borderRadius:'10px'
                        }}
                    >
                        <img src='/assets/images/iso1.jpeg' width={'100%'} alt='giay phep 1'/>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            width:'100%',
                            height:'100%',
                            borderRadius:'10px'
                        }}
                    >
                        <img src='/assets/images/iso1.jpeg' width={'100%'} alt='giay phep 1'/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
