import { Carousel, Card } from "../ui/apple-cards-carousel";

export const  Services =() => {
    const cards = data.map((card, index) => (
        <Card key={card.category} card={card} index={index} />
      ));

    return (
        <div className="bg-black text-white pt-5 pb-10">
            <div>
                <h2 className="text-[1.6rem] tracking-[3px] font-light ml-10">What We Offer</h2>
            </div>
                <div>
                <Carousel items={cards} />
                </div>
        </div>
    )
}
   
const data = [
    {
      category: "Web Development",
      title: "Unlock the Power of AI in Web Development",
    },
    {
      category: "App Development",
      title: "Boost Your App Development with AI Tools",
    },
    {
      category: "Web Design",
      title: "Transform Your Designs with Cutting-Edge Tools",
    },
    {
      category: "Graphic Design",
      title: "Revolutionize Your Creativity with Modern Tools",
    },
    {
      category: "DevOps",
      title: "Streamline Your Development Workflow with DevOps"
    },
  ];
  