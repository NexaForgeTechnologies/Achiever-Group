import Link from "next/link";
function Footer() {
    return (
        <footer className="w-screen ml-[calc(50%-50vw)] relative
        bg-[url('/footer-shape.png')] bg-no-repeat bg-contain bg-bottom ">
            <span className="absolute left-0 top-0 w-full h-[2px] bg-gradient-to-r from-[#bf893304] via-[#BF8933] to-[#bf893300] "></span>
            <section className="py-15 lg:py-25 pt-15 lg:flex gap-y-10 lg:gap-x-40 px-5 sm:px-10 md:px-18 lg:px-20
            ">

                {/* Left content */}
                <div className="flex flex-col gap-y-3 md:gap-y-5 justify-end">
                    <img src="favlogo2.png" alt="Achiever-logo" className=" w-40 md:w-40" />

                    <div className="flex items-center gap-x-1 lg:gap-x-5 mt-2 flex-wrap">
                        <p className=" text-base md:text-xl">CONNECT</p>
                        <p className="flex justify-center items-center text-base md:text-xl"><div className="w-2 h-2 mr-3 bg-[#BF8933] rounded-full"></div> LEAD</p>
                        <p className="flex justify-center items-center text-base md:text-xl"><div className="w-2 h-2 mr-3 bg-[#BF8933] rounded-full"></div> GROW</p>
                        <p className="flex justify-center items-center text-base md:text-xl"><div className="w-2 h-2 mr-3 bg-[#BF8933] rounded-full"></div> MEASURE</p>
                    </div>
                </div>

                {/* Lists */}
                <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-40 gap-y-10 mt-10 lg:mt-5 ">

                    <ul className="flex flex-col gap-y-5 max-w-[200px] lg:max-w-[300px]">
                        <h1 className="text-xl font-semibold inline-block relative">
                            Home
                        </h1>
                        <li className="text-gray-900 break-words hover:cursor-pointer">
                            <Link href="">About</Link>
                        </li>
                        <li className="text-gray-900 break-words hover:cursor-pointer">
                            <Link href="">Our Ventures</Link>
                        </li>
                        <li className="text-gray-900 break-words hover:cursor-pointer">
                            <Link href="">Achiever Value Framework</Link>
                        </li>
                        <li className="text-gray-900 break-words hover:cursor-pointer">
                            <Link href="">Executive Leadership</Link>
                        </li>
                    </ul>

                    <ul className="flex flex-col gap-y-5 max-w-[200px] lg:max-w-[300px]">
                        <h1 className="text-xl  font-semibold inline-block relative">
                            Contact Us

                        </h1>
                        <div className="flex items-center gap-x-2">
                            <img src="linkedin.png" alt="" className="w-5 h-5" />
                            <li className="text-gray-900 break-words hover:cursor-pointer">
                                <Link href="/">Achiever Group</Link>
                            </li></div>
                        <div className="flex items-center gap-x-2">
                            <img src="text.png" alt="" className="w-5 h-5" />
                            <li className="text-gray-900 break-words hover:cursor-pointer">
                                <Link href="/">grow@achievergrp.com</Link>
                            </li>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <img src="location.png" alt="" className="w-5 h-5" />
                            <li className="text-gray-900 break-words hover:cursor-pointer">
                                <Link href="/">UK</Link>
                            </li>
                        </div>
                    </ul>

                </div>


            </section>

            <section className=" py-5 gap-y-2 text-center bg-[#BF8933] text-white">
                <p>©2025 Achiever Group | Powered by NexaForge Technologies</p>
            </section>
        </footer>
    );
}

export default Footer;
