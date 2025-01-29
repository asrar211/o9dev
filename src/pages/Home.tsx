import { Brand } from "../components/Home/Brand";
import { Navbar } from "../components/Home/Navbar";
import { Services } from "../components/Home/Services";
import { SparklesPreview } from "../components/Home/SparklesPreview";
import { Flip } from "../components/Home/Flip";
import { Branding } from "../components/Home/Branding";
import { Projects } from "../components/Home/Projects";
import { Team } from "../components/Home/Team";


export const Home = () => {
    return (
        <div>
            <Navbar/>
            <Brand/>
            <SparklesPreview/>
            <Services/>
            <Flip/>
            <Branding/>
            <Projects/>
            <Team/>
        </div>
    )
}