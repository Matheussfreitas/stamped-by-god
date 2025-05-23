import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero id="inicio"/>
        <About id="sobre"/>
        <Products id="produtos"/>
        <Testimonials id="depoimentos"/>
        <Footer />
      </main>
        
    </div>
  );
}
