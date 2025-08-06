import BtnOne from "../components/BtnOne";
export default function ExecutiveBanner() {
    return (
        <>
            <section className="py-10 md:py-20">
                <section className="relative rounded border border-[#A55C2F1A] overflow-hidden min-h-[290px] flex flex-col justify-center">
                    {/* border-[#A55C2F1A] */}
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('/executivebanner.png')` }}
                    ></div>

                    {/* Gradient Overlay + Content */}
                    <div className="relative z-10 bg-gradient-to-r from-[#FFFBF6] via-[#FFFBF6] min-h-[290px]
                     to-[#FFFBF6]/70 sm:to-[#FFFBF6]/0 px-5 md:px-10 py-7 md:py-10 flex flex-col justify-center gap-y-5 max-w-150">
                        <h1 className="text-2xl md:text-4xl font-semibold max-w-4xl leading-tight">
                            <span className="text-[#BF8933]">Connect with </span>
                            <span className="text-[#A55C2F]"> Annalisha</span>
                        </h1>
                        <div className="flex items-center gap-x-3">
                            <img src="/linkedin-brown.png" alt="linkedin" className="w-7 h-7" />
                            <p className="text-base text-gray-500">Annalisha Noel, MCIPS</p>
                        </div>

                        <BtnOne name={'Get in Touch'} />
                    </div>
                </section>
            </section>
        </>
    );
}