import HeroComp from "../components/HeroComp";
import AchieverGrid from "../containers/AchieverGrid";

export default function AchieverValueFramework() {
    return (
        <>
            <HeroComp
                title={'Achiever Value Framework'}
                maxWidth={'max-w-170'}
                yellow={'What Is the'}
                yellow2={'Value Framework'}
                black={'?'}
                brown={'Achiever'}
                para={'The Achiever Value Framework is the foundation of everything we do. It’s our compass — a system of four pillars that guide how we build, how we serve, and how we help individuals and organizations progress.'}
                para2={"Whether you're early in your career or navigating board-level leadership, our platforms are mapped to one or more of these values to deliver clarity, confidence, and forward movement."}
            />
            <AchieverGrid />
        </>
    );
}