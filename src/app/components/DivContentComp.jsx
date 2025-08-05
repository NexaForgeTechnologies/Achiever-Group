import Heading from "./Heading";
import GapsDivComp from "./GapsDivComp";

export default function DivContentComp({
    heading,
    subheading,
    description,
    iconCareer,
    titleCareer,
    detailCareer,
    iconLeadership,
    titleLeadership,
    detailLeadership,
    iconTalent,
    titleTalent,
    detailTalent,
    iconMeasurement,
    titleMeasurement,
    detailMeasurement,
    FlexDirection
}) {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6 md:py-15 relative w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20">
                {/* Text content */}
                <section className="flex justify-center md:justify-start items-center">
                    <div className="flex flex-col gap-y-5 mb-5 pr-0 lg:pr-5">
                        <div className="flex justify-center md:justify-start">
                            <Heading name={heading} />
                        </div>
                        <h1 className="text-lg font-semibold text-gray-500 max-w-195 text-center md:text-start">
                            {subheading}
                        </h1>
                        <p className="text-base text-gray-500 max-w-130 text-center md:text-start">
                            {description}
                        </p>
                    </div>
                </section>

                {/* Gaps grid */}
                <section className="grid grid-cols-2 md:grid-cols-2 gap-3">
                    <GapsDivComp
                        icon={iconCareer}
                        title={titleCareer}
                        detail={detailCareer} 
                        flex={FlexDirection}/>
                        
                    <GapsDivComp
                        icon={iconLeadership}
                        title={titleLeadership}
                        detail={detailLeadership} 
                        flex={FlexDirection}/>
                        
                    <GapsDivComp
                        icon={iconTalent}
                        title={titleTalent}
                        detail={detailTalent} 
                        flex={FlexDirection}/>
                        
                    <GapsDivComp
                        icon={iconMeasurement}
                        title={titleMeasurement}
                        detail={detailMeasurement} 
                        flex={FlexDirection}/>
                        
                </section>

                <img src="/Exclude.png" className="absolute right-0 top-1/2 -z-10" />
            </section>
        </>
    );
}
