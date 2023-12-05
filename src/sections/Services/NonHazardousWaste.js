import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function NonHazardousWaste() {
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
                <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Thu gom vận chuyển xử lý rác sinh hoạt')}</Typography>
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
                                <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                    Hepco tự hào là đơn vị đạt tiêu chuẩn chất lượng ISO 9001:2015 trong lĩnh vực thu gom, vận chuyển và xử lý rác thải, hiện là đơn vị chủ lực cung cấp dịch vụ thu gom, vận chuyển, xử lý rác thải sinh hoạt tại các chủ nguồn thải, hộ gia đình, khu dân cư, trung tâm thương mại, cơ quan, trường học, doanh nghiệp, khu công nghiệp trên địa bàn thành phố Huế và các Huyện Thị xã trên địa  bàn tỉnh Thừa Thiên Huế. 
                                </Typography>
                                <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                    Với năng lực hơn 500 công nhân trực tiếp, 80 xe vận chuyển rác đời mới, hệ thống xe cuốn ép, thùng container hiện đại, xe quét đường, xe rửa đường và nhiều chủng loại xe máy, thiết bị khác đáp ứng tiêu chuẩn kỹ thuật hiện đại, HEPCO đảm bảo năng lực vận chuyển khoảng 500 tấn rác thải sinh hoạt/ngày, xử lý trên 500 tấn rác/ngày bằng phương pháp chôn lấp hợp vệ sinh. Hoạt động Vệ sinh, thu gom vận chuyển được điều hành thông qua hệ thống Camera, GPS và Trung tâm giám sát thông minh. 
                                </Typography>
                                <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                Bên cạnh đó, việc thực hiện chương trình phân loại chất thải rắn sinh hoạt tại nguồn giúp Hepco có đủ năng lực, kinh nghiệm trong công tác tổ chức thu gom, vận chuyển, xử lý chất thải sau phân loại đúng quy định.
                                </Typography>
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
                                <Box sx={{flexGrow:1,padding: `${theme.spacing(1)} ${theme.spacing(2)}`,margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:{xs: theme.color.green1, md: theme.color.red}, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ vệ sinh công cộng')}</Typography>
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
                                <Box sx={{flexGrow:1,padding: `${theme.spacing(1)} ${theme.spacing(2)}`,margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.red, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ thu gom, vận chuyển, xử lý rác thải sinh hoạt')}</Typography>
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
                        <Grid item xs={12} md={4}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow: 1,padding: `${theme.spacing(1)} ${theme.spacing(2)}`,margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.green1, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ thu gom, vận chuyển, xử lý rác cồng kềnh')}</Typography>
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
                        <Grid item xs={12} md={4}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{ flexGrow: 1,padding: `${theme.spacing(1)} ${theme.spacing(2)}`,margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.red, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ thu gom, vận chuyển rác xây dựng')}</Typography>
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
                        <Grid item xs={12} md={4}>
                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                <Box sx={{flexGrow: 1,padding: `${theme.spacing(1)} ${theme.spacing(2)}`,margin: theme.spacing(2),marginLeft: 0, borderRadius: '20px 0', backgroundColor:theme.color.green1, width: 'fit-content'}}>
                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{t('Dịch vụ thu gom, vận chuyển, xử lý rác công nghiệp thông thường')}</Typography>
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
