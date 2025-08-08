import HowWeThinkComp from "../components/HowWeThinkComp";
import Heading from "../components/Heading";
export default function HowWeThinkCont() {
    return (
        <>
            <section className="py-15 lg:py-20">
                <div className="flex justify-center items-center py-5">
                    <Heading
                        name={'How We Think'}
                    />
                </div>
                <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">

                    <div className="flex flex-col justify-center items-center">
                        <HowWeThinkComp
                            image={'/compass.png'}
                            title={"We Are Guided By:"}
                            list1={"Clarity over complexity"}
                            list2={"Access over exclusivity"}
                            list3={"Structure over chaos"}
                            list4={"Collaboration over competition"} 
                            list5={'Purpose over vanity'}/>
                    </div>


                    <HowWeThinkComp
                        image={'/target.png'}
                        title={"We approach everything with:"}
                        list1={"Design Thinking – We build with intentionality, empathy, and innovation."}
                        list2={"Leadership Intelligence – Every product is designed to elevate decision-makers and future leaders."}
                        list3={"Ecosystem Logic – Our ventures work together, not in silos."}
                        list4={"Value Mapping – Everything aligns to the Achiever Value Framework to ensure impact at"}
                        hideLi={'hidden'}
                    />


                    <div className="flex flex-col justify-center items-center">
                        <HowWeThinkComp
                            image={'/pin.png'}
                            title={"Our philosophy informs:"}
                            list1={"The way we design each venture"}
                            list2={"The problems we choose to solve"}
                            list3={"The way we define success"}
                            list4={"The partners we work with"} 
                            list5={'The tools we build'}/>
                    </div>
                </section>
            </section>
        </>
    );
}