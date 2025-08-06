import InfoCard from "../components/InfoCard";

export default function AchieverGrid({ }) {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-20 py-10 md:py-20 lg:py-30">

                <div className="flex justify-start items-center">
                    <img src="/connect.png" className="object-cover object-center w-full h-full" />
                </div>

                <div>
                    <InfoCard
                        titleTxtClr={'text-[#5D2F6A]'}
                        titleBgClr={'bg-[#582A654D]'}
                        title={'Connect'}

                        heading={'We believe growth is stronger together.'}
                        description={'We create ecosystems that foster connection, collaboration, and shared learning. Through open networks and secondments, we break silos and build bridges across industries and roles. '}
                        heading1={'Values'}

                        bullet={'Collaboration'}
                        bullet2={'Innovation'}
                        bullet3={'Inclusion'}
                        heading2={'Platform'}
                        description2={'PTX - Project and Talent Xchange – our cross-sector exchange that drives real-time professional growth and organizational learning.'}
                        bulletClr={'bg-[#5D2F6A]'}
                    />
                </div>

                <div className="flex justify-start items-center">
                    <img src="/grow.png" className="object-cover object-center w-full h-full" />
                </div>

                <div className="md:row-start-2">
                    <InfoCard
                        titleTxtClr={'text-[#ECB83E]'}
                        titleBgClr={'bg-[#EEBA3E4D]'}
                        title={'Grow'}

                        heading={'We simplify the path to progress'}
                        description={'We support individuals at every stage of their journey — from entry to mid-senior — through tools, mentorship, and intentional development frameworks.'}
                        heading1={'Values'}

                        bullet={'Empowerment'}
                        bullet2={'Progression'}
                        bullet3={'Achievement'}
                        heading2={'Platform'}
                        description2={'The Procurement Plug – community, career hub, and capability ecosystem for procurement professionals.'}
                        bulletClr={'bg-[#ECB93D]'}
                    />
                </div>

                <div className="flex justify-start items-center">
                    <img src="/lead.png" className="object-cover object-center w-full h-full" />
                </div>

                <div>
                    <InfoCard
                        titleTxtClr={'text-[#A55C2F]'}
                        titleBgClr={'bg-[#A85A224D]'}
                        title={'Lead'}

                        heading={'We don’t lead for you. We help you lead better'}
                        description={'We empower our professionals — from senior managers to C-suite and boardroom executives to become ethical, strategic, and transformational leaders. Leadership isn’t a title. It’s a mindset and a mission.'}
                        heading1={'Values'}

                        bullet={'Integrity'}
                        bullet2={'Excellence'}
                        bullet3={'Legacy'}
                        heading2={'Platform'}
                        description2={'Xec Plug – a leadership suite designed for CPOs, executives, and boardroom-ready professionals focused on purpose-driven leadership.'}
                        bulletClr={'bg-[#A55C2F]'}
                    />
                </div>

                <div className="flex justify-start items-center">
                    <img src="/measure.png" className="object-cover object-center w-full h-full" />
                </div>

                <div className="md:row-start-4">
                    <InfoCard
                        titleTxtClr={'text-[#371F0D]'}
                        titleBgClr={'bg-[#371F0D4D]'}
                        title={'Measure'}

                        heading={'Insight powers intelligent growth'}
                        description={'Growth without measurement is guesswork. We provide tools that benchmark, track, and reflect — empowering professionals and teams to grow with clarity and accountability.'}
                        heading1={'Values'}

                        bullet={'Insight'}
                        bullet2={'Accountability'}
                        bullet3={'Reflection'}
                        heading2={'Platform'}
                        description2={'AchieveMeter – our AI-powered career and leadership benchmarking tool guiding personal and team progression with data-driven insight.'}
                        bulletClr={'bg-[#37200E]'}
                    />
                </div>

            </section>
        </>
    );
}