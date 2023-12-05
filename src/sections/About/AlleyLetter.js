import { Box, Container, Typography, Grid, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function AlleyLetter() {
    const {t} = useTranslation()
    const theme = useTheme()
  return (
    <Container 
        maxWidth='100%' 
        sx={{
            padding:0,
            backgroundImage: 'url(https://html.themexriver.com/it-firm/images/background/pattern-19.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center'
        }}
    >
        <Container 
            maxWidth='xl' 
            sx={{
                marginTop:theme.spacing(10),
            }}>
            <Grid container spacing={10}>
                <Grid item xs={0}  md={5} sm={0} lg={5}>
                    <Box
                        sx={{
                            width:'100%',
                            height:'100%',
                            backgroundImage: 'url(/assets/images/thungo.jpeg)',
                            backgroundPosition:'70%',
                            backgroundSize:'cover',
                            backgroundRepeat: 'no-repeat',
                            borderRadius:'10px'
                        }}
                    >

                    </Box>
                </Grid>
                <Grid item xs={12} md={7} sm={12} lg={7}>
                    <Box>
                        <Typography fontWeight={500}  variant="h2" fontFamily={"'Great Vibes', cursive"} color={theme.color.green1} textAlign={"center"}>{t('Thư ngõ')}</Typography>
                        <br/>
                        <Typography fontWeight={500}>
                            Kính gửi Quý khách hàng,
                        </Typography>
                        <br/>
                        <Typography textAlign={'justify'} fontWeight={500}>
                            Chúng tôi trân trọng gửi lời chào trân trọng và sự biết ơn sâu sắc đến Quý khách hàng đã tin tưởng và ủng hộ CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ (HEPCO) trong suốt thời gian qua. Với bề dày hơn 50 năm kinh nghiệm trong lĩnh vực vệ sinh môi trường và công trình đô thị, chúng tôi cam kết tiếp tục nỗ lực không ngừng để đáp ứng mọi nhu cầu của Quý khách hàng.
                            <br/><br/>
                            HEPCO không chỉ là một đối tác được chính quyền đô thị địa phương tín nhiệm giao nhiệm vụ, đặt hàng và thực hiện đấu thầu trong suốt chặng đường qua mà còn là đối tác đáng tin cậy của các tổ chức, doanh nghiệp và cá nhân trong lĩnh vực thu gom, vận chuyển, và xử lý chất thải trên địa bàn tỉnh Thừa Thiên Huế. Chúng tôi tự hào với đội ngũ cán bộ, nhân viên và công nhân giỏi lành nghề, cùng với trang thiết bị, phương tiện và công nghệ hiện đại mà chúng tôi sở hữu. Điều này giúp chúng tôi đảm bảo chất lượng và hiệu quả cao trong mọi dịch vụ chúng tôi cung cấp.
                            <br/><br/>
                            Ngoài thực hiện các công tác ở lĩnh vực công ích,  chúng tôi còn  thực hiện thi công hệ thống điện chiếu sáng đô thị và trang trí đường phố, cũng như các công trình xây dựng hạ tầng, dân dụng và các lĩnh vực kinh doanh đa dạng khác.
                            <br/><br/>
                            Bên cạnh việc ngừng đổi mới với phương tiện thiết bị và công nghệ hiện đại đáp ứng các yêu cầu ngày càng cao của khách hàng, chúng tôi đã và đang tiếp tục đầu tư vào nghiên cứu và tiên phong áp dụng các công nghệ tiên tiến nhất trong việc thu gom, vận chuyển và xử lý chất thải. Đồng thời, chúng tôi không ngừng đào tạo và nâng cao kỹ năng cho đội ngũ nhân viên của mình và  xây dựng mạng lưới đối tác với các tổ chức, dự án trong và ngoài nước để chia sẻ kinh nghiệm và học hỏi công nghệ, đồng thời luôn tìm kiếm cơ hội tham gia vào các dự án phát triển bền vững hướng đến bảo vệ môi trường cho toàn cộng đồng.
                            <br/><br/>
                            Cùng với sự hỗ trợ từ Quý khách hàng và cộng đồng, chúng tôi cam kết tiếp tục nỗ lực để mang đến một môi trường xanh – sạch – sáng  và nhiều giá trị bền vững cho tương lai. Một lần nữa, chúng tôi xin chân thành cảm ơn sự hỗ trợ và lòng tin tưởng của Quý khách hàng. Chúng tôi rất mong có cơ hội được phục vụ và làm việc chung với Quý khách hàng trong tương lai.
                            <br/><br/>
                            Trân trọng.
                        </Typography>
                        <br/>
                        <Typography fontWeight={'bolder'} textAlign={'right'}>
                            CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
        </Container>
    </Container>
  )
}
