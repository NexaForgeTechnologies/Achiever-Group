import BtnOne from "../components/BtnOne";

export default function BannerComp({ bgImg = "/Group-661.png", brown, black, yellow, BtnName = "Get In Touch" }) {
    return (
        <section className="relative rounded border border-[#A55C2F1A] overflow-hidden ">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            ></div>

            {/* Gradient Overlay + Content */}
            <div className="relative z-10 bg-gradient-to-r from-[#FFFBF6] to-[#F7F7F700] px-5 md:px-10 py-10 md:py-20 flex flex-col gap-y-5 max-w-5xl">
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
