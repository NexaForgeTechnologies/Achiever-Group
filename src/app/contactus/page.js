import Heading from "../components/Heading";
import Link from "next/link";
export default function ContactUs() {
    return (
        <>
            <section className="bg-[url('/contactus-hero.png')] bg-no-repeat bg-cover bg-center 
            w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20 py-20 lg:py-30">

                <section className="grid grid-cols-1 lg:grid-cols-2 ">
                    <div className="flex flex-col justidy-center items-center lg:items-start gap-y-5">
                        <Heading
                            name={'Contact Us'}
                            maxWidth="max-w-40"
                        />

                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-center lg:text-start`}>
                            <span className="text-[#BF8933]">Have questions
                                or </span>

                            <span className="text-[#A55C2F]">need assistance</span>

                            <span className="text-black">?</span>
                        </h1>
                        <p className="text-base text-gray-500 text-center lg:text-start max-w-130">Our friendly team is here to help! Whether you’re looking for more
                            information about our services, need support, or just want to share
                            feedback, we’d love to hear from you.</p>
                    </div>




                    <div className="flex flex-col justify-center items-center lg:items-start overflow-hidden h-full p-5 md:p-10">
                        <div
                            className="flex flex-col gap-y-6 min-w-[170px] w-full
                            bg-white/10 bg-gradient-to-b from-[#FFFBF6] to-[#FFFBF6]/20 py-5 px-5 md:px-10 border-[1px] border-[#A55C2F] rounded items-center lg:items-start"
                        >
                            <h1 className="text-lg sm:text-xl font-semibold text-black">
                                Have questions? Let’s connect.
                            </h1>

                            <div className="flex flex-col gap-y-6 w-full justify-center items-start max-w-[250px] lg:items-start">
                                <span className="flex flex-row items-center lg:items-start gap-x-3">
                                    <img src="linkedin.png" alt="" className="w-5 h-5" />
                                    <Link href="https://www.linkedin.com/company/achiever-group/about/?viewAsMember=true"
                                        target="_blank">
                                        Achiever Group
                                    </Link>
                                </span>

                                <span className="flex flex-row items-center lg:items-start gap-x-3">
                                    <img src="text.png" alt="" className="w-5 h-5" />
                                    <Link href="mailto:Grow@achiever-grp.com" className="text-gray-900 hover:cursor-pointer break-all">
                                        <u> Grow@achiever-grp.com </u>
                                    </Link>
                                </span>

                                <span className="flex flex-row items-center lg:items-start gap-x-3">
                                    <img src="location.png" alt="" className="w-5 h-5" />
                                    <Link href="/" className="text-gray-900 hover:cursor-pointer">
                                        UK
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>

                </section>
            </section >
        </>
    );
}
