import HomeHeroCont from "./containers/HomeHeroCont";
import DivContentComp from "./components/DivContentComp";
import HowWeThinkCont from "./containers/HowWeThinkCont";
import BannerComp from "./containers/BannerComp";
import WhoWeAreCont from "./containers/WhoWeAreCont";
import HomeGrid from "./containers/HomeGrid";
import WhatMakesUsDiffCont from "./containers/WhatMakesUsDiffCont";
import TheGapsFillingCont from "./containers/TheGapsFillingCont";
export default function Home() {
  return (
    <>
      <HomeHeroCont />

      <WhoWeAreCont />

      <TheGapsFillingCont />

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
