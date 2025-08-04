import Heading from "../components/Heading";
import BtnOne from "../components/BtnOne";
export default function HomeHeroCont() {
    return (
        <section className="flex flex-col items-center justify-center pt-10 pb-5 md:pb-20 md:pt-30 px-5 sm:px-10 md:px-18 lg:px-20 gap-y-5 w-screen ml-[calc(50%-50vw)] min-h-140 bg-[url('/herobg.png')] bg-no-repeat bg-cover bg-center">


            <section className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-start gap-y-5">
                    <div className="flex justify-center md:justify-start">
                        <Heading
                            maxWidth="max-w-auto"
                            name={'Powering Talent. Elevating Leadership. Transforming Industries.'}
                        />
                    </div>

                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold`}>
                        <span className="text-[#BF8933] flex justify-center md:justify-start items-center flex-wrap gap-x-2">
                            <span className="text-[#BF8933]">  CONNECT</span>
                            <div className="md:w-4 md:h-4 w-3 h-3 rounded-full inline-block bg-[#A55C2F]"></div>
                            <span className="text-black">  LEAD </span>
                            <div className="md:w-4 md:h-4 w-3 h-3 rounded-full inline-block bg-[#A55C2F]"></div>
                            <span className="text-[#563224]">GROW </span>
                            <div className="md:w-4 md:h-4 w-3 h-3 rounded-full inline-block bg-[#A55C2F]"></div>
                            MEASURE
                        </span>

                    </h1>
                    <p className="text-base text-gray-500 max-w-195 text-center md:text-start">Achiever Group is the parent company behind a suite of purpose-driven platforms designed to accelerate careers, build bold leaders, and enable organisations to thrive.</p>


                    <div className="flex gap-x-3 md:gap-x-5 justify-center md:justify-start">
                        <BtnOne name={'Explore Our Ventures'}
                        />
                        <BtnOne name={'Discover Our Framework'}
                            href={'/'}
                            className=""
                            bgColor="bg-transparent"
                            hoverBgColor="hover:bg-[#BF8933]"
                            textColor="text-[#BF8933]"
                            hoverTextColor="hover:text-[white]"
                        />
                    </div>
                </div>

                <div className="m-10 flex justify-center lg:justify-end items-center">
                    <img src="/heroMainImg.png" className="md:mt-10 lg:mt-0" />
                </div>
            </section>
        </section>
    );
}