import Heading from "./Heading"
export default function HeroComp({ yellow, brown, yellow2, black, para, para2, title, maxWidth, breakline }) {
    return (
        <>

            <div className="flex flex-col items-center justify-center py-20 px-5 sm:px-10 md:px-18 lg:px-20 gap-y-5
            bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-center w-screen ml-[calc(50%-50vw)] min-h-120
            ">
                <Heading
                    name={title} />

                <h1 className={`text-4xl md:text-5xl lg:text-6xl ${maxWidth} font-semibold text-center`}>
                    <span className="text-[#BF8933]"> {yellow} </span>

                    <span className="text-[#563224] ml-2">{brown} </span>
                    <span className="text-[#BF8933]">
                        {yellow2} {breakline}
                    </span>
                    <span className="text-black">
                    {black}</span>
                </h1>
                <p className="text-base text-gray-500 text-center max-w-195">{para} </p>
                <p className="text-base text-gray-500 text-center max-w-195">{para2}</p>
            </div>
        </>
    )
}