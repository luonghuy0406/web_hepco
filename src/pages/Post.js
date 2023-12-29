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
        'post' : {path: t('tintuc'), name : t("Tin tức")},
        'project' : {path: t('duan'), name : t("Dự án")},
        'shareholder' : {path: t('codong'), name : t("Cổ đông")},
    } 
  return (
    <>
     <Helmet>
      <title> {type[typePost].name} | {t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
     </Helmet>
      <Banner name={type[typePost].name} image={'/assets/images/bg4.jpg'} path={`/${type[typePost].path}`} pages={[]}/>
      <PostContent pageParam={page} typePost={typePost} type={type} categories={categories}/>
    </>
  )
}
