import Heading from "./Heading";
export default function SetsApartCont() {
    return (
        <>
            <section className="flex justify-center items-center flex-col gap-y-3 py-10 md:py-20 lg:py-25">
                <Heading name={'What sets us apart'}/>
                <h1 className="text-lg font-semibold text-[#808080] text-center">
                    Most ecosystems focus on tools. We focus on trajectory
                </h1>
                <p className="text-base text-[#808080] text-center max-w-195">
                    The Achiever Value Framework ensures every tool, resource, and venture moves people forward
                </p>
            </section>
        </>
    );
}