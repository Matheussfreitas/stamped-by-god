import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const links = [
    { name: "Sobre", href: "#sobre" },
    { name: "Produtos", href: "#produtos" },
    { name: "Depoimentos", href: "#depoimentos" },
  ]
  return (
    <header className="p-4 bg-neutral-100/95 text-black top-0 sticky z-50 border-b backdrop-blur-md font-poppins">
      <div className="flex items-center justify-around">
        <div>
          <Link href="#inicio">
            <Image
              src="/stamped-by-god-nome.png"
              alt="Logo"
              width={250}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>
        <nav className="hidden md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="p-4 transition-colors duration-200 hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-slate-900/50"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}