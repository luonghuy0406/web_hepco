import React from "react";
import { Box } from "@mui/material";
import { BannerSlide } from "../sections/Home/BannerSlide";
import { useRef } from "react";
import { OurMission } from "../sections/Home/OurMission";

const Home = () => {
  const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView()  
  return (
    <Box>
      <BannerSlide executeScroll={executeScroll}/>
      

      <dix ref={myRef}>
        <OurMission/>
      </dix>
    </Box>
  );
};

export default Home;
