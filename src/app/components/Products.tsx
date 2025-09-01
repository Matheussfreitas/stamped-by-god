import ProductCard from "./ProductCard"

interface ProductsProps {
  id: string
}

const produtos = [
  {
    id: 1,
    name: "Surfboards",
    image: "/quiver/quiver1.jpeg",
    description: "Pranchas de Surf de alta performance para todos os níveis.",
  },
  {
    id: 2,
    name: "Decks",
    image: "/quiver/quiver2.jpeg",
    description: "Decks antiderrapantes para maior controle e performance.",
  },
  {
    id: 3,
    name: "Quilhas",
    image: "/quiver/quiver3.jpeg",
    description: "Quilhas resistentes para máxima estabilidade.",
  },
]

export default function Products({ id }: ProductsProps) {
  return (
    <section
      id={id}
      className="relative min-h-[80vh] flex flex-col items-center overflow-hidden py-20 px-2 bg-gradient-to-l from-[#08678C] to-[#148BA6]"
    >
      <div className="w-full max-w-6xl">

        <div className="mb-12">
          <h1 className="text-4xl font-pacifico font-extrabold text-center mt-10 underline text-[#F2BC57] decoration-[#D95032] decoration-2 underline-offset-8">
            Nosso Quiver
          </h1>
          <p className="text-center font-poppins mt-4 text-md md:text-lg text-[#f5f5f5] max-w-2xl mx-auto">
            Modelos Performance, Intermediários e Funboards.
          </p>
          <p className="text-center font-poppins text-md md:text-lg text-[#f5f5f5] max-w-2xl mx-auto">Escolha o seu favorito e viva a experiência Stamped By God!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-start">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              name={produto.name}
              image={produto.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}