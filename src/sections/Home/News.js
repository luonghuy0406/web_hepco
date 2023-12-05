import React, { useEffect, useRef } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faFontAwesome, faPlay)

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingLeft: 0,
  paddingRight: 0,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  width: '100%',
  paddingBottom: theme.spacing(2),
  textAlign: 'center',
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(4),
}));

const FeaturedNewstWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.color.white,
  borderRadius: '10px',
  height:'100%',
  boxShadow:'0 5px 20px rgba(34,34,34,.1)'
}));

const FeaturedNewstImage = styled(Box)(({ theme, image }) => ({
  background: `url("${image}")`,
  height: 'auto',
  aspectRatio: 1.6,
  width: '100%',
  borderRadius: '10px 10px 0 0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative'
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

export const News = () => {
  const theme = useTheme()
  const {t} = useTranslation()
  const news = [
    {date: '30-12-2023',id : '18',author: 'Admin', image: "/assets/images/1.jpg",  group_id: '2', title :"QUY TRÌNH CẤP PHÉP ĐÀO LỀ, ĐỤC MƯƠNG, ĐỤC HỐ GA, GỬI NƯỚC THẢI SINH HOẠT", content: `<p>Vỉa hẻ, thoát nước đô thị là bộ phận của hệ thống hạ tầng kỹ thuật đô thị do Nhà nước thống nhất quản lý và có phân cấp quản lý. CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ (HEPCO) đang được UBND thành phố Huế đặt hàng quản lý vận hành hệ thống thoát nước lề đường thuộc hệ thống hạ tầng kỹ thuật đô thị thành phố, là đơn vị trung gian tiếp nhận hồ sơ cấp phép tử UBND thành phố Huế.</p><p>Khi chuẩn bị tiến hành thi công công trình về đào lề, vỉa hè để lắp đặt (sửa chữa), đục mương, đục hố ga và gửi nước thải sinh hoạt, chủ đơn vị thi công phải tiến hành làm thủ tục cấp phép của cơ quan có thẩm quyền, có giải pháp để bảo đảm không ảnh hưởng đến trật tự an toàn giao thông, vệ sinh môi trường và mỹ quan đô thị. Đồng thời có cam kết bảo đảm thực hiện đúng thời hạn và bảo đảm chất lượng về việc hoàn trả lại đoạn đường đã đào.</p><p>Khách hàng có nhu cầu muốn đăng ký cấp phép về đào về đục mương hố ga, gửi nước thải sinh hoạt vui lòng liên hệ theo số hotline 0234 3823896 - 0234 3997799; hoặc trực tiếp đăng ký tại Bộ phận Giao dịch tại 46 Trần Phú, phường Vĩnh Ninh, thành phố Huế để được tư vấn và giải quyết một cách nhanh chóng nhất.HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ</p><p><span class="image-inline ck-widget image_resized ck-widget_with-resizer" style="width:16px;" contenteditable="false"><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2d/1/16/1f4cd.png" alt="📍"><div class="ck ck-reset_all ck-widget__resizer ck-hidden"><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-left"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-left"></div><div class="ck ck-size-view" style="display: none;"></div></div></span>&nbsp;46 Trần Phú - Thành phố Huế</p><p><span class="image-inline ck-widget image_resized ck-widget_with-resizer" style="width:16px;" contenteditable="false"><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t22/1/16/260e.png" alt="☎️"><div class="ck ck-reset_all ck-widget__resizer ck-hidden"><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-left"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-left"></div><div class="ck ck-size-view" style="display: none;"></div></div></span>&nbsp;Hotline - 02343 997799</p><figure class="image ck-widget ck-widget_selected" contenteditable="false"><img src="http://www.hepco.com.vn/Public/Upload/images/Dichvu/DaoLe.jpg">`},
    {date: '30-12-2023',id : '19',author: 'Admin', image: "/assets/images/thungo.jpeg",  group_id: '2', title :"TƯNG BỪNG NGÀY HỘI TÁI CHẾ - HUẾ 2023", content: `<p>Sáng ngày 14 tháng 5 năm 2023 – tại Trung tâm Thông tin Môi trường (46 Trần Phú, TP Huế), Dự án Huế - Đô thị giảm nhựa ở miền Trung Việt Nam (được tài trợ bởi Tổ chức quốc tế về Bảo tồn thiên nhiên (WWF) tại Việt Nam thông qua WWF-Nauy) và CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ (HEPCO) tổ chức sự kiện Ngày hội tái chế Huế 2023.</p>

    <p>Hoạt động thu hút sự tham gia của gần 200 học sinh, phụ huynh và giáo viên của 07 trường học trên địa bàn thành phố Huế bao gồm các trường: Trường Tiểu học Phú Tân, Trường Tiểu học Phú Bình, Trường Tiểu học số 1 An Đông, Trường Tiểu học số 1 Thuận An, Trường Tiểu học số 2 Thuận An, Trường Tiểu học Vỹ Dạ. và Trường THCS Trần Cao Vân.</p>
    
    <p>Sự kiện với nhiều hoạt động nâng cao kiến thức và kỹ năng thực hiện tái sử dụng, tái chế, của các em học sinh, đặc biệt chú trọng tái chế sản phẩm nhựa, thay thế việc sử dụng bao bì ni lông trong các hoạt động Nghề truyền thống tại Huế như: Trải nghiệm làm hoa giấy, trải nghiệm gói bánh truyền thống từ giấy, trải nghiệm làm giấy từ rơm.</p>
    
    <p>Ngoài ra các em học sinh còn được tham quan Trung tâm Thông tin Môi trường, tham gia các trò chơi về phân loại rác, giảm thiểu rác thải nhựa và biểu diễn các tiết mục văn nghệ với chủ đề về môi trường.</p>
    
    <p>Hoạt động được tổ chức nhằm tạo sân chơi cho các bạn học sinh tại Huế, nâng cao ý thức bảo vệ môi trường, giảm thiểu rác nhựa, góp phần xây dựng Huế trở thành đô thị giảm nhựa ở miền Trung Việt Nam.</p>
    
    <p>Cùng đón chờ sự kiện ngày hội tái chế tiếp theo trong năm 2023 bạn nha <img alt="😍" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2/1/16/1f60d.png" style="height:16px; width:16px"></p>
    
    <p>Nguồn: <a href="https://www.facebook.com/HuePlasticSmartCity?__cft__[0]=AZWIPTXHQOTpHfDWe0WukRXIku7DkwGg5qkAutJkbXFbbsYOZm7xpIF9ijCni5TMHJvN1nsLJZHdodv7Mvyl9A7KV83Xly4JF5baehC6wnvhAAF10NuhJTfqJ72n8FcvBUXxGf3di04W0zVoicLAHbQ-QGbBqHjxnGkiqd7F2mI-hSZTFENvRoJkw9lXgv6yh1c&amp;__tn__=-]K-R" tabindex="0">Dự án Huế - Đô thị Giảm Nhựa ở miền Trung Việt Nam</a></p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/347259211_1399570530865033_4467954850211736613_n.jpg" style="height:267px; width:400px"></p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/346937471_810039673401151_3983513850142061894_n.jpg" style="height:267px; width:400px"></p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/346977078_1266289100653250_8830184759971648733_n.jpg" style="height:267px; width:400px"></p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/346977078_1266289100653250_8830184759971648733_n.jpg" style="height:267px; width:400px"></p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/347118351_753519226519538_3321457128392345595_n.jpg" style="height:267px; width:400px"></p>
    
    <p style="text-align:center">&nbsp;</p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/347379780_259788799881356_7984439537715342922_n.jpg" style="height:267px; width:400px"></p>
    
        <div class="fb-like" data-href="http://www.hepco.com.vn/" data-width="" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true">
        </div>`},
    {date: '29-12-2023',id : '1', author: 'Admin', image: "/assets/images/thungo.jpeg", group_id: '1', title :"tin tuc so tin tuc so tin tuc so tin tuc so 1", content: "content socontent socontent socontent socontent socontent so 1  tâm Thông tin Môi trường (46 Trần Phú, TP Huế), Dự án Huế - Đô   tâm Thông tin Môi trường (46 Trần Phú, TP Huế), Dự án Huế - Đô "},
  ]
  const categories = {
    '0': {name: t('Tất cả tin'), value:'0'},
    '1': {name: t('Hoạt động công ty'), value:'1'},
    '2': {name: t('Đảng Đoàn thể'), value:'2'},
    '3': {name: t('Pháp luật môi trường'), value:'3'},
    '4': {name: t('Tin tức khác'), value:'4'},
}
  const newsRef = useRef(null)
  const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0,
      deplay: 1000
  });
  useEffect(() => {
      if(inView){
          if (newsRef.current) {
              newsRef.current.classList.add('animate__animated','animate__fadeInDown');
          }
      }
  }, [inView]);

  
  return (
    <Container maxWidth='100%' sx={{py:theme.spacing(5), mb:theme.spacing(5),px:'0 !important'}}>
      <Box sx={{
          py:theme.spacing(3),
          backgroundImage:"url(https://html.themexriver.com/it-firm/images/background/pattern-14.png) !important",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          position:"relative"
          }}>
            <StyledContainer>
              <Grid container >
                    <StyledTypography ref={ref} variant="h4" color={theme.color.black} fontWeight="bold" pb={theme.spacing(5)}>
                        {t('Tin tức nổi bật')}
                    </StyledTypography>
                    <StyledGrid container ref={newsRef} spacing={2} sx={{justifyContent:'center', padding: theme.spacing(2)}}>
                    {news.map((data) => {
                      const normalizedTitle = data.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                      return(
                          <Grid key={data.id} item xs={12} sm={6} md={4}>
                              <Link to={`/${t('tintuc')}/${normalizedTitle}.${data.id}`}>
                                  <FeaturedNewstWrap>
                                      <LazyLoad height={200} offset={100}>
                                      <FeaturedNewstImage image={data.image}>
                                          <Box
                                              sx={{
                                                  px: theme.spacing(4),
                                                  py:theme.spacing(1),
                                                  background: theme.color.green1,
                                                  position: 'absolute',
                                                  borderRadius: '4px',
                                                  textAlign:'center',
                                                  bottom: '0',
                                                  left: '50%',
                                                  transform: 'translate(-50%, 20px)'
                                              }}
                                          >
                                          <Typography 
                                              className='news-date' 
                                              fontFamily={theme.typography.MuktaMahee}
                                              color={theme.color.white}
                                              fontWeight={700}
                                          >{data.date}</Typography>
                                          </Box>
                                      </FeaturedNewstImage>
                                      </LazyLoad>
                                      <Box
                                          sx={{padding:theme.spacing(4)}}
                                      >
                                      <Grid container spacing={1}>
                                          <Grid item xs={12} pb={1}>
                                              <Typography variant="h6" color={theme.color.red} fontWeight={700}>{data.title}</Typography>
                                          </Grid>
                                          <Grid item xs={12}>
                                              <Box sx={{display:'flex'}}>
                                              <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>{data.author}</Typography>
                                              <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>-</Typography>
                                              <Typography color={theme.color.gray1} fontWeight={700} >{categories?.[data.group_id]?.name}</Typography>
                                              </Box>
                                          </Grid>
                                          <Grid item xs={12}>
                                              <Box className='ck-content' dangerouslySetInnerHTML={{__html:data.content}} sx={{overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}/>
                                          </Grid>
                                          <Grid item>
                                              <BlogButton>
                                              <Link to={`/${t('tintuc')}/${normalizedTitle}.${data.id}`}>
                                                  <Typography fontWeight={700} lineHeight={'1.5rem'}>{t("Read more")}</Typography>
                                                  <Typography sx={{display:'inline', pl: '5px'}} className='arrow-news'><FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></Typography>
                                              </Link>
                                              </BlogButton>
                                          </Grid>
                                      </Grid>
                                      </Box>
                                  </FeaturedNewstWrap>
                              </Link>
                          </Grid>
                      )
                    })}
                    </StyledGrid>
              </Grid>
            </StyledContainer>
        </Box>
    </Container>
)}
