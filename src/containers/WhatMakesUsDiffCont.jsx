import Heading from "../components/Heading";

export default function WhatMakesUsDiffCont() {
    return (
        <section className="justify-center gap-y-5
        flex flex-col items-center border border-[#A55C2F] border-b-[#A55C2F]/40 rounded-lg  
        bg-gradient-to-b from-orange-50 to-white-50 w-full mb-20">

            <div className="mt-5">
                <Heading name={'What makes us different'} />
            </div>


            <section className="grid grid-rows-2 grid-cols-4 relative px-5">

                {/* Middle line with responsive dash size */}
                <div className="absolute w-full h-full flex justify-center items-center">
                    <svg
                        className="absolute top-1/2"
                        width="70%"
                        height="6"
                        preserveAspectRatio="none"
                    >
                        <line
                            x1="0"
                            y1="3"
                            x2="100%"
                            y2="3"
                            stroke="#000"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="sm:[stroke-dasharray:10_10] [stroke-dasharray:10_6]"
                        />
                    </svg>
                </div>





                <div className="row-start-2 flex flex-col items-center justify-start text-center px-1 relative -top-1">
                    <span className="bg-[#A55C2F] rounded-full w-3 h-3 md:w-4 md:h-4 z-10 "></span>
                    <p className="text-[#BF8933] text-[10px] sm:text-sm md:text-sm lg:text-xl my-5">
                        We design with clarity, structure, and long-term growth in mind
                    </p>
                </div>

                <div className="row-start-1 col-start-2 flex flex-col items-center justify-end text-center px-1 relative -bottom-2 md:-bottom-3">
                    <p className="text-[#BF8933] text-[10px] sm:text-sm md:text-sm lg:text-xl my-5">
                        Every platform solves a real-world challenge
                    </p>
                    <span className="bg-[#A55C2F] rounded-full w-3 h-3 md:w-4 md:h-4 z-10"></span>
                </div>

                <div className="row-start-2 col-start-3 flex flex-col items-center justify-start text-center px-1 relative -top-1">
                    <span className="bg-[#A55C2F] rounded-full w-3 h-3 md:w-4 md:h-4 z-10"></span>
                    <p className="text-[#BF8933] text-[10px] sm:text-sm md:text-sm lg:text-xl my-5">
                        Everything aligns under one coherent,  values-led framework
                    </p>
                </div>

                <div className="row-start-1 col-start-4 flex flex-col items-center justify-end text-center px-1 relative -bottom-2 md:-bottom-3">
                    <p className="text-[#BF8933] text-[10px] sm:text-sm md:text-sm lg:text-xl my-5">
                        We enable individuals, teams, and entire organizations to thrive
                    </p>
                    <span className="bg-[#A55C2F] rounded-full w-3 h-3 md:w-4 md:h-4 z-10"></span>
                </div>
            </section>


        </section>
    );
}