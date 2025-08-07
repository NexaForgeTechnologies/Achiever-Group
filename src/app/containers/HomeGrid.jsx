import Heading from "../components/Heading";
import InfoCard from "../components/InfoCard";
export default function HomeGrid() {
    return (
        <>
            <section className="py-10 md:py-15 bg-[url('/home-grid.png')] bg-no-repeat bg-cover bg-center
            relative w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-15 pt-15
                 ">

                    <div className="">
                        <img src="/exist.png" className="w-full h-full object-center object-cover p-0 lg:pl-10" alt="img" />
                    </div>


                    <div className="flex flex-col gap-y-5 justify-center items-center lg:items-start lg:row-start-1">
                        <Heading name={"Why We Exist"} maxWidth="max-w-60" />

                        <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">
                            We believe that growth should be accessible, leadership should be
                            developed intentionally, and career transformation should be measured
                            not left to chance..</p>
                        <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">
                            The world doesn’t just need more platforms. It needs ecosystems that
                            remove friction, unlock potential, and connect talent with purpose.</p>
                        <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">
                            Achiever Group was born from this belief.</p>
                    </div>




                    <div className="py-0 lg:py-10">
                        <img src="/view.png" className="w-full h-full object-center object-cover" alt="img" />
                    </div>


                    <div className="flex flex-col justify-center items-start p-0 lg:pl-10">
                        <InfoCard
                            titleTxtClr={'text-[#A55C2F]'}
                            titleBgClr={'bg-[#F4EDE1]'}
                            title={'Our View of the World'}
                            maxW="max-w-60 -mb-5"

                            bullet={'Talent is everywhere. Opportunity isn’t.'}
                            bullet2={'Growth is possible. But without structure, it stalls.'}
                            bullet3={"Leadership is critical. But too often, it's gatekept"}
                            bullet4={"Measurement is missing. And without it, progress lacks power."}

                            description2={'We exist to change that — across careers, industries, and systems.'}
                            bulletClr={'bg-[#A55C2F]'}
                        />
                    </div>
                </section>
            </section>
        </>
    );
}