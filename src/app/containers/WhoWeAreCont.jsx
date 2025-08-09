import Heading from "../components/Heading";

export default function WhoWeAreCont() {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-7 pt-5 pb-10 md:py-15">
                <section className="row-start-2 lg:row-start-1 flex flex-col gap-y-5">

                    <img src="whoweare.png" alt="img" className="w-full h-full object-cover object-center" />

                </section>


                <section className="flex flex-col p-5">
                    <div className="flex flex-col gap-y-5 items-center lg:items-start">
                        <Heading name={"Who We Are"} maxWidth="max-w-60" />
                        <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">
                            <span className="text-lg font-semibold text-gray-500 ">
                                Achiever Group </span>
                            is a leadership and career infrastructure
                            company.</p>
                        <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">
                            We design solutions that make it easier for professionals to grow, for
                            businesses to unlock potential, and for industries to evolve.</p>
                        <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">
                            We don’t just create platforms — we build ecosystems that remove
                            friction from growth, empower learning, and drive measurable progress.</p>
                        <p className="text-base text-gray-500 max-w-130 text-center lg:text-start">
                            Whether you're a young professional, a mid-career pivoter, or a senior
                            leader, we provide the tools, environments, and communities to help
                            you achieve more.</p>
                        <h1 className={`text-lg font-semibold text-gray-500 text-center`}>
                            Achiever Group exists to change that.
                        </h1>
                    </div>
                </section>
            </section>
        </>
    );
}