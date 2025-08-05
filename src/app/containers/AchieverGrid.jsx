import InfoCard from "../components/InfoCard";

export default function AchieverGrid({ }) {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 md:gap-20 py-10 md:py-20 lg:py-30">
                <div className="flex justify-start items-center">
                    <img src="/connect.png" />
                </div>

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
                />


                <InfoCard
                    titleTxtClr={'text-[#5D2F6A]'}
                    titleBgClr={'bg-[#582A654D]'}
                    title={'Grow'}

                    heading={'We believe growth is stronger together.'}
                    description={'We create ecosystems that foster connection, collaboration, and shared learning. Through open networks and secondments, we break silos and build bridges across industries and roles. '}
                    heading1={'Values'}

                    bullet={'Collaboration'}
                    bullet2={'Innovation'}
                    bullet3={'Inclusion'}
                    heading2={'Platform'}
                    description2={'PTX - Project and Talent Xchange – our cross-sector exchange that drives real-time professional growth and organizational learning.'}
                />

                <div className="flex justify-start items-center">
                    <img src="/Grow.png" />
                </div>

                <div className="flex justify-start items-center">
                    <img src="/lead.png" />
                </div>

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
                />

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
                />

                <div className="flex justify-start items-center">
                    <img src="/measure.png" />
                </div>
            </section>
        </>
    );
}