import VenturesDivComp from "../components/VenturesDivComp";
export default function VenturesDivCont() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-7 py-10 md:py-20 lg:py-30 bg-white">

                <VenturesDivComp
                    image={"/procurement.png"}
                    borderFrom="#85009D"
                    borderTo="#A55C2F1A"
                    BtnName="Visit Website"
                    bgFrom="from-[#85009D1A]"
                    bgTo="to-[#85009D00]"


                    title={'The Procurement Plug'}
                    subHead1={'Pillars'}
                    para1={'Connect | Grow'}
                    subHead2={'Status'}
                    para2={'Ready for launch'}
                    para={'TPP is where procurement professionals thrive.'}
                    para3={' A vibrant ecosystem that blends career development, training, community, mentorship, and strategic content — built to transform how professionals learn, grow, and collaborate in procurement and supply chain.'}

                    subHeadYellow={'Job Board • Events • Academy • Career Hub • Procurement Concierge • Mentorship'}
                />


                <VenturesDivComp
                    image={"/ptx-gold.png"}
                    borderFrom="#A55C2F"
                    borderTo="#a55c2f28"
                    BtnName="Visit Website"
                    bgFrom="from-[#D2923A1A]"
                    bgTo="to-[#D2923A00]"


                    title={'PTX – Project & Talent Xchange'}
                    subHead1={'Pillars'}
                    para1={'Connect | Grow | Lead'}
                    subHead2={'Status'}
                    para2={'In build, launching pilot Nov 2025'}
                    para3={'PTX redefines workforce agility through structured secondments and talent exchange. This platform allows businesses to unlock internal and cross industry capability, while professionals gain access to new projects, experiences, and accelerated development.'}

                    subHeadYellow={'Live project exchanges • Internal & external placements • Learning Vault • Reporting dashboards'}

                    para4={'Includes: XecXchange Module for executive-level secondments.'}
                />

                 <VenturesDivComp
                    image={"/xec.png"}
                    borderFrom="#E1A73A"
                    borderTo="#A55C2F1A"
                    BtnName="Visit Website"
                    bgFrom="from-[#EDC7441A]"
                    bgTo="to-[#D0924000]"


                    title={'Xec Plug'}
                    subHead1={'Pillars'}
                    para1={'Lead | Grow'}
                    subHead2={'Status'}
                    para2={'Launching Q3 2026'}
                    para={'Xec Plug is the leadership track of the Achiever ecosystem.'}
                    para3={' Designed for senior procurement professionals and rising executives, it offers tailored leadership learning, executive peer exchanges, mentorship, and boardroom readiness through intelligent partnership and proprietary tools and experiences.'}

                    subHeadYellow={'Executive coaching • PTX XecXchange • Retreats • Leadership Index • White Glove Concierge'}
                />


                <VenturesDivComp
                    image={"/achieveMeter.png"}
                    borderFrom="#A55C2F"
                    borderTo="#A55C2F1A"
                    BtnName="Visit Website"
                    bgFrom="from-[#D092401A]"
                    bgTo="to-[#D0924000]"


                    title={'AchieveMeter'}
                    subHead1={'Pillars'}
                    para1={'Grow | Measure'}
                    subHead2={'Status'}
                    para2={'In development'}
                    para3={'PTX redefines workforce agility through structured secondments and talent exchange. This platform allows businesses to unlock internal and cross industry capability, while professionals gain access to new projects, experiences, and accelerated development.'}

                    subHeadYellow={'Live project exchanges • Internal & external placements • Learning Vault • Reporting dashboards'}

                    para4={'Includes: XecXchange Module for executive-level secondments.'}
                />

            </section>
        </>
    );
}