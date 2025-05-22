import Image from 'next/image'
import Link from 'next/link'

interface AboutProps {
  id: string
}

export default function About({ id }: AboutProps) {
  return (
    <section id={id} className="relative min-h-screen py-20 px-4 bg-white flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4 underline decoration-blue-400 decoration-2 underline-offset-8">
            Sobre nós
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mb-6">
            A <span className="font-semibold">Stamped By God</span> é uma marca de surfboards dedicada a oferecer pranchas de alta qualidade para surfistas de todos os níveis.<br />
            Unimos paixão pelo surf, inovação e design para proporcionar a melhor experiência dentro e fora d&#39;água.<br />
            Nossos produtos são desenvolvidos com atenção aos detalhes, garantindo performance, durabilidade e estilo para quem vive o surf intensamente.
          </p>
          <Link
            href="#contato"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
  )
}