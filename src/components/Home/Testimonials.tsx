import { CardStack } from "../ui/card-stack";
import { cn } from "../../lib/utils";
export function Testimonials() {
  return (
    <div className="bg-red-400">
    <div className="h-5 round bg-black"></div>
    <div>
        <h2 className="ml-10 mt-10 text-2xl font-medium text-white">What Our Customers Say</h2>
    </div>
    <div className="h-[25rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Mubashir Hussain",
    designation: "Businessman",
    content: (
      <p>
        o9dev transformed my online store! The design is sleek, and the site runs faster than ever. <Highlight>Sales have increased significantly since the launch.</Highlight>
      </p>
    ),
  },
  {
    id: 1,
    name: "Moin Khan",
    designation: "Drug Dealer",
    content: (
      <p>
        I was struggling to get online visibility until I worked with this agency. <Highlight>Now, my business ranks higher in searches </Highlight>.
      </p>
    ),
  },
  {
    id: 2,
    name: "Danish Abbass",
    designation: "Project Manager at Google",
    content: (
      <p>
        <Highlight>From UI/UX to backend performance,</Highlight> they nailed every aspect of our SaaS platform. The site loads instantly, and our customers love the experience!
      </p>
    ),
  },
];
