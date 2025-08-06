import Heading from "../components/Heading";
export default function ExecutiveHero() {
    return (
        <>
            <section className="bg-[url('/executive-hero.png')] bg-no-repeat bg-cover bg-center
        w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20 grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20
        ">

                <section className="flex flex-col gap-y-4 pr-0 lg:pr-10 items-center lg:items-start">
                    <div className="flex flex-col items-center lg:items-start gap-y-3">
                        <Heading
                            name={'Meet the Founder'}
                            maxWidth="max-w-[190px]"
                        />
                        <p className="text-base text-gray-500 text-center lg:text-start">
                            The Vision Behind the Movement
                        </p>
                    </div>

                    <div className="my-1 text-center lg:text-start">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                            <span className="text-[#BF8933]">Annalisha</span>
                            <span className="text-[#563224] ml-2">Noel</span>
                        </h1>
                        <i className="text-base text-black max-w-195">
                            Founder & Chief Visionary Officer
                        </i>
                    </div>

                    <p className="text-base text-gray-500 max-w-195 my-1 text-center lg:text-start">
                        Trailblazer. Strategist. Connector of Purpose to Impact.
                    </p>

                    <p className="text-base text-gray-500 max-w-195 text-center lg:text-start">
                        With over a decade of experience driving procurement excellence
                        across Fortune 500 firms, public sector bodies, and critical infrastructure,
                        Annalisha Noel is the powerhouse behind the Achiever Group. Her journey
                        —rooted in grit, innovation, and a commitment to building equitable
                        ecosystems—led to the creation of a bold new vision: an interconnected
                        family of ventures transforming how we Connect, Grow, Lead, and Measure
                        across industries and careers.
                    </p>

                    <h1 className="text-lg md:text-xl font-semibold text-[#808080] max-w-195 text-center lg:text-start">
                        She’s not just a founder—she’s a force. And her purpose is clear
                    </h1>

                    <ul className="flex flex-col gap-y-3 ">
                        <li className="flex gap-x-3 w-full sm:w-auto">
                            <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 flex-shrink-0 mt-1"></span>
                            <p className="text-sm text-gray-500 text-start max-w-full sm:max-w-xs lg:max-w-md">
                                Empower professionals to reach boardroom readiness
                            </p>
                        </li>

                        <li className="flex gap-x-3 w-full sm:w-auto">
                            <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 flex-shrink-0 mt-1"></span>
                            <p className="text-sm text-gray-500 text-start max-w-full sm:max-w-xs lg:max-w-md">
                                Reimagine procurement as a strategic, inclusive, and high-impact field.
                            </p>
                        </li>

                        <li className="flex gap-x-3 w-full sm:w-auto">
                            <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 flex-shrink-0 mt-1"></span>
                            <p className="text-sm text-gray-500 text-start max-w-full sm:max-w-xs lg:max-w-md">
                                Build tools and platforms that enable real, measurable growth.
                            </p>
                        </li>
                    </ul>
                </section>


                <section className="flex md:items-center xl:items-start justify-center p-10 lg:p-5">
                    <img src="/analisha.png" alt="img" />
                </section>
            </section>
        </>
    );
}