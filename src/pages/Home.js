import React from "react";
import { Helmet } from 'react-helmet-async';
import { Box } from "@mui/material";
import { BannerSlide } from "../sections/Home/BannerSlide";
import { useRef } from "react";
import  OurMission  from "../sections/Home/OurMission";
import { OurServices } from "../sections/Home/OurServices";
import { News } from "../sections/Home/News";
import { Customers } from "../sections/Home/Customers";
import { AdwardsAchieved } from "../sections/Home/AwardsAchieved";
import { Questions } from "../sections/Home/Questions";
import { useTranslation } from "react-i18next";

const Home = ({data}) => {
  const myRef = useRef(null)
  const {t} = useTranslation()
  window.scrollTo(0, 0);
  const executeScroll = () => myRef.current.scrollIntoView()  
  return (
    <Box>
      <Helmet>
          <title> {t("Trang chủ")} | {t("HEPCO - CÔNG TY CỔ PHẦN MÔI TRƯỜNG VÀ CÔNG TRÌNH ĐÔ THỊ HUẾ")} </title>
      </Helmet>
      <BannerSlide executeScroll={executeScroll} banner={data.banner} info={data.company_data}/>
      <Box ref={myRef}>
        <OurMission mission={data.mission} video={data.video} coreVal={data.coreVal}/>
        <OurServices/>
        <News/>
        <Box 
          sx={{
            backgroundImage: `url(/assets/images/bg1.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'right',
            backgroundSize: '70%',
          }}
        >
          <Customers customer={data.customer}/>
          <AdwardsAchieved/>
        </Box>
        <Questions/>
      </Box>
    </Box>
  );
};

export default Home;
