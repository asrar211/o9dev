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


export const Home = () => {
    return (
        <div>
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