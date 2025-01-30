import { SparklesCore } from "../ui/sparkles";
import {Link} from "react-router-dom"
import { FlipWords } from "../ui/flip-words";

export function SparklesPreview() {
  const words = ["Webistes", "Apps", "Brands"];
  return (
    <div className="h-[40rem] pb-[70px] relative w-full bg-black flex flex-col items-center justify-end overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>
      <h1 className="leading-[3rem] md:leading-[5rem] md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
       Building <span className="text-green-400"><FlipWords words={words} /></span> <br/> <span className="text-blue-400">Driving</span> Success.
       <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </h1>
      <p className="text-center  text-white xl:mx-32 text-sm font-thin lg:text-xl mt-5 mx-8" style={{ textShadow: '0 4px 6px rgba(255, 255, 255, 0.5)' }}>
      We deliver web design, development, app creation, DevOps, hosting, and graphic design services to elevate your digital presence.
      </p>   
      <button className="z-30 mt-30 border text-lg font-semibold relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-10 py-3 rounded-md">
      <span className="absolute inset-x-0 w-full mx-auto -top-px bg-gradient-to-r from-transparent via-green-500 to-transparent  h-px" />
      <Link to='/grow'>Get Yours</Link>
      </button>
    </div>
  );
}
