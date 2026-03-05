import {
  Card,
  CardHeader,
  CardAction,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Section from "../../components/Section";

const Projects = () => {
  const projects = [
    {
      image: "https://avatar.vercel.sh/shadcn1",
      title: "V-Malaysia 2023",
      description:
        "A practical talk on component APIs, accessibility, and shipping",
      link: "/#",
      alt: "asd",
      canView: true,
    },
    {
      image: "https://avatar.vercel.sh/shadcn1",
      title: "Valentine's Day App",
      description: "Bla bla blablabla bla bla bl bla blabla bla ",
      link: "/#",
      alt: "asd",
      canView: true,
    },
    {
      image: "https://avatar.vercel.sh/shadcn1",
      title: "Undergraduate Thesis: KaBu",
      description: "Robots",
      link: "/#",
      alt: "asd",
      canView: false,
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
                  <Button className="w-full bg-primary text-background hover:opacity-90">
                    View Project
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
