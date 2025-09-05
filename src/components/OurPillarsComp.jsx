
export default function OuPillarsComp({icon, title, list1, list2, list3, borderClr, bulletClr, bgClr }) {
    return (
        <>
            <div className="p-5">
                <div className={`border ${borderClr} ${bgClr} rounded relative flex flex-col gap-y-5 p-5`}>

                    <img src={icon} alt="icon"
                        className="absolute -top-10 -left-10 w-20 h-20 lg:w-25 lg:h-25 border-10 border-white rounded-full" />
                    <h1 className="text-xl md:text-3xl font-semibold text-black pl-[20%]">{title}</h1>


                    <ul className="flex flex-col gap-y-2 max-w-85">
                        <li className="flex items-start gap-x-3">
                            <span className={`${bulletClr} rounded-full w-4 h-4 mt-1 flex-shrink-0 relative top-1`}></span>
                            <p className={`text-lg md:text-xl lg:text-2xl text-gray-500 lg:text-start`}>
                                {list1}
                            </p>
                        </li>

                        <li className="flex items-start gap-x-3">
                            <span className={`${bulletClr} rounded-full w-4 h-4 mt-1 flex-shrink-0 relative top-1`}></span>
                            <p className={`text-lg md:text-xl lg:text-2xl text-gray-500 lg:text-start`}>
                               {list2}
                            </p>
                        </li>

                        <li className="flex items-start gap-x-3">
                            <span className={`${bulletClr} rounded-full w-4 h-4 mt-1 flex-shrink-0 relative top-1`}></span>
                            <p className={`text-lg md:text-xl lg:text-2xl text-gray-500 lg:text-start`}>
                                {list3}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}