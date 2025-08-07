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
    FlexDirection,
    center,
    icow
}) {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-15 
            relative w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20">
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
                <section className="grid grid-cols-2 md:grid-cols-2 gap-5 z-10 p-0 lg:pl-7">
                    <GapsDivComp
                        icon={iconCareer}
                        iconWidth={icow}
                        title={titleCareer}
                        detail={detailCareer}
                        flex={FlexDirection}
                        textCenter={center} />

                    <GapsDivComp
                        icon={iconLeadership}
                        iconWidth={icow}
                        title={titleLeadership}
                        detail={detailLeadership}
                        flex={FlexDirection}
                        textCenter={center} />

                    <GapsDivComp
                        icon={iconTalent}
                        iconWidth={icow}
                        title={titleTalent}
                        detail={detailTalent}
                        flex={FlexDirection}
                        textCenter={center} />

                    <GapsDivComp
                        icon={iconMeasurement}
                        iconWidth={icow}
                        title={titleMeasurement}
                        detail={detailMeasurement}
                        flex={FlexDirection}
                        textCenter={center} />

                </section>

                <img src="/Exclude.png" className="absolute right-0 bottom-10 " />
            </section>
        </>
    );
}
