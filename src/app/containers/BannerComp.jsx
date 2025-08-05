import BtnOne from "../components/BtnOne";

export default function BannerComp({ bgImg = "/Group-661.png", brown, black, yellow, BtnName = "Get In Touch" }) {
    return (
        <section className="relative rounded border border-[#A55C2F1A] overflow-hidden my-10 md:my-20 ">
            {/* border-[#A55C2F1A] */}
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            ></div>

            {/* Gradient Overlay + Content */}
            <div className="relative z-10 bg-gradient-to-r from-[#FFFBF6] via-[#FFFBF6]
             to-[#FFFBF6]/70 sm:to-[#FFFBF6]/0 px-5 md:px-10 py-7 md:py-10 flex flex-col gap-y-5 max-w-150">
                <h1 className="text-2xl md:text-4xl font-semibold max-w-4xl leading-tight">
                    <span className="text-[#A55C2F]">{brown}</span>
                    <span className="text-black"> {black}</span>
                    <span className="text-[#BF8933]"> {yellow}</span>
                </h1>

                <BtnOne name={BtnName} />
            </div>
        </section>
    );
}
