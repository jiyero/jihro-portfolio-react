import PageHelmet from "@/components/pages/PageHelmet";
import { Helmet } from "react-helmet-async";
const LandingHelmet = () => {
  return (
    <>
      <PageHelmet
        title="Jihro Abendano | Frontend Developer · SEO · QA"
        description="Portfolio of Jihro Abendano, a frontend developer from the Philippines 
specializing in React and TypeScript, with growing expertise in SEO and 
a keen interest in quality assurance."
        url="https://jihro-portfolio-react.vercel.app/"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jihro Abendano",
            jobTitle: "Frontend Developer",
            url: "https://jihro-portfolio-react.vercel.app/",
            sameAs: [
              "https://github.com/yourusername",
              "https://linkedin.com/in/yourusername",
            ],
          })}
        </script>
      </Helmet>
    </>
  );
};
export default LandingHelmet;
