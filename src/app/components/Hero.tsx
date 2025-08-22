import HeroCarousel from "@/components/HeroCarousel";

interface HeroProps {
  id: string;
}

export default function Hero({ id }: HeroProps) {
  return (
    <section
      id={id}
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <HeroCarousel />
    </section>
  );
}