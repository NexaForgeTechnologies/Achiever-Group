import Heading from "../components/Heading";

export default function AnalishaJourneyCont() {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 py-10 md:py-20 ">

                <div className="flex flex-col gap-y-5 p-0 lg:pl-10 justify-center items-center lg:items-start">
                    <Heading name={"Annalisha's Journey"} maxWidth="max-w-60" />
                    <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">From navigating the complexities of corporate procurement to mentoring
                        rising talent and driving sustainability, Annalisha has built a reputation for
                        transforming challenges into legacy-level solutions. Her career spans roles
                        with National Grid, Centrica, Rail Delivery Group, the NHS, and more—yet
                        her impact reaches far beyond contracts and cost savings.</p>

                    <div className="flex justify-center items-center lg:justify-start rounded overflow-hidden lg:row-start-1 lg:hidden">
                        <img src="/journey.png" alt="journey" className="w-full md:w-[90%] h-full object-contain object-center" />
                    </div>

                    <div className="flex flex-col gap-y-5 justify-center items-center lg:items-start p-[1px] rounded bg-gradient-to-b from-[#A55C2F] to-[#ecb6782f] overflow-hidden mt-5 lg:mt-0">
                        <div className="bg-white p-5 flex flex-col gap-y-7 rounded">
                            <p className="text-base font-semibold text-gray-500 max-w-130 text-center lg:text-start">
                                “I built Achiever Group because the future of leadership shouldn’t be
                                gatekept. Every professional deserves pathways, not barriers.”
                            </p>
                            <img src="/annalisha-noel.svg" alt="annalisha-noel" className="w-40 md:w-55 h-auto" />
                        </div>
                    </div>
                </div>

                <div className="hidden justify-center items-center lg:justify-start rounded overflow-hidden lg:row-start-1 lg:flex">
                    <img src="/journey.png" alt="journey" className="w-full md:w-[90%] h-full object-contain object-center" />
                </div>



            </section>
        </>
    );
}