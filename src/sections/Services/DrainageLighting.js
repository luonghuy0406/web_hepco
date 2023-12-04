
import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function DrainageLighting() {
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
                <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Thoát nước - Điện chiếu sáng')}</Typography>
                <Grid container spacing={2}>
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
                                    Với kinh nghiệm thực tiễn nhiều năm thực hiện công tác thi công, quản lý, duy tu, bảo dưỡng hệ thống thoát nước, vỉa hè, hệ thống điện chiếu sáng công cộng và trang trí đường phố, Hepco là đơn vị uy tín được giao nhiệm vụ, đặt hàng, đấu thầu từ chính quyền địa phương trong các hạng mục công ích về lĩnh vực thoát nước và điện chiếu sáng, ngoài ra còn tham gia thực hiện các công trình hạ tầng kỹ thuật đô thị lớn nhỏ trên địa bàn tỉnh Thừa Thiên Huế. Với đội ngũ chuyên gia và kỹ sư giàu kinh nghiệm, chúng tôi không chỉ tập trung vào việc thi công, bảo dưỡng, mà còn tư vấn đề xuất các giải pháp cải thiện tăng cường hiệu quả của hệ thống thoát nước và áp dụng các công nghệ tiên tiến trong việc thiết lập hệ thống tiết kiệm điện năng, cải thiện thiết kế để tối ưu hóa lưu lượng và an toàn.
                                </Typography>
                                <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                Công ty chúng tôi là đơn vị đi đầu tại khu vực miền Trung với trung tâm giám sát và điều hành thông minh có chức năng giám sát, quản lý hạ tầng kỹ thuật, vệ sinh môi trường thông qua hệ thống camera; giám sát điều khiển hệ thống chiếu sáng khắp thành phố một cách chuyên nghiệp.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow:1,padding: `${theme.spacing(1)} ${theme.spacing(2)}`,margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.red, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ thi công, sữa chữa, bảo dưỡng hệ thống điện chiếu sáng')}</Typography>
                                </Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
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
                                    </Grid>
                                    <Grid item xs={6}>
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
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow:1,padding: `${theme.spacing(1)} ${theme.spacing(2)}`,margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.green1, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ thi công, sữa chữa, bảo dưỡng hệ thống thoát nước')}</Typography>
                                </Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
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
                                    </Grid>
                                    <Grid item xs={6}>
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
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow:1,padding: `${theme.spacing(1)} ${theme.spacing(2)}`,margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.green1, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Trung tâm thông tin')}</Typography>
                                </Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
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
                                    </Grid>
                                    <Grid item xs={6}>
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
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow:1,padding: `${theme.spacing(1)} ${theme.spacing(2)}`,margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.red, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Xe chuyên dụng hiện đại')}</Typography>
                                </Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
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
                                    </Grid>
                                    <Grid item xs={6}>
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
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}
