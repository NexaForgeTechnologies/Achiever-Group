export default function HowWeThinkComp({ title, list1, list2, list3, list4, image }) {
    return (
        <div className="p-[1px] bg-gradient-to-b from-[#A55C2F] to-[#a55c2f28] rounded w-full">
            <div className="flex flex-col py-5 rounded bg-[url('/linear.png')] bg-center bg-cover p-5 bg-white">
                <img src={image} className="w-15 h-15" alt="icon" />
                <h1 className="text-lg font-normal text-gray-500 mt-5">{title}</h1>

                <ul className="flex flex-col justify-center gap-y-3 mt-3">
                    <li className="flex items-start gap-x-3">
                        <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 flex-shrink-0 relative top-2"></span>
                        <p className="text-sm text-gray-500">
                            {list1}
                        </p>
                    </li>

                    <li className="flex items-start gap-x-3">
                        <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 flex-shrink-0 relative top-2"></span>
                        <p className="text-sm text-gray-500">
                            {list2}
                        </p>
                    </li>

                    <li className="flex items-start gap-x-3">
                        <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 flex-shrink-0 relative top-2"></span>
                        <p className="text-sm text-gray-500">
                            {list3}
                        </p>
                    </li>

                    <li className="flex items-start gap-x-3">
                        <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 flex-shrink-0 relative top-2"></span>
                        <p className="text-sm text-gray-500">
                            {list4}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
