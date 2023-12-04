
import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function OtherServices() {
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
                <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Kinh doanh khác')}</Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                            Bên cạnh những dịch vụ chủ lực, chúng tôi còn cung cấp những dịch vụ và giải pháp giúp duy trì môi trường sạch đẹp với chất lượng và mức giá hợp lý nhất. 
                        </Typography>
                    </Grid>
                    <Grid item container spacing={2} xs={12} md={6}>
                        <Grid item xs={6} >
                            <Typography variant="h5" sx={{marginBottom:theme.spacing(2)}} fontWeight={700} color={theme.color.green1}>
                                1. Dịch vụ hút hầm vệ sinh: 
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                Hepco cung cấp dịch vụ hút hầm vệ sinh chuyên nghiệp, bao gồm việc hút chất thải từ hầm, bể phốt các hộ gia đình, tòa nhà, trường học, nhà máy.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Box
                                sx={{
                                    width:'100%',
                                    minHeight:'200px',                                    backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                    backgroundPosition:'center',
                                    backgroundSize:'cover',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius:'0 20px'
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2} xs={12} md={6}>
                        <Grid item xs={6} >
                            <Box
                                sx={{
                                    width:'100%',
                                    minHeight:'200px',                                    
                                    backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                    backgroundPosition:'center',
                                    backgroundSize:'cover',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius:'0 20px'
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <Typography variant="h5" sx={{marginBottom:theme.spacing(2)}} fontWeight={700} color={theme.color.red}>
                                2. Dịch vụ thông tắc cống: 
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                Hepco cung cấp dịch vụ thông tắc nghẹt cống, nghẹt bồn rửa, bồn cầu, nghẹt đường ống thoát nước.. tại các hộ gia đình, tòa nhà, trường học, nhà máy.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2} xs={12} md={6}>
                        <Grid item xs={6} >
                            <Typography variant="h5" sx={{marginBottom:theme.spacing(2)}} fontWeight={700} color={theme.color.green1}>
                                3. Dịch vụ cho thuê nhà vệ sinh: 
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                            Hepco cung cấp dịch vụ cho thuê các nhà vệ sinh công cộng di động, giúp duy trì vệ sinh tại các sự kiện, công trình xây dựng hoặc các nơi công cộng.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Box
                                sx={{
                                    width:'100%',
                                    minHeight:'200px',                                    
                                    backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                    backgroundPosition:'center',
                                    backgroundSize:'cover',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius:'0 20px'
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2} xs={12} md={6}>
                        <Grid item xs={6} >
                            <Box
                                sx={{
                                    width:'100%',
                                    minHeight:'200px',                                    
                                    backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                    backgroundPosition:'center',
                                    backgroundSize:'cover',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius:'0 20px'
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <Typography variant="h5" sx={{marginBottom:theme.spacing(2)}} fontWeight={700} color={theme.color.red}>
                                4. Dịch vụ bán và cho thuê xuồng, thiết bị thu gom rác, thùng rác: 
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                Hepco nhận gia công, bán hoặc cho thuê xuồng, thiết bị thu gom rác và thùng rác chất lượng cao cho việc thu gom và vận chuyển chất thải.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2} xs={12} md={6}>
                        <Grid item xs={6} >
                            <Typography variant="h5" sx={{marginBottom:theme.spacing(2)}} fontWeight={700} color={theme.color.green1}>
                                5. Dịch vụ tưới nước và chở xe nước: 
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                Hepco cung cấp dịch vụ tưới nước, cung cấp xe nước đến các địa điểm theo yêu cầu đáp ứng nhu cầu của khách hàng.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Box
                                sx={{
                                    width:'100%',
                                    minHeight:'200px',                                    
                                    backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                    backgroundPosition:'center',
                                    backgroundSize:'cover',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius:'0 20px'
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2} xs={12} md={6}>
                        <Grid item xs={6} >
                            <Box
                                sx={{
                                    width:'100%',
                                    minHeight:'200px',                                    
                                    backgroundImage: 'url(/assets/images/thungo.jpeg)',
                                    backgroundPosition:'center',
                                    backgroundSize:'cover',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius:'0 20px'
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <Typography variant="h5" sx={{marginBottom:theme.spacing(2)}} fontWeight={700} color={theme.color.red}>
                                6. Các dịch vụ khác trong giấy phép kinh doanh.
                            </Typography>
                            <Typography sx={{marginBottom:theme.spacing(2)}} fontWeight={500} textAlign={'justify'}>
                                Thực hiện các dịch vụ khác theo chức năng trong giấy phép đăng ký kinh doanh
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}
