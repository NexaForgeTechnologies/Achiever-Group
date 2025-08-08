import Heading from "../components/Heading";
import OuPillarsComp from "../components/OurPillarsComp";

export default function OurPillarsCont() {
    return (
        <>
            <section className="py-10 bg-gradient-to-b from-[#FFFBF6] to-[#F7F7F700] 
            flex flex-col gap-y-5 px-10 border border-[#A55C2F] border-b-[#A55C2F]/40 rounded">

                <div className="flex flex-col justify-center items-center gap-y-5 mb-10">
                    <Heading name={'Our Pillars'} />
                    <h1 className="text-lg font-semibold text-gray-500 text-center">Every Platform, Every Principle, Aligned with purpose</h1>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-y-5">
                    <OuPillarsComp
                        icon={"/grow-ico.png"}
                        title={"GROW"}
                        list1={"Empowerment"}
                        list2={"Progression"}
                        list3={"Achievement"}

                        borderClr={"border-[#F3C349]"}
                        bulletClr={"bg-[#F3C349]"}
                        bgClr={"bg-[#F3C34933]"}
                    />


                    <OuPillarsComp
                        icon={"/lead-ico.png"}
                        title={"LEAD"}
                        list1={"Integrity"}
                        list2={"Excellence"}
                        list3={"Legacy"}

                        borderClr={"border-[#A55C2F]"}
                        bulletClr={"bg-[#A55C2F]"}
                        bgClr={"bg-[#A95C2433]"}
                    />



                    <OuPillarsComp
                        icon={"/connect-ico.png"}
                        title={"CONNECT"}
                        list1={"Collaboration"}
                        list2={"Innovation"}
                        list3={"Inclusion"}

                        borderClr={"border-[#5D2F6A]"}
                        bulletClr={"bg-[#5D2F6A]"}
                        bgClr={"bg-[#5B2D6833]"}
                    />



                    <OuPillarsComp
                        icon={"/measure-ico.png"}
                        title={"MEASURE"}
                        list1={"Insight"}
                        list2={"Accountability"}
                        list3={"Reflection"}

                        borderClr={"border-[#3A210F]"}
                        bulletClr={"bg-[#3A210F]"}
                        bgClr={"bg-[#3A210F33]"}
                    />

                </section>



            </section>
        </>
    );
}