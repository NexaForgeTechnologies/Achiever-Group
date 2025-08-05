import Heading from "../components/Heading";
export default function ExecutiveHero() {
    return (
        <>
            <section className="bg-[url('/executive-hero.png')] bg-no-repeat bg-cover bg-center
        w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20 grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20
        ">

                <section className="flex flex-col gap-y-4 pr-0 lg:pr-10">
                    <div className="flex flex-col gap-y-3 items-center lg:items-start">
                        <Heading
                            name={'Meet the Founder'}
                            maxWidth="max-w-[190px]"
                        />
                        <p className="text-base text-gray-500 text-center lg:text-start">The Vision Behind the Movement</p>
                    </div>
                    <div className="my-1 text-center lg:text-start">
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-center lg:text-start`}>
                            <span className="text-[#BF8933] text-center lg:text-start">Annalisha</span>

                            <span className="text-[#563224] ml-2 text-center lg:text-start">Noel</span>
                        </h1>
                        <i className=" text-base text-black max-w-195 text-center lg:text-start"> Founder & Chief Visionary Officer</i>
                    </div>


                    <p className="text-base text-gray-500 max-w-195 my-1 text-center lg:text-start">Trailblazer. Strategist. Connector of Purpose to Impact.</p>

                    <p className="text-base text-gray-500 max-w-195 text-center lg:text-start">With over a decade of experience driving procurement excellence
                        across Fortune 500 firms, public sector bodies, and critical infrastructure,
                        Annalisha Noel is the powerhouse behind the Achiever Group. Her journey
                        —rooted in grit, innovation, and a commitment to building equitable
                        ecosystems—led to the creation of a bold new vision: an interconnected
                        family of ventures transforming how we Connect, Grow, Lead, and Measure
                        across industries and careers..</p>

                    <h1 className="text-lg md:text-xl font-semibold text-[#808080] max-w-195 text-center lg:text-start">She’s not just a founder—she’s a force. And her purpose is clear</h1>


                    <ul className="flex flex-col gap-y-3 items-center lg:items-start">
                        <li className="flex items-center gap-x-3">
                            <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 flex-shrink-0"></span>
                            <p className="text-sm text-gray-500 text-center lg:text-start">Empower professionals to reach boardroom readiness</p>
                        </li>

                        <li className="flex items-center gap-x-3">
                            <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 flex-shrink-0"></span>
                            <p className="text-sm text-gray-500 text-center lg:text-start">Reimagine procurement as a strategic, inclusive, and high-impact field.</p>
                        </li>

                        <li className="flex items-center gap-x-3">
                            <span className="bg-[#A55C2F] rounded-full w-2.5 h-2.5 flex-shrink-0"></span>
                            <p className="text-sm text-gray-500 text-center lg:text-start">Build tools and platforms that enable real, measurable growth.</p>
                        </li>
                    </ul>
                </section>

                <section className="flex md:items-center lg:items-start justify-center p-10 lg:p-0">
                    <img src="/analisha.png" alt="img"/>
                </section>
            </section>
        </>
    );
}