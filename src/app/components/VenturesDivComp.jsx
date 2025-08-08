import BtnOne from "../components/BtnOne";
import Link from "next/link";

export default function VenturesDivComp({
    image,
    borderFrom = "#A55C2F",
    borderTo = "#a55c2f28",
    bgFrom = "from-[#A55C2F]",
    bgTo = "to-[#a55c2f28]",
    BtnName = "Visit Website",
    title,
    subHead1,
    para1,
    subHead2,
    para2,
    para,
    subHeadYellow,
    para3,
    para4,
    VisitHref
}) {
    return (
        <div className={`bg-gradient-to-b from-[${borderFrom}] to-[${borderTo}] rounded p-[1px]`}>
            <div className={`flex flex-col h-full rounded px-5 py-7
                bg-gradient-to-b ${bgFrom} ${bgTo} bg-white`}>

                <img src={image} alt="" className="w-20 md:w-35 lg:w-50 h-auto mb-5" />

                <div className="flex flex-col justify-between flex-grow">
                    <div className="flex flex-col gap-y-3 md:gap-y-4">
                        <h1 className="text-2xl font-semibold text-gray-500">{title}</h1>

                        <div>
                            <h2 className="text-base font-semibold text-gray-500 mb-2">
                                {subHead1}:
                                <span className="ml-2 font-normal">{para1}</span>
                            </h2>

                            <h2 className="text-base font-semibold text-gray-500">
                                {subHead2}:
                                <span className="ml-2 font-normal text-gray-500">{para2}</span>
                            </h2>
                        </div>
                        <p className="text-base text-gray-500">{para}</p>

                        <p className="text-base text-gray-500">{para3}</p>

                        <h2 className="text-base font-semibold text-[#BF8933]">{subHeadYellow}</h2>
                        <p className="text-base text-gray-500">{para4}</p>
                    </div>

                    <BtnOne
                        name={BtnName}
                        href={VisitHref} 
                        targetLink="_blank"
                        className="mt-5"
                        bgColor="bg-transparent"
                        hoverBgColor="hover:bg-[#BF8933]"
                        textColor="text-[#BF8933]"
                        hoverTextColor="hover:text-white"
                    />
                </div>
            </div>
        </div>
    );
}
