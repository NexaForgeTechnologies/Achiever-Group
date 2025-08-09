"use client";
import Link from "next/link";
import Heading from "../components/Heading";
import { useEffect } from "react";
export default function PrivacyContentCont() {

    useEffect(() => {
        function handleScroll() {
          window.scrollTo({
            top: 500, // pixel position from the top
            behavior: "smooth"
        });   
        }
    }, [scrollTo]);
    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 py-10 relative scrolly">

                {/* Table of Contents */}
                <ul className="hidden flex-col gap-y-5 sm:flex sticky top-20 md:top-30 self-start">
                    <Heading name={"Table of Contents"} maxWidth="max-w-60" />

                    <Link href={"#info"}>
                        <li className="">
                            <h1 className="hover:text-[#A55C2F] active:text-[#A55C2F] text-gray-500">
                                1. Information We Collect</h1>
                        </li>
                    </Link>


                    <Link href={"#how-we-use"}>
                        <li className="">
                            <h1 className="hover:text-[#A55C2F] active:text-[#A55C2F] text-gray-500">
                                2. How We Use Your Data</h1>
                        </li>
                    </Link>

                    <Link href={"#data-sharing"}>
                        <li className="">
                            <h1 className="hover:text-[#A55C2F] active:text-[#A55C2F] text-gray-500">
                                3. Legal Basis for Processing</h1>
                        </li>
                    </Link>

                    <Link href={"#data-sharing"}>
                        <li className="">
                            <h1 className="hover:text-[#A55C2F] active:text-[#A55C2F] text-gray-500">
                                4. Data Sharing & Third Parties</h1>
                        </li>
                    </Link>

                    <Link href={"#international"}>
                        <li className="">
                            <h1 className="hover:text-[#A55C2F] active:text-[#A55C2F] text-gray-500">
                                5. International Transfers</h1>
                        </li>
                    </Link>

                    <Link href={"#data-retention"}>
                        <li className="">
                            <h1 className="hover:text-[#A55C2F] active:text-[#A55C2F] text-gray-500">
                                6. Data Retention</h1>
                        </li>
                    </Link>

                    <Link href={"#your-rights"}>
                        <li className="">
                            <h1 className="hover:text-[#A55C2F] active:text-[#A55C2F] text-gray-500">
                                7. Your Rights</h1>
                        </li>
                    </Link>

                    <Link href={"#cookies"}>
                        <li className="">
                            <h1 className="hover:text-[#A55C2F] active:text-[#A55C2F] text-gray-500">
                                8. Cookies & Tracking</h1>
                        </li>
                    </Link>

                    <Link href={"#security"}>
                        <li className="">
                            <h1 className="hover:text-[#A55C2F] active:text-[#A55C2F] text-gray-500">
                                9. Security</h1>
                        </li>
                    </Link>
                </ul>

                <section className="flex flex-col gap-y-3 lg:gap-y-5 sm:col-span-2 sm:pl-5">
                    {/* Information We Collect */}
                    <section className="flex flex-col gap-y-2 mb-5" id="info">
                        <div className="mb-2">
                            <Heading name={"Information We Collect"} />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                We may collect and process the following data:</p>
                            <h1 className="text-base text-gray-500 max-w-195 my-1 text-start font-semibold">
                                A. Personal Information</h1>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Full name</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Email address</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Phone number</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Job title and company</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">CV and employment history (if submitted)</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Billing and payment information (if applicable) </p>
                            </li>
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-base text-gray-500 max-w-195 my-1 text-start font-semibold">
                                B. Technical Data</h1>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">IP address</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Device and browser type</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Pages visited and interactions on our websites</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Referral source</p>
                            </li>
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <h1 className="text-base text-gray-500 max-w-195 my-1 text-start font-semibold">
                                C. Sensitive Data</h1>

                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                We do not intentionally collect sensitive personal data unless explicitly provided for
                                a specific service (e.g. mentoring accessibility needs or event dietary restrictions).</p>
                        </div>
                    </section>

                    {/* How We Use Your Data */}
                    <section className="flex flex-col gap-y-2 my-5" id="how-we-use">
                        <div className="mb-2">
                            <Heading name={"How We Use Your Data"} />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                We use your data to:</p>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Provide access to our platforms and services</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Process sign-ups and account creation</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Personalise your user experience</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Communicate updates, events, and marketing (with your consent)</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Conduct research and improve our services</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Maintain security and prevent fraud</p>
                            </li>
                        </div>
                    </section>


                    {/* Data Sharing & Third Parties */}
                    <section className="flex flex-col gap-y-2 my-5" id="data-sharing">
                        <div className="mb-2">
                            <Heading name={"Data Sharing & Third Parties"} />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                We do not sell your data. We may share your data with:</p>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Service providers (e.g. CRM, analytics, payment processors) under strict confidentiality</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Legal authorities where required</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Event or workshop partners (if you opt in)</p>
                            </li>
                        </div>
                    </section>


                    {/* International Transfers */}
                    <section className="flex flex-col gap-y-2 my-5" id="international">
                        <div className="mb-2">
                            <Heading name={"International Transfers"} />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                If your data is processed outside the UK, we ensure appropriate safeguards are in place,
                                such as Standard Contractual Clauses or compliance with adequacy decisions.</p>
                        </div>
                    </section>


                    {/*  Data Retention */}
                    <section className="flex flex-col gap-y-2 my-5" id="data-retention">
                        <div className="mb-2">
                            <Heading name={" Data Retention"} />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                We retain your data for as long as necessary to fulfil the purposes outlined in this policy. You can request deletion at any time by contacting us at [insert email address].
                            </p>
                        </div>
                    </section>


                    {/*  Your Rights */}
                    <section className="flex flex-col gap-y-2 my-5" id="your-rights">
                        <div className="mb-2">
                            <Heading name={" Your Rights"} />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                Under the UK GDPR, you have the right to:
                            </p>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Access your data</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Correct inaccuracies</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Request deletion</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Restrict or object to processing</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Data portability</p>
                            </li>

                            <li className="flex items-center gap-x-3">
                                <span className={` bg-[#BF8933] rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                                <p className="text-sm text-gray-500 ">Withdraw consent at any time</p>
                            </li>

                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                You can exercise your rights by contacting us at [insert contact email].
                            </p>
                        </div>
                    </section>

                    {/*  Cookies & Tracking */}
                    <section className="flex flex-col gap-y-2 my-5" id="cookies">
                        <div className="mb-2">
                            <Heading name={"Cookies & Tracking"} />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                We use cookies to enhance your browsing experience. You can manage or disable
                                cookies via your browser settings. See our [Cookie Policy] for more information.
                            </p>
                        </div>
                    </section>


                    {/* Security */}
                    <section className="flex flex-col gap-y-2 my-5" id="security">
                        <div className="mb-2">
                            <Heading name={"Security"} />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                We take appropriate technical and organizational measures to protect your data,
                                including encryption, secure servers, and access controls.
                            </p>
                        </div>
                    </section>



                    {/* contact us */}
                    <section className="flex flex-col gap-y-2 my-5" id="contact">
                        <div className="mb-2">
                            <Heading name={"Contact Us"} />
                        </div>

                        <div className="flex flex-col gap-y-2">
                            <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                We take appropriate technical and organizational measures to protect your data,
                                including encryption, secure servers, and access controls.
                            </p>
                        </div>

                        {/* Block with contact info */}
                        <div className="flex flex-col justify-center items-center lg:items-start overflow-hidden h-full">
                            <div className="flex flex-col gap-y-2 min-w-[170px] w-full
                            bg-white/10 bg-gradient-to-b from-[#FFFBF6] to-[#FFFBF6]/20 py-5 px-5 border-[1px] border-[#A55C2F] rounded items-start"
                            >
                                <h1 className="text-lg sm:text-xl font-semibold text-black">
                                    For questions or data requests, please contact:
                                </h1>

                                <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                    Achiever Group Ltd
                                </p>


                                <div className="flex flex-col gap-y-6 w-full justify-center items-start max-w-[250px] lg:items-start">
                                    <span className="flex flex-row items-center lg:items-start gap-x-3">
                                        <img src="text.png" alt="" className="w-5 h-5" />
                                        <Link href="mailto:Grow@achiever-grp.com" className="text-gray-900 hover:cursor-pointer break-all">
                                            <u> Grow@achiever-grp.com </u>
                                        </Link>
                                    </span>
                                </div>


                                <p className="text-base text-gray-500 max-w-195 my-1 text-start">
                                    If you are not satisfied with how we handle your data, you can lodge a complaint
                                    with the UK Information Commissioner’s Office (ICO): https://ico.org.uk/
                                </p>



                            </div>
                        </div>

                    </section>

                </section>
            </section>
        </>
    );
}