import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function MechanicsConstruction() {
    const theme = useTheme()
    const {t} = useTranslation()
    return (
        <>
         <Container 
            maxWidth={'100%'} 
            sx={{
                padding:0,
                backgroundImage: 'url(https://html.themexriver.com/it-firm/images/background/pattern-19.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center'
            }}
        >
            <Container 
                maxWidth={'xl'} 
                sx={{
                    marginTop:theme.spacing(10),
                    // marginBottom:theme.spacing(10),
                }} 
            >
                <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Xây dựng công trình hạ tầng kỹ thuật đô thị')}</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} container spacing={3}>
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
                                <Typography variant="h5" sx={{marginBottom:theme.spacing(2)}} fontWeight={700} color={theme.color.red}>
                                    1. Sữa chữa cơ khí
                                </Typography>
                                <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                    Trung tâm cơ khí Hepco có năng lực sửa chữa phương tiện máy móc thiết bị phục vụ cho hoạt động sản xuất kinh doanh đồng thời cung cấp ra thị trường các loại: xe thu gom rác, xuồng chưa rác..Hepco đã không ngừng đào tạo, bồi dưỡng đội ngũ công nhân cơ khí chất lượng cao thành thạo tay nghề nhằm chủ động trong hoạt động sản xuất kinh doanh đồng thời đảm bảo đáp ứng mọi nhu cầu của khách hàng.
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Box sx={{flexGrow:1,padding: theme.spacing(1), borderRadius: '20px 0', backgroundColor:theme.color.green1, width: '100%'}}>
                                            <Typography variant="h6" color={theme.color.white} textAlign={"center"} fontWeight={700}>{t('Dịch vụ sửa chữa máy móc, cơ khí, ô tô')}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box
                                            sx={{
                                                width:'100%',
                                                height:'auto',
                                                aspectRatio: '1',
                                                backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                                backgroundPosition:'70%',
                                                backgroundSize:'cover',
                                                backgroundRepeat: 'no-repeat',
                                                borderRadius:'10px'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box
                                            sx={{
                                                width:'100%',
                                                height:'auto',
                                                aspectRatio: '1',
                                                backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                                backgroundPosition:'70%',
                                                backgroundSize:'cover',
                                                backgroundRepeat: 'no-repeat',
                                                borderRadius:'10px'
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <Box sx={{padding: theme.spacing(2)}} >
                                <Typography variant="h5" sx={{marginBottom:theme.spacing(2)}} fontWeight={700} color={theme.color.red}>
                                    2. Xây dựng công trình hạ tầng kỹ thuật đô thị
                                </Typography>
                                <Grid container spacing={5}> 
                                    <Grid item xs={12} md={6}>
                                        <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                            Hepco có chức năng tư vấn thiết kế và nhận thầu thi công các công trình hạ tầng kỹ thuật đô thị, tập trung vào các lĩnh vực như hệ thống thoát nước, lề đường vỉa hè và điện chiếu sáng đô thị, khu dân cư... Với nhiều năm kinh nghiệm trong ngành xây dựng hạ tầng kỹ thuật đô thị, cùng với đội ngũ kỹ sư nhiều kinh nghiệm, chúng tôi tự hào về năng lực của mình để cung cấp các dịch vụ chất lượng và đáng tin cậy cho các công trình, dự án.
                                        </Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Box sx={{flexGrow:1,padding: theme.spacing(1), borderRadius: '20px 0', backgroundColor:theme.color.green1, width: '100%'}}>
                                                    <Typography variant="h6" color={theme.color.white} textAlign={"center"} fontWeight={700}>{t('Dịch vụ xây dựng dân dụng, xây dựng công trình công cộng')}</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box
                                                    sx={{
                                                        width:'100%',
                                                        height:'auto',
                                                        aspectRatio: '1',
                                                        backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                                        backgroundPosition:'70%',
                                                        backgroundSize:'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        borderRadius:'10px'
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box
                                                    sx={{
                                                        width:'100%',
                                                        height:'auto',
                                                        aspectRatio: '1',
                                                        backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                                        backgroundPosition:'70%',
                                                        backgroundSize:'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        borderRadius:'10px'
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Box
                                                    sx={{
                                                        width:'100%',
                                                        height:'auto',
                                                        aspectRatio: '1',
                                                        backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                                        backgroundPosition:'70%',
                                                        backgroundSize:'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        borderRadius:'10px'
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6} container spacing={2}>
                                        <Grid item xs={12}>
                                            <Box sx={{display:'flex'}}>
                                                <Box sx={{flexGrow:1,padding: theme.spacing(1),minWidth: '100px',display:'flex', alignItems:'center', borderRadius: '20px 0', backgroundColor:theme.color.red, alignItems:"center"}}>
                                                    <Typography variant="h6" color={theme.color.white} textAlign={"center"} fontWeight={700}>{t('Tư vấn thiết kế')}</Typography>
                                                </Box>
                                                <Box sx={{paddingLeft: "20px",display:'flex', alignItems: 'center'}}>
                                                    <Typography textAlign={"justify"} fontWeight={500}>Chúng tôi có đội ngũ kiến trúc sư, kỹ sư và những chuyên gia giàu kinh nghiệm trong lĩnh vực thiết kế. Chúng tôi không chỉ tập trung vào việc tạo ra các thiết kế sáng tạo, mà còn chú trọng đến tính khả thi kỹ thuật và tiết kiệm chi phí. Luôn nghiên cứu và áp dụng công nghệ tiên tiến để tối ưu hóa các thiết kế để đáp ứng mọi yêu cầu đặt ra.</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box sx={{display:'flex'}}>
                                                <Box sx={{flexGrow:1,padding: theme.spacing(1),minWidth: '100px',display:'flex', alignItems:'center', borderRadius: '20px 0', backgroundColor:theme.color.green1, alignItems:"center"}}>
                                                    <Typography variant="h6" color={theme.color.white} textAlign={"center"} fontWeight={700}>{t('Nhận thầu thi công')}</Typography>
                                                </Box>
                                                <Box sx={{paddingLeft: "20px",display:'flex', alignItems: 'center'}}>
                                                    <Typography textAlign={"justify"} fontWeight={500}>Hepco có đội ngũ nhân lực giàu kinh nghiệm và có khả năng thực hiện các dự án từ nhỏ đến lớn. Chúng tôi luôn tuân thủ các tiêu chuẩn an toàn và chất lượng cao nhất trong quá trình thi công. Hepco đã từng có kinh nghiệm thi công các công trình hạ tầng kỹ thuật đô thị bao gồm các dự án thoát nước, các công trình dân dụng.</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box sx={{display:'flex'}}>
                                                <Box sx={{flexGrow:1,padding: theme.spacing(1),minWidth: '100px',display:'flex', alignItems:'center', borderRadius: '20px 0', backgroundColor:theme.color.red, alignItems:"center"}}>
                                                    <Typography variant="h6" color={theme.color.white} textAlign={"center"} fontWeight={700}>{t('Cam kết chất lượng')}</Typography>
                                                </Box>
                                                <Box sx={{paddingLeft: "20px",display:'flex', alignItems: 'center'}}>
                                                    <Typography textAlign={"justify"} fontWeight={500}>Hepco cam kết đem đến chất lượng tốt nhất cho mỗi dự án, công trình của mình. Sự chính xác trong thiết kế và sự tận tâm trong thi công là những giá trị cốt lõi của chúng tôi. Chúng tôi không ngừng nỗ lực để nâng cao chất lượng dịch vụ đáp ứng mọi yêu cầu của khách hàng.</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container>
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
                    marginTop:theme.spacing(4),
                    marginBottom:theme.spacing(10),
                }} 
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} container spacing={3} sx={{marginBottom:theme.spacing(4)}}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow:1,padding: theme.spacing(2),margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:{xs: theme.color.green1, md: theme.color.red}, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Nhà xưởng máy móc hiện đại')}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width:'100%',
                                        minHeight:{xs: '250px', md: '400px'},
                                        backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                        backgroundPosition:'center',
                                        backgroundSize:'cover',
                                        backgroundRepeat: 'no-repeat',
                                        borderRadius:'0 20px'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow:1,padding: theme.spacing(2),margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.green1, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Đội ngũ công nhân tay nghề cao, đào tạo bài bản')}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width:'100%',
                                        minHeight:{xs: '250px', md: '400px'},
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
                </Grid>
            </Container>
        </Container>
        </>
    )
}
