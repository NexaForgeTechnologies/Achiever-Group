
export default function OurPillarsNewComp({ imageLink, bulletClr = "bg-[#F3C349]", bullet1, bullet2, bullet3 }) {
    return (
        <>
            <div className="p-8 md:p-10 flex lg:flex-col justify-start items-center gap-y-5">
                <img src={imageLink} alt="grow-ico" className="w-30 md:w-40 lg:w-50" />


                <ul className="flex flex-col gap-y-2">
                    <li className="flex items-center gap-x-3">
                        <span className={`${bulletClr} rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                        <p className="text-sm text-[#808080] ">{bullet1}</p>
                    </li>

                    <li className="flex items-center gap-x-3">
                        <span className={`${bulletClr} rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                        <p className="text-sm text-[#808080] ">{bullet2}</p>
                    </li>

                    <li className="flex items-center gap-x-3">
                        <span className={`${bulletClr} rounded-full w-2.5 h-2.5 flex-shrink-0`}></span>
                        <p className="text-sm text-[#808080] ">{bullet3}</p>
                    </li>
                </ul>
            </div>
        </>
    );
}