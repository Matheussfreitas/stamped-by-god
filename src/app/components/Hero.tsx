import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroProps {
  id: string;
}

export default function Hero({ id }: HeroProps) {
  return (
    <section
      id={id}
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <Image
        src="https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Hero background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-8 z-10 bg-black/40">

        <h1 className="text-center text-7xl flex flex-col text-white drop-shadow-lg">
          <span className="font-bold">STAMPED</span>
          <span>BY GOD</span>
        </h1>

        <div className="text-center text-2xl text-white drop-shadow-lg">
          <p className="text-white">Loucos por surf</p>
          <p className="text-white">Loucos por Stamped By God</p>
        </div>

        <div className="flex gap-4">
          <Button variant="outline">Nossos Produtos</Button>
          <Button variant="outline">Sobre Nós</Button>
        </div>

      </div>
    </section>
  );
}