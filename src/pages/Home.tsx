import { Brand } from "../components/Home/Brand";
import { Navbar } from "../components/Home/Navbar";
import { Services } from "../components/Home/Services";
import { SparklesPreview } from "../components/Home/SparklesPreview";
import { Flip } from "../components/Home/Flip";
import { Branding } from "../components/Home/Branding";
import { Projects } from "../components/Home/Projects";
import { Team } from "../components/Home/Team";
import { Logo } from "../components/Home/Logo";
import { Testimonials } from "../components/Home/Testimonials";

import { motion, useSpring, useScroll } from "motion/react"


export const Home = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div>      
            <motion.div
            className="z-50 rounded-full"
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 8,
                    originX: 0,
                    backgroundColor: "#6380f8",
                }}
            />
            <Navbar/>
            <Brand/>
            <SparklesPreview/>
            <Logo/>
            <Services/>
            <Flip/>
            <Branding/>
            <Projects/>
            <Team/>
            <Testimonials/>
        </div>
    )
}