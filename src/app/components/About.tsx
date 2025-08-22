import Image from 'next/image';
import Link from 'next/link';

interface AboutProps {
  id: string;
}

const whatsLink =
  'https://wa.me/558488934906?text=Ol%C3%A1%21%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20pranchas%20e%20os%20servi%C3%A7os%20oferecidos.%20Pode%20me%20ajudar%3F';

export default function About({ id }: AboutProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen py-20 px-4 flex items-center justify-center bg-gradient-to-r from-[#08678C] to-[#148BA6]"
    >
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl text-[#F2BC57] font-pacifico font-extrabold mb-4 underline decoration-[#D95032] decoration-2 underline-offset-8">
            Sobre nós
          </h2>
          <p className="text-md md:text-lg text-[#f5f5f5] font-poppins max-w-2xl mb-6">
            A <span className="font-semibold">Stamped By God</span> é uma marca
            dedicada a oferecer pranchas de alta qualidade para surfistas de
            todos os níveis.
            <br />
            Unimos paixão pelo surf, inovação e design para proporcionar a
            melhor experiência dentro e fora d&#39;água.
            <br />
            Nossos produtos são desenvolvidos com atenção aos detalhes,
            garantindo performance, durabilidade e estilo para quem vive o surf
            intensamente.
          </p>
          <Link
            href={whatsLink}
            className="inline-block px-6 py-2 font-poppins bg-[#F2BC57] text-[#D95032] rounded hover:bg-[#D95032] hover:text-[#F2BC57] transition"
          >
            Fale conosco
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/shaper.jpeg"
            alt="Shaper"
            width={320}
            height={320}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
