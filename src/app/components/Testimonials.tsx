import { Card, CardContent } from "@/components/ui/card";

interface TestimonialsProps {
  id: string;
}

const testimonials = [
  {
    name: "Pedro Paulo",
    role: "Surfista Profissional",
    quote:
      "As pranchas da Stamped by God revolucionaram meu desempenho nas competições. Qualidade incomparável!",
  },
  {
    name: "Marina Costa",
    role: "Instrutora de Surf",
    quote: "Uso os produtos há mais de 5 anos e nunca me decepcionei. A durabilidade é impressionante.",
  },
  {
    name: "Isak Lima",
    role: "Surfista Amador",
    quote:
      "Comecei no surf com equipamentos da Stamped by God e foi a melhor escolha que poderia ter feito.",
  },
]

export default function Testimonials({ id }: TestimonialsProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-2 bg-white font-poppins"
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <div className="mb-12 w-full">
          <h2 className="text-4xl font-pacifico font-extrabold text-center underline decoration-blue-400 decoration-2 underline-offset-8 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-center font-poppins text-lg text-neutral-600 max-w-2xl mx-auto">
            Experiências reais de surfistas que escolheram a Stamped by God
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center items-center w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col items-center w-full max-w-xs min-h-[320px]"
            >
              <CardContent className="p-6 space-y-4 flex flex-col items-center w-full">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#0ea5e9"
                      stroke="#0ea5e9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic text-center flex-1">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}