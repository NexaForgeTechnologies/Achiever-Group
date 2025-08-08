import Heading from "./Heading";
export default function InfoCard({ title, heading, heading1, heading2, description, description2, bullet, bullet2,
    bullet3, bullet4, titleTxtClr, titleBgClr, bulletClr, maxW = "max-w-30", hide }) {
    return (
        <>

            <section className="flex flex-col gap-y-3">
                <Heading name={title} maxWidth={maxW} bgColor={titleTxtClr} textColor={titleBgClr} />
                
                <h1 className="text-lg font-semibold text-gray-500 max-w-195 ">
                    {heading}
                </h1>
                <p className="text-base text-gray-500 max-w-130 ">
                    {description}
                </p>


                <h1 className="text-lg font-semibold text-gray-500 max-w-195 ">
                    {heading1}
                </h1>

                <ul className="flex flex-col gap-y-2">
                    <li className="flex items-center gap-x-3">
                        <span className={`${bulletClr} rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                        <p className="text-sm text-gray-500 ">{bullet}</p>
                    </li>
                    <li className="flex items-center gap-x-3">
                        <span className={`${bulletClr} rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                        <p className="text-sm text-gray-500 ">{bullet2}</p>
                    </li>
                    <li className="flex items-center gap-x-3">
                        <span className={`${bulletClr} rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                        <p className="text-sm text-gray-500 ">{bullet3}</p>
                    </li>
                    <li className="flex items-center gap-x-3">
                        <span className={`${bulletClr} ${hide} rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                        <p className={`text-sm text-gray-500`}>{bullet4}</p>
                    </li>
                </ul>

                <h1 className="text-lg font-semibold text-gray-500 max-w-195 ">
                    {heading2}
                </h1>
                <p className="text-base text-gray-500 max-w-130">
                    {description2}
                </p>

            </section>
        </>
    );
}