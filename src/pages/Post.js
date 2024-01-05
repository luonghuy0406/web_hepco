import React from 'react'
import { useTranslation } from 'react-i18next'
import PostContent from '../sections/Posts/PostContent'
import { Helmet } from 'react-helmet-async';
import Banner from '../sections/Banner';

export default function Post({page,typePost}) {
    const {t} = useTranslation()
    window.scrollTo(0, 0);
    const categories = {
        '0': {name: t('Tất cả tin'), value:'0'},
        '1': {name: t('Hoạt động công ty'), value:'1'},
        '2': {name: t('Đảng Đoàn thể'), value:'2'},
        '3': {name: t('Pháp luật môi trường'), value:'3'},
        '4': {name: t('Tin tức khác'), value:'4'},
        '5': {name: t('Thông báo'), value:'5'},
        '6': {name: t('Báo cáo'), value:'6'},
        '7': {name: t('Dự án đầu tư'), value:'7'},
        '8': {name: t('Hợp tác trong nước'), value:'8'},
        '9': {name: t('Hợp tác nước ngoài'), value:'9'}
    }
    const type = {
        'post' : {image: '/assets/tintuc.png', path: t('tintuc'), name : t("Tin tức"), sub_name : t("Bên cạnh hoạt động sản xuất kinh doanh, Hepco thường xuyên thực hiện các chương trình, chiến dịch, sự kiện tuyên truyền nâng cao ý thức của người dân về bảo vệ môi trường. Đảng ủy lãnh đạo chính quyền và các tổ chức chính trị xã hội trong Công ty thường xuyên tổ chức các chương trình hành động giáo dục tư tưởng chính trị, chăm lo đến đời sống cán bộ công nhân viên; các hoạt động vì cộng đồng, vì môi trường hướng đến sự phát triển bền vững")},
        'project' : {image: '/assets/duan.png', path: t('duan'), name : t("Dự án"), sub_name : t("Với kinh nghiệm thực tiễn nhiều năm thực hiện công tác vệ sinh môi trường và thi công, quản lý, duy tu, bảo dưỡng hệ thống thoát nước, vỉa hè, hệ thống điện chiếu sáng công cộng và trang trí đường phố, chúng tôi không ngừng đào tạo và nâng cao kỹ năng cho đội ngũ nhân viên và xây dựng mạng lưới đối tác với các tổ chức, dự án trong ngoài nước để chia sẻ kinh nghiệm và học hỏi công nghệ. Luôn tìm kiếm cơ hội tham gia vào các dự án chỉnh trang đô thị làm đẹp cho bộ mặt thành phố cũng như các dự án phát triển bền vững và giáo dục hướng đến bảo vệ môi trường cho toàn cộng đồng.")},
        'shareholder' : {image: '/assets/codong.png', path: t('codong'), name : t("Cổ đông"), sub_name : t("Hepco là doanh nghiệp có 51% vốn nhà nước, và 49% vốn cổ đông.")},
    } 
  return (
    <>
     <Helmet>
      <title> {type[typePost].name} | {t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
     </Helmet>
      <Banner name={type[typePost].name} sub_name={type[typePost].sub_name} image={type[typePost].image} path={`/${type[typePost].path}`} pages={[]}/>
      <PostContent pageParam={page} typePost={typePost} type={type} categories={categories}/>
    </>
  )
}
