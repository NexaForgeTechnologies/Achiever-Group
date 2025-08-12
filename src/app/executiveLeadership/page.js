import DivContentComp from "../components/DivContentComp";
import AnalishaJourneyCont from "../containers/AnalishaJourneyCont";
import ExecutiveBanner from "../containers/ExecutiveBanner";
import ExecutiveGridCont from "../containers/ExecutiveGridCont";
import ExecutiveHero from "../containers/ExecutiveHero";
export default function executiveLeadership() {
    return (
        <>

            <ExecutiveHero />

            <AnalishaJourneyCont />
            <ExecutiveGridCont />

            <DivContentComp
                heading={'Her Legacy in the Making'}
                subheading={'The ventures under Achiever Group reflect her holistic vision'}
                description={'“Every tool we build is a map out of stagnation. My goal is to make excellence accessible—because no one should be underestimated.”'}

                iconCareer={'/procurement.png'}
                detailCareer={"for day-to-day procurement success and personal growth"}

                iconLeadership={'ptx.png'}
                detailLeadership={'for for bold, cross-industry knowledge sharing'}

                iconTalent={'/xec-new.png'}
                detailTalent={'for leadership legacy and boardroom transformation'}

                iconMeasurement={'/achievemeter-new.png'}
                detailMeasurement={'for measurable personal and professional growth'}
                FlexDirection={'flex-col min-h-40'}
                center={'text-center'}
                icow={'w-30 md:w-30 lg:w-50'}

            />

            <ExecutiveBanner />

        </>
    );
}