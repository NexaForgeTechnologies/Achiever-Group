import DivContentComp from "../components/DivContentComp";
import ExecutiveBanner from "../containers/ExecutiveBanner";
import ExecutiveHero from "../containers/ExecutiveHero";
export default function executiveLeadership() {
    return (
        <>

            <ExecutiveHero />

            <DivContentComp
                heading={'Her Legacy in the Making'}
                subheading={'The ventures under Achiever Group reflect her holistic vision'}
                description={'“Every tool we build is a map out of stagnation. My goal is to make excellence accessible—because no one should be underestimated.”'}

                iconCareer={'/procurement.png'}
                detailCareer={"for day-to-day procurement success and personal growth"}

                iconLeadership={'ptx.png'}
                detailLeadership={'for for bold, cross-industry knowledge sharing'}

                iconTalent={'/xec.png'}
                detailTalent={'for leadership legacy and boardroom transformation'}

                iconMeasurement={'/achievemeter.png'}
                detailMeasurement={'for measurable personal and professional growth'}
                FlexDirection={'flex-col'}
            />

            <ExecutiveBanner />

        </>
    );
}