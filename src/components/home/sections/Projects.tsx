import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeading title="Projects" />
      <div className="relative">
        <div className="bg-dots" />
        <div className="container">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-8 py-20 md:grid-cols-2">
            {projects.map((project, idx) => (
              <li key={project.slug}>
                <ProjectCard priority={idx <= 4} project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
