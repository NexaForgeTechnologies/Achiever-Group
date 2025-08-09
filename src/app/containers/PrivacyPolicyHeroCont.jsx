import Heading from "../components/Heading";
export default function PrivacyPolicyHeroCont() {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 bg-[url('/privacy-bg.png')] bg-no-repeat bg-cover bg-center relative w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20 ">
                <section className="flex flex-col gap-y-5 items-center lg:items-start py-10 md:py-15 lg:py-20">
                    <Heading name={'Privacy Policy'} maxWidth="max-w-40" />

                    <div>
                        <h2 className="text-base font-semibold text-[#BF8933] mb-2">
                            Effective Date :
                            <span className="ml-2 text-black font-normal"> 08.2025</span>
                        </h2>

                        <h2 className="text-base font-semibold text-[#A55C2F] mb-2">
                            Last Updated:
                            <span className="ml-2 text-black font-normal"> 08.2025</span>
                        </h2>
                    </div>

                    <p className="text-base text-gray-500 max-w-[500px] text-center lg:text-start">This privacy policy applies to all digital platforms, websites, tools,
                        and services operated by Achiever Group Ltd, including but not
                        limited to The Procurement Plug, PTX – Project and Talent Xchange,
                        AchieveMeter, and Xec Plug (collectively referred to as “we” “our” ,
                        , or “us”).</p>

                    <p className="text-base text-gray-500 max-w-[500px] text-center lg:text-start">We are committed to protecting your privacy and handling your
                        personal data with transparency and care. This policy outlines
                        how we collect, use, store, and protect your data in line with the
                        UK GDPR and the Data Protection Act 2018.</p>

                </section>

                <section className="m-10 flex justify-center lg:justify-end items-center">
                    <img src="/privacy-img.png" className="" />
                </section>
            </section>
        </>
    );
}