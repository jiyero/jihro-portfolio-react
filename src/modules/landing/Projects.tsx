import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Section from "../../components/Section";
import vMalaysia from "../../assets/vmalaysia.png";
import huluClone from "../../assets/hulu.png";
import valentine from "../../assets/valentine.png";

const Projects = () => {
  const projects = [
    {
      image: vMalaysia,
      title: "V-Malaysia 2023",
      description:
        "This project was done under an orginzation in my college years, we built a responsive single-page application for the V-Malaysia 2023 event using React and Tailwind CSS.",
      href: "https://the-v.net/vmalaysia2023",
      alt: "v-malaysia-2023",
      canView: true,
    },
    {
      image: valentine,
      title: "Valentine's Day App",
      description:
        "This is a project for my friend that wanted me to make a simple react app to ask someone to be their valentine. ",
      href: "https://valentine-azure-rho.vercel.app/",
      alt: "valentine-app",
      canView: true,
    },
    {
      image: huluClone,
      title: "Hulu Clone",
      description:
        "This project is a single-paged react application where I cloned the home page of Hulu to practice react. This was built using React and Boostrap 4",
      href: "/#",
      alt: "hulu-clone",
      canView: true,
    },
  ];

  return (
    <Section title="Projects" className="bg-accent p-16" id="projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 w-full">
        {projects.map((project, key) => {
          return (
            <Card
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl pt-0 flex flex-col h-full"
              key={key}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover"
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
