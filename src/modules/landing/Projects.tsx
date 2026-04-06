import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Section from "../../components/Section";
import vMalaysia from "../../assets/vmalaysia.webp";
import huluClone from "../../assets/hulu.webp";
import valentine from "../../assets/valentine.webp";

const Projects = () => {
  const projects = [
    {
      image: vMalaysia,
      title: "V-Malaysia 2023",
      description:
        "This project was done under an organization in my college years, we built a responsive single-page application for the V-Malaysia 2023 event using React and Tailwind CSS.",
      href: "https://the-v.net/vmalaysia2023",
      altText: "VMalaysia 2023 made by DLSU UXSOC in 2023 with Jihro Abendano",
      canView: true,
    },
    {
      image: valentine,
      title: "Valentine's Day App",
      description:
        "This is a project for my friend that wanted me to make a simple react app to ask someone to be their valentine. ",
      href: "https://valentine-azure-rho.vercel.app/",
      altText: "Valentine App by Jihro Abendano",
      canView: true,
    },
    {
      image: huluClone,
      title: "Hulu Clone",
      description:
        "This project is a single-page react application where I cloned the home page of Hulu to practice react. This was built using React and Boostrap 4",
      href: "https://github.com/jiyero/hulu-clone",
      altText: "Hulu Frontpage Clone by Jihro Abendano",
      canView: true,
    },
  ];

  return (
    <Section title="Projects" className="bg-accent p-16" id="projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 w-full">
        {projects.map((project) => {
          return (
            <Card
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl pt-0 flex flex-col h-full"
              key={project.title}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.altText}
                  className="w-full h-full object-cover"
                  width={640}
                  height={360}
                />
              </div>

              <CardHeader className="space-y-3 flex-1">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {project.title}
                </CardTitle>

                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                {project.canView && (
                  <Button
                    asChild
                    className="w-full bg-primary text-background hover:opacity-90"
                  >
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
