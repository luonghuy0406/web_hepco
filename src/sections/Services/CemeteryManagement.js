
import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function CemeteryManagement() {
    const theme = useTheme()
    const {t} = useTranslation()
    return (
        <Container 
            maxWidth={'100%'} 
            sx={{
                backgroundImage: `url(/assets/images/bg2.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'left bottom'
            }}
        >
            <Container 
                maxWidth={'xl'} 
                sx={{
                    marginTop:theme.spacing(10),
                    marginBottom:theme.spacing(10),
                }} 
            >
                <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Quản lý nghĩa trang nhân dân')}</Typography>
                {/* <Grid container spacing={2}>
                    <Grid item xs={12} container spacing={3} sx={{marginBottom:theme.spacing(4)}}>
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
                                <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                    Hepco là đơn vị được Bộ tài nguyên và Môi trường cấp giấy phép để thực hiện hoạt động thu gom, vận chuyển và xử lý chất thải y tế, nguy hại tại khu vực miền Trung Tây nguyên. Hiện chúng tôi đang xử lý chất thải y tế cho các bệnh viện lớn trên địa bàn tỉnh Thừa Thiên Huế: Bệnh viện TW Huế, Bệnh viện Đại Học Y…và chất thải y tế phát sinh từ hơn 300 cơ sở y tế hoạt động khám chữa bệnh, xét nghiệm, phòng khám bệnh.. Ngoài ra chất thải nguy hại phát sinh từ các chủ nguồn thải, hộ gia đình, cơ quan, khu công nghiệp, khu chế xuất..được chúng tôi tổ chức thu gom và vận chuyển bằng hệ thống các phương tiện chuyên dùng đến nhà máy xử lý. 
                                </Typography>
                                <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                    Công nghệ xử lý rác công nghiệp và nguy hại được thực hiện bởi hệ thống lò đốt được đầu tư 100% công nghệ từ Nhật Bản, lần đầu tiên có mặt ở Việt Nam với tổng công suất 15 tấn/ngày, đáp ứng các yêu cầu kỹ thuật, quy trình, quy định và quy chuẩn Việt Nam hiện hành về xử lý chất thải y tế nguy hại và đáp ứng tiêu chuẩn ISO 14001:2015 về hoạt động thu nhận, vận chuyển và xử lý chất thải nguy hại.
                                </Typography>
                                <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                    Với năng lực, kinh nghiệm cùng đội ngũ chuyên viên, kỹ sư, công nhân giỏi lành nghề, Hepco chắc chắn sẽ đem đến sự hài lòng cho quý khách hàng. Chúng tôi sẵn lòng cung cấp dịch vụ tốt nhất cho khách hàng trong hoạt động thu gom, vận chuyển, và xử lý chất thải y tế, chất thải nguy hại.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow:1,padding: theme.spacing(2),margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.red, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ vệ sinh công cộng')}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width:'100%',
                                        minHeight:{xs: '250px', md: '300px'},
                                        backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                        backgroundPosition:'center',
                                        backgroundSize:'cover',
                                        backgroundRepeat: 'no-repeat',
                                        borderRadius:'0 20px'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow:1,padding: theme.spacing(2),margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.red, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ thu gom, vận chuyển, xử lý rác thải sinh hoạt')}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width:'100%',
                                        minHeight:{xs: '250px', md: '300px'},
                                        backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                        backgroundPosition:'center',
                                        backgroundSize:'cover',
                                        backgroundRepeat: 'no-repeat',
                                        borderRadius:'0 20px'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow: 1,padding: theme.spacing(2),margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.green1, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ thu gom, vận chuyển, xử lý rác cồng kềnh')}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width:'100%',
                                        minHeight:{xs: '250px', md: '300px'},
                                        backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                        backgroundPosition:'center',
                                        backgroundSize:'cover',
                                        backgroundRepeat: 'no-repeat',
                                        borderRadius:'0 20px'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{ flexGrow: 1,padding: theme.spacing(2),margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.red, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ thu gom, vận chuyển rác xây dựng')}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width:'100%',
                                        minHeight:{xs: '250px', md: '300px'},
                                    
                                        backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                        backgroundPosition:'center',
                                        backgroundSize:'cover',
                                        backgroundRepeat: 'no-repeat',
                                        borderRadius:'0 20px'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow: 1,padding: theme.spacing(2),margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.green1, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ thu gom, vận chuyển, xử lý rác công nghiệp thông thường')}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width:'100%',
                                        minHeight:{xs: '250px', md: '300px'},
                                        backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                        backgroundPosition:'center',
                                        backgroundSize:'cover',
                                        backgroundRepeat: 'no-repeat',
                                        borderRadius:'0 20px'
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid> */}
            </Container>
        </Container>
    )
}
