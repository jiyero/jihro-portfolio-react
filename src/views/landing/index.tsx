import Nav from "@/components/nav/Nav";
import About from "@/modules/landing/About";
import Hero from "@/modules/landing/Hero";
import Experience from "@/modules/landing/Experience";
import Projects from "@/modules/landing/Projects";
import LandingHelmet from "./LandingHelmet";
// import Hobbies from "@/modules/landing/Hobbies";

function Index() {
  return (
    <>
      <LandingHelmet />
      <div className="font-raleway bg-background text-primary">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          {/* <Hobbies /> */}
        </main>
      </div>
    </>
  );
}

export default Index;
