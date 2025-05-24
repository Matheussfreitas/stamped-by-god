import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const whatsLink = "https://wa.me/558488934906?text=Ol%C3%A1%21%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20pranchas%20e%20os%20servi%C3%A7os%20oferecidos.%20Pode%20me%20ajudar%3F";

  const socials = [
    { name: 'Instagram', href: 'https://www.instagram.com/stampedbygod', icon: <FaInstagram size={28} /> },
    { name: 'Whatsapp', href: whatsLink, icon: <FaWhatsapp size={28} /> },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-100 py-6 px-4 border-t font-poppins">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="mb-4 md:mb-0">
            <Link href="#inicio">
              <Image
                src="/stamped-by-god-logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="text-center mb-4 md:mt-5">
            <p className="text-sm text-slate-600">© {year} Todos os direitos reservados</p>
            <p className="text-sm text-slate-600 mt-1">
              Desenvolvido por <span className="font-medium">
                <Link href="https://matheusfreitas.dev.br" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">Matheus Freitas</Link>
              </span>
            </p>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center space-x-4">
            {socials.map((social) => (
              <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}