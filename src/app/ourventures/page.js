import HeroComp from "../components/HeroComp";
import BannerComp from "../containers/BannerComp";
import VenturesDivCont from "../containers/VenturesDivCont";
import VentureSheetCont from "../containers/VentureSheetCont";
export default function ourVentures() {
    return (
        <>
            <HeroComp
                yellow={'Each'}
                brown={'venture'}
                yellow2={'solves a real problem.'}
                black={'Together, they build real legacy.'}
                para={'At Achiever Group, our ventures are not just business units — they are purpose-built ecosystems designed to support real-world challenges in talent, leadership, learning, and career development.'}
                para2={'Each platform aligns with the Achiever Value Framework and is rooted in our shared philosophy'}
                title={'Our Ventures'}
            />

            <VenturesDivCont />
            <VentureSheetCont />
            <BannerComp 
            bgImg="/venture-banner2.png"
            brown={'Want to partner'}
            black={', invest,'}
            yellow={'or explore opportunities with our ventures?'}
            />
        </>
    );
}