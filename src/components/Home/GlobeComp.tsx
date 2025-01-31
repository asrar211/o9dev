import { Globe } from "../ui/globe";

export function GlobeComp() {
  return (
    <div className="relative flex w-full size-full items-center bg-red-400 justify-center overflow-hidden bg-background px-40 pb-40 pt-8 md:pb-60 mt-[0px]">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-red-400 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-black dark:to-yellow-300/30">
        o9.dev
      </span>
      <Globe className="top-28 z-20" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
