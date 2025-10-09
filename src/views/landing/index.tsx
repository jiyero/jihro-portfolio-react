import Nav from "@/components/nav/Nav";
import About from "../../modules/landing/About";
import Hero from "../../modules/landing/Hero";
import Experience from "@/modules/landing/Experience";

function Index() {
  return (
    <div className="font-raleway">
      <Nav />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default Index;
