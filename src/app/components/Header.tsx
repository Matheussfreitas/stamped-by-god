import Link from "next/link"

export default function Header() {
  const links = [
    { name: "Sobre", href: "#sobre" },
    { name: "Produtos", href: "#produtos" },
    { name: "Contato", href: "#contato" },
  ]
  return (
    <header className="p-4 bg-neutral-100/95 text-black top-0 sticky z-50 border-b backdrop-blur-md">
      <div className="flex items-center justify-around">
        <div>
          <h1 className="text-2xl">Stamped By God</h1>
        </div>
        <nav className="hidden md:flex">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="p-4">{link.name}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}