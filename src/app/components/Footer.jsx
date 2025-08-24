import Link from "next/link";

function Footer() {
    return (
        <footer className="w-screen ml-[calc(50%-50vw)] relative bg-[url('/footer-shape.png')] bg-no-repeat bg-contain bg-bottom">
            {/* Top Border */}
            <span className="absolute left-0 top-0 w-full h-[2px] bg-gradient-to-r from-[#bf893304] via-[#BF8933] to-[#bf893300]" />

            {/* Main Content */}
            <section className="py-15 lg:py-25 pt-15 flex flex-col lg:flex-row gap-y-10 lg:gap-x-20 xl:gap-x-30 px-5 sm:px-10 md:px-18 lg:px-20">

                {/* Left content */}
                <div className="flex flex-col gap-y-3 md:gap-y-5">
                    <img src="favlogo2.png" alt="Achiever-logo" className="w-30 md:w-40" />

                    <div className="flex items-center gap-x-1 lg:gap-x-5 gap-y-2 mt-2">
                        <span className="text-sm sm:text-base text-black">CONNECT</span>

                        <span className="flex items-center text-sm sm:text-base text-black">
                            <span className="w-2 h-2 mx-2 bg-[#BF8933] rounded-full"></span>
                            LEAD
                        </span>

                        <span className="flex items-center text-sm sm:text-base text-black">
                            <span className="w-2 h-2 mx-2 bg-[#BF8933] rounded-full"></span>
                            GROW
                        </span>

                        <span className="flex items-center text-sm sm:text-base text-black">
                            <span className="w-2 h-2 mx-2 bg-[#BF8933] rounded-full"></span>
                            MEASURE
                        </span>
                    </div>
                </div>

                {/* Lists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-28 gap-y-10 mt-5 lg:mt-0 w-full">

                    <ul className="flex flex-col gap-y-5 min-w-[170px]">
                        <h1 className="text-xl font-semibold text-black">Home</h1>

                        <li className="text-gray-900 hover:cursor-pointer">
                            <Link href="/ourventures">Our Ventures</Link>
                        </li>
                        <li className="text-gray-900 hover:cursor-pointer">
                            <Link href="/achieverValue">Achiever Value Framework</Link>
                        </li>
                        <li className="text-gray-900 hover:cursor-pointer">
                            <Link href="/executiveLeadership">Executive Leadership</Link>
                        </li>
                        <li className="text-gray-900 hover:cursor-pointer">
                            <Link href="/privacypolicy">Privacy Policy</Link>
                        </li>
                    </ul>

                    <ul className="flex flex-col gap-y-5 min-w-[170px]">
                        <h1 className="text-xl font-semibold text-black">Contact Us</h1>

                        <Link href="https://www.linkedin.com/company/achiever-group/about/?viewAsMember=true"
                            target="_blank">
                            <li className="flex items-center gap-x-3">

                                <img src="linkedin.png" alt="" className="w-5 h-5" />
                                <div className="text-gray-900 hover:cursor-pointer">
                                    Achiever Group
                                </div>
                            </li>
                        </Link>


                        <Link href="mailto:Grow@achiever-grp.com">
                            <li className="flex items-center gap-x-3">
                                <img src="text.png" alt="" className="w-5 h-5" />

                                <div className="text-gray-900 hover:cursor-pointer break-all">
                                    <u> Grow@achiever-grp.com </u>
                                </div>

                            </li>
                        </Link>


                        <li className="flex items-center gap-x-3">
                            <img src="location.png" alt="" className="w-5 h-5" />
                            <div className="text-gray-900 hover:cursor-pointer">
                                <Link href="/">UK</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Bottom Bar */}
            <section className="py-5 text-center bg-[#BF8933] text-white">
                    <p className="text-sm sm:text-base">
                       <Link href={"https://achiever-grp.com/"} target="_blank"> ©2025 Achiever Group </Link>| <Link href={"https://nexaforgetech.com/"} target="_blank"> Powered by NexaForge Technologies</Link>
                    </p>
            </section>
        </footer>
    );
}

export default Footer;
