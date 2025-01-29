import { FlipWords } from "../ui/flip-words";

export function Flip() {
  const words = ["better", "beautiful", "modern", "Robust"];

  return (
    <div className="h-[12rem] flex justify-center items-center px-4 bg-black">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        Softwares with US.
      </div>
    </div>
  );
}
