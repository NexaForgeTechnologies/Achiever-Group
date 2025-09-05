import GapsDivComp from "../components/GapsDivComp";
import Heading from "../components/Heading";

export default function TheGapsFillingCont() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-15 relative w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20">
                {/* Text content */}
                <section className="flex justify-center md:justify-start items-center">
                    <div className="flex flex-col gap-y-5 mb-5 pr-0 lg:pr-5">
                        <div className="flex justify-center md:justify-start">
                            <Heading name={"The Gaps We’re Filling"} />
                        </div>
                        <p className="text-base text-[#808080] max-w-130 text-center md:text-start">
                            We centralise support, build strategic bridges, and unlock growth at
                            every stage — with people-first, data-smart platforms.
                        </p>
                    </div>
                </section>

                <section className="grid grid-cols-2 md:grid-cols-2 gap-3 z-10 p-0 lg:pl-3">

                    <GapsDivComp
                        icon={"/career.png"}
                        title={"Career"}
                        detail={"development is fragmented"}
                        flex={"flex-row"}
                        iconWidth="w-14"
                    />
                    <GapsDivComp
                        icon={"/leadership.png"}
                        title={"Leadership"}
                        detail={"support is often elitist or inaccessible"}
                        flex={"flex-row"}
                        iconWidth="w-14"
                    />
                    <GapsDivComp
                        icon={"/talent.png"}
                        title={"Talent"}
                        detail={"mobility lacks structure across industries"}
                        flex={"flex-row"}
                        iconWidth="w-14"
                    />
                    <GapsDivComp
                        icon={"/measurement.png"}
                        title={"Measurement"}
                        detail={"Measurement of growth is inconsistent"}
                        flex={"flex-row"}
                        iconWidth="w-14"
                    />

                </section>
            </section>

        </>
    );
}