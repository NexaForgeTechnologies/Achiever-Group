import OurPillarsNewComp from "../components/OurPillarsNewComp";
import Heading from "../components/Heading";
export default function OurPillarsNewCont() {
    return (
        <>
            <section className="py-10 bg-gradient-to-b from-[#FFFBF6] to-[#F7F7F700] 
            flex flex-col gap-y-5 px-10 border border-[#A55C2F] border-b-[#A55C2F]/40 rounded">

                <div className="flex flex-col justify-center items-center gap-y-5 ">
                    <Heading name={'Our Pillars'} />
                    <h1 className="text-lg font-semibold text-[#808080] text-center">Every Platform, Every Principle, Aligned with purpose</h1>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5">
                    <OurPillarsNewComp
                        imageLink={"/connect-p.png"}
                        bulletClr="bg-[#5D2F6A]"
                        bullet1={"Collaboration"}
                        bullet2={"Innovation"}
                        bullet3={"Inclusion"}
                    />
                    
                    <OurPillarsNewComp
                        imageLink={"/grow-p.png"}
                        bulletClr="bg-[#F3C349]"
                        bullet1={"Empowerment"}
                        bullet2={"Progression"}
                        bullet3={"Achievement"}
                    />

                    <OurPillarsNewComp
                        imageLink={"/lead-p.png"}
                        bulletClr="bg-[#A55C2F]"
                        bullet1={"Integrity"}
                        bullet2={"Excellence"}
                        bullet3={"Legacy"}
                    />

                    
                    <OurPillarsNewComp
                        imageLink={"/measure-p.png"}
                        bulletClr="bg-[#37200E]"
                        bullet1={"Insight"}
                        bullet2={"Accountability"}
                        bullet3={"Reflection"}
                    />

                </section>
            </section>
        </>
    );
}