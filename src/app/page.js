import HomeHeroCont from "./containers/HomeHeroCont";
import DivContentComp from "./components/DivContentComp";
import HowWeThinkCont from "./containers/HowWeThinkCont";
import BannerComp from "./containers/BannerComp";
import WhoWeAreCont from "./containers/WhoWeAreCont";
import HomeGrid from "./containers/HomeGrid";
import WhatMakesUsDiffCont from "./containers/WhatMakesUsDiffCont";
export default function Home() {
  return (
    <>
      <HomeHeroCont />

      <WhoWeAreCont />

      <DivContentComp
        heading={'The Gaps We’re Filling'}
        description={'We centralise support, build strategic bridges, and unlock growth at every stage — with people-first, data-smart platforms.'}
        iconCareer={'/career.png'}
        titleCareer={'Career'}
        detailCareer={"development is fragmented"}
        iconLeadership={'leadership.png'}
        titleLeadership={'Leadership'}
        detailLeadership={'support is often elitist or inaccessible checking'}
        iconTalent={'/talent.png'}
        titleTalent={'Talent '}
        detailTalent={'mobility lacks structure across industries'}
        iconMeasurement={'/measurement.png'}
        titleMeasurement={'Measurement'}
        detailMeasurement={'of growth is inconsistent'}
        HideManage={'hidden lg:flex'}
      />

      <WhatMakesUsDiffCont />

      <HomeGrid />

      <HowWeThinkCont />

      <BannerComp
        bgImg="/home-banner.png"
        brown={'Learn more'}
        black={'about our'}
        yellow={'Achiever Value Framework'}
        BtnHide={'hidden'}
        contentLink={'/achieverValue'}
        contentCSS={'pointer-cursor active:text-[#A55C2F] lg:hover:text-[#A55C2F]'}
      />
    </>
  );
}
