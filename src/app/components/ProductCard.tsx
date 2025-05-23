import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  image: string;
}

export default function ProductCard({ name, image }: ProductCardProps) {
  return (
    <Card className="relative overflow-hidden aspect-square w-full max-w-xs hover:scale-105 transition-transform shadow-lg font-poppins">
      <CardContent className="p-0 h-full">
        <Image
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover z-0"
          fill
          sizes="(max-width: 400px) 100vw, 400px"
          priority={name === "Surfboard"}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40 px-4 text-center">
          <h2 className="text-2xl text-white font-bold drop-shadow mb-2">{name.toUpperCase()}</h2>
          
          <Button className="mt-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
            Ver mais
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}