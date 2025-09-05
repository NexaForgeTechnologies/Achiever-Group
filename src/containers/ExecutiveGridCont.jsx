import Heading from "../components/Heading";
import InfoCard from "../components/InfoCard";
export default function ExecutiveGridCont() {
    return (
        <>
            <section className="
            bg-[url('/executive-bg.png')] bg-no-repeat bg-contain bg-top
            py-10 md:pb-15 md:pt-5 relative w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-15 ">

                    <div className="flex justify-center items-center">
                        <img src="/logo-lg.png" className=" h-full object-center object-cover p-0 lg:pl-10" alt="img" />
                    </div>


                    <div className="flex flex-col gap-y-5 justify-center items-center lg:items-start lg:row-start-1">
                        <Heading name={'Why She Built the Achiever Group'} />
                        <h1 className="text-lg font-semibold text-gray-500 max-w-195 text-center lg:text-start">The Achiever Group was born from frustration and faith:</h1>
                        <ul className="flex flex-col gap-y-2 max-w-85">
                            <li className="flex items-start gap-x-3">
                                <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 mt-1 flex-shrink-0"></span>
                                <p className="text-sm text-gray-500 lg:text-start">
                                    Frustration with fragmented opportunities and rigid systems.
                                </p>
                            </li>

                            <li className="flex items-start gap-x-3">
                                <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 mt-1 flex-shrink-0"></span>
                                <p className="text-sm text-gray-500 lg:text-start">
                                    Faith in people’s potential to thrive when given the right tools and community.
                                </p>
                            </li>
                        </ul>

                        <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">
                            Annalisha’s leadership style is rooted in service, strategy, and self-mastery.
                            She’s a certified MCIPS professional, holds a suite of business and project
                            management qualifications (including Six Sigma and PRINCE2), and is an
                            advocate for career equity and purpose-driven entrepreneurship.
                        </p>
                    </div>




                    <div className="py-0 lg:py-10">
                        <img src="/chess-db.png" className="w-full h-full object-center object-cover" alt="img" />
                    </div>


                    <div className="flex flex-col gap-y-5 justify-center items-center lg:items-start p-0 lg:pl-10">
                        <Heading name={'Backed by Strategic Brilliance'} />
                        <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">Annalisha is supported by a strategic board of 5 expert advisors—each
                            handpicked for their leadership across procurement, tech innovation,
                            learning & development, governance, and entrepreneurship.</p>

                        <h1 className="text-lg font-semibold text-gray-500 max-w-195 ">This advisory board brings:</h1>


                        <ul className="flex flex-col gap-y-2 max-w-85">
                            <li className="flex items-start gap-x-3">
                                <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 mt-1 flex-shrink-0"></span>
                                <p className="text-sm text-gray-500 lg:text-start">
                                    Cross-sector experience and enterprise insight
                                </p>
                            </li>

                            <li className="flex items-start gap-x-3">
                                <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 mt-1 flex-shrink-0"></span>
                                <p className="text-sm text-gray-500 lg:text-start">
                                    Strategic rigour for scale-up success
                                </p>
                            </li>

                            <li className="flex items-start gap-x-3">
                                <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 mt-1 flex-shrink-0"></span>
                                <p className="text-sm text-gray-500 max-w-125 lg:text-start">
                                    Trusted counsel to keep Achiever Group’s ventures impactful, sustainable, and future-ready
                                </p>
                            </li>
                        </ul>


                        <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">
                            Together, they form the guiding engine behind Annalisha’s vision, offering
                            both accountability and acceleration.
                        </p>
                    </div>
                </section>
            </section>

        </>
    );
}