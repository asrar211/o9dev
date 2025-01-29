import { NumberTicker } from "../ui/number";

export function Projects() {
  return (
    <>
    <div className="flex justify-center items-ceter py-10 shadow-inner shadow-black">
    <NumberTicker
      value={50}
      className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-black"
    />
    <h1 className="text-2xl font-medium tracking-tighter text-black">+ <span className="text-lg">Projects</span> Completed</h1>
    </div>
  </>
  );
}




