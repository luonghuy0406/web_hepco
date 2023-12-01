import {Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image } from 'semantic-ui-react'

export default function Achievement() {
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
            <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Thành tựu đạt được')}</Typography>
            
            <Typography sx={{marginBottom:theme.spacing(4)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('KHEN THƯỞNG CẤP NHÀ NƯỚC')}</Typography>
            
            <Grid container>
                {
                    [
                        'https://secoin.com/uploaded/gioi-thieu/Giai%20thuong%20va%20thanh%20tich/1%20BK%20Thu%20tuong%20chinh%20phu%20Cty%20CP%20Secoin%202019%20a.jpg',
                        "https://icdn.dantri.com.vn/thumb_w/680/2022/06/16/huan-chuong-lao-dong-1655346540689.png",
                        'https://secoin.com/uploaded/gioi-thieu/Giai%20thuong%20va%20thanh%20tich/1%20BK%20Thu%20tuong%20chinh%20phu%20Cty%20CP%20Secoin%202019%20a.jpg',
                        "https://icdn.dantri.com.vn/thumb_w/680/2022/06/16/huan-chuong-lao-dong-1655346540689.png",
                        'https://secoin.com/uploaded/gioi-thieu/Giai%20thuong%20va%20thanh%20tich/1%20BK%20Thu%20tuong%20chinh%20phu%20Cty%20CP%20Secoin%202019%20a.jpg',
                        "https://rccgroup.vn/wp-content/uploads/2021/10/CTD-CP-2006-2-768x768.png"
                    ].map((image)=>{
                        return(
                            <Grid item xs={6} md={4}>
                                <Box 
                                    sx={{
                                        margin: theme.spacing(2), 
                                        display:'flex', 
                                        alignItems:"center", 
                                        justifyContent:"start", 
                                        flexDirection:'column',
                                        height:"auto", 
                                        width:"85%", 
                                        aspectRatio: 1,
                                        backgroundImage:'url(/assets/images/nen.jpeg)',
                                        backgroundPosition:'center',
                                        backgroundSize:'cover',
                                        backgroundRepeat:'no-repeat',
                                        textAlign:"center",
                                        boxShadow:'0 5px 20px rgba(34,34,34,.1)',
                                        borderRadius:'10px',
                                        position: 'relative'
                                    }}>
                                        <Box sx={{padding: theme.spacing(3), height: 'calc( 100% - 70px)'}}>
                                            <img  alt='logo' src={image} width="90%"/>
                                        </Box>
                                        <Box sx={{position:'absolute', left: 0, right: 0, bottom: 0, height:'70px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                            <Typography variant='h6' fontWeight={600} color={theme.color.white} >TÊN HUÂN CHƯƠNG</Typography>
                                            <Typography variant="h7" fontWeight={700} color={theme.color.white} >(2022,2023)</Typography>
                                        </Box>
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Container maxWidth='lg'>
                <Typography sx={{marginBottom:theme.spacing(4), marginTop:theme.spacing(4)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('KHEN THƯỞNG BỘ, BAN NGÀNH, HỘI NGHỀ NGHIỆP TRUNG ƯƠNG')}</Typography>
                <Typography fontWeight={500}>
                    - Cờ thi đua của Bộ Xây dựng (năm 2008)
                    <br/>
                    - Cờ thi đua của Hiệp hội Môi trường Đô thị và Khu công nghiệp Việt Nam (năm 2005, 2007, 2010, 2012, 2017, 2018, 2019, 2020, 2023)
                    <br/>
                    - Bằng khen của Hiệp hội Môi trường Đô thị và Khu công nghiệp Việt Nam (năm 2015)
                    <br/>
                    - Bằng khen của Bộ Xây dựng (năm 2005, 2006, 2007, 2010, 2013)
                    <br/>
                    - Bằng khen của Bộ tài chính (năm 2006, 2008, 2011, 2012, 2013)
                    <br/>
                    - Bằng khen của Bộ Công thương (năm 2006, 2010)
                    <br/>
                    - Bằng khen của Bộ Tài nguyên và Môi trường (năm 2012)
                    <br/>
                    - Bằng khen của Bảo hiểm Xã hội Việt Nam (năm 2010, 2015)
                    <br/>
                    - Giấy khen của Tổng cục Thuế (năm 2005, 2015)
                    <br/>
                    - Bằng khen của BCH Trung ương Hội cấp thoát nước Việt Nam (2011, 2013, 2015)
                    <br/>
                    - Giải thưởng "Dòng xanh nước Việt" của Hội Cấp thoát nước Việt Nam (năm 2007)
                    <br/>
                    - Bằng khen của Liên hiệp các Hội khoa học kỹ thuật Việt Nam (năm 2007)
                </Typography>
                <Typography sx={{marginBottom:theme.spacing(4), marginTop:theme.spacing(4)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('KHEN THƯỞNG CỦA UBND TỈNH VÀ CÁC CƠ QUAN CẤP TỈNH')}</Typography>
                <Typography fontWeight={500}>
                    - Cờ thi đua của UBND tỉnh Thừa Thiên Huế (năm 2013, 2019, 2021, 2022)
                    <br/>
                    - Bằng khen của UBND tỉnh Thừa Thiên Huế (năm 1985, 1991, 1999, 2000, 2001, 2002, 2003, 2005, 2006, 2007, 2008, 2009, 2010, 2012, 2015, 2017, 2019, 2021, 2022, 2023)
                </Typography>

                <Typography sx={{marginBottom:theme.spacing(4), marginTop:theme.spacing(4)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('KHEN THƯỞNG CÔNG TÁC ĐẢNG - ĐOÀN THỂ')}</Typography>
                <Typography fontWeight={500}>
                    - Cờ thi đua của BCH Đảng bộ tỉnh Thừa Thiên Huế (năm 2005, 2010, 2020)
                    <br/>
                    - Bằng khen của BCH Đảng bộ tỉnh Thừa Thiên Huế (năm 2008)
                    <br/>
                    - Cờ thi đua của Tổng Liên đoàn Lao động Việt Nam (năm 2010, 2012)
                    <br/>
                    - Bằng khen của Tổng Liên đoàn Lao động Việt Nam (năm 1993, 2000, 2001, 2002, 2006, 2007, 2009, 2011, 2013, 2014, 2015, 2018)
                    <br/>
                    - Cờ thi đua của BCH Liên đoàn Lao động tỉnh Thừa Thiên Huế (năm 2013)
                    <br/>
                    - Bằng khen của LĐLĐ tỉnh Thừa Thiên Huế (năm 2005, 2010, 2015, 2021)
                    <br/>
                    - Bằng khen của BCH Trung ương Đoàn TNCS Hồ Chí Minh (2007, 2012)
                    <br/>
                    - Cờ Thi đua của BCH Đoàn TNCS Hồ Chí Minh tỉnh Thừa Thiên Huế (2012)
                    <br/>
                    - Bằng khen của BCH Đoàn TNCS Hồ Chí Minh tỉnh Thừa Thiên Huế (năm 2009, 2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023)
                </Typography>
            </Container>
        </Container>
  )
}
