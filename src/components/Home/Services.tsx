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
      src: "web-development.jpg",
      content: "Learn how AI can enhance your web development process."
    },
    {
      category: "App Development",
      title: "Boost Your App Development with AI Tools",
      src: "app-development.jpg",
      content: "Discover AI tools that can accelerate your app development."
    },
    {
      category: "Web Design",
      title: "Transform Your Designs with Cutting-Edge Tools",
      src: "web-design.jpg",
      content: "Explore modern tools that can transform your web designs."
    },
    {
      category: "Graphic Design",
      title: "Revolutionize Your Creativity with Modern Tools",
      src: "graphic-design.jpg",
      content: "Unleash your creativity with the latest graphic design tools."
    },
    {
      category: "DevOps",
      title: "Streamline Your Development Workflow with DevOps",
      src: "devops.jpg",
      content: "Optimize your development workflow with DevOps practices."
    },
  ];
  