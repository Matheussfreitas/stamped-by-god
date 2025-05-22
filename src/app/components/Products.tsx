import ProductCard from "./ProductCard"

interface ProductsProps {
  id: string
}

const produtos = [
  {
    id: 1,
    name: "Surfboards",
    image: "/surfboard.jpeg",
    description: "Pranchas de Surf de alta performance para todos os níveis.",
  },
  {
    id: 2,
    name: "Decks",
    image: "/deck.avif",
    description: "Decks antiderrapantes para maior controle e performance.",
  },
  {
    id: 3,
    name: "Quilhas",
    image: "/quilhas.jpeg",
    description: "Quilhas resistentes para máxima estabilidade.",
  },
]

export default function Products({ id }: ProductsProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col items-center overflow-hidden py-20 px-2 bg-neutral-50"
    >
      <div className="w-full max-w-6xl">

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-center mt-10 underline decoration-blue-400 decoration-2 underline-offset-8">
            Nossos Produtos
          </h1>
          <p className="text-center mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Aqui estão alguns dos nossos produtos mais populares. Escolha o seu favorito e viva a experiência Stamped By God!
          </p>
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