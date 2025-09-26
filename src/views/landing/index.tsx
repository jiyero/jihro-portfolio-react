import Nav from "@/components/nav/Nav";
import About from "../../modules/landing/About";
import Hero from "../../modules/landing/Hero";
import Experience from "@/modules/landing/Experience";

function Index() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
    </>
  );
}

export default Index;
