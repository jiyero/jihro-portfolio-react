import PageHelmet from "@/components/pages/PageHelmet";
import { Helmet } from "react-helmet-async";
const LandingHelmet = () => {
  return (
    <>
      <PageHelmet
        title="Jihro Abendano | Frontend Developer"
        description="Portfolio of Jihro Abendano, an experienced frontend developer specializing in React. View my projects and get in touch."
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
