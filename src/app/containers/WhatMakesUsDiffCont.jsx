import Heading from "../components/Heading";

export default function WhatMakesUsDiffCont() {
    return (
        <section className="flex justify-center items-center flex-col gap-y-3 py-10 md:py-20 lg:py-25">
            <div className="flex flex-col items-center border border-orange-300 rounded-lg p-6 bg-gradient-to-b from-orange-50 to-white-50 w-full max-w-6xl mx-auto">

                <Heading name={'What makes us different'} />
                
                <div className="pt-10 w-full flex flex-col items-center md:flex-row md:justify-between md:items-start gap-6 md:gap-0">

                    <div className="flex flex-col items-center text-center max-w-[200px] p-2">
                        <span className="bg-[#A55C2F] rounded-full w-3 h-3 mb-2"></span>
                        <p className="text-[#BF8933] text-sm">
                            We design with clarity, structure, and long-term growth in mind
                        </p>
                    </div>


                    <div className="flex flex-col items-center text-center max-w-[200px] p-2">
                        <span className="bg-[#A55C2F] rounded-full w-3 h-3 mb-2"></span>
                        <p className="text-[#BF8933] text-sm">
                            Every platform solves a real-world challenge
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center max-w-[200px] p-2">
                        <span className="bg-[#A55C2F] rounded-full w-3 h-3 mb-2"></span>
                        <p className="text-[#BF8933] text-sm">
                            Everything aligns under one coherent, values-led framework
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center max-w-[200px] p-2">
                        <span className="bg-[#A55C2F] rounded-full w-3 h-3 mb-2"></span>
                        <p className="text-[#BF8933] text-sm">
                            We enable individuals, teams, and entire organizations to thrive
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}