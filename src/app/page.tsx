import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero id="inicio"/>
        <About id="sobre"/>
        <Products id="produtos"/>
      </main>
        
    </div>
  );
}
