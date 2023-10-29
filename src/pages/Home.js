import React from "react";
import { Box } from "@mui/material";
import { BannerSlide } from "../sections/Home/BannerSlide";
import { useRef } from "react";
import { OurMission } from "../sections/Home/OurMission";
import { CompanyInfo } from "../sections/Home/CompanyInfo";
import { OurServices } from "../sections/Home/OurServices";
import { FeaturedProjects } from "../sections/Home/FeaturedProjects";

const Home = () => {
  const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView()  
  return (
    <Box>
      <BannerSlide executeScroll={executeScroll}/>
      <Box ref={myRef}>
        <CompanyInfo/>
        <OurMission/>
        <OurServices/>
        <FeaturedProjects/> 
      </Box>
    </Box>
  );
};

export default Home;
