import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="container">
      <SectionHeading>Projects</SectionHeading>

      <ul className="grid grid-cols-1 gap-3 py-6 md:grid-cols-2 md:py-16">
        {projects.map((project, idx) => (
          <li key={project.slug}>
            <ProjectCard priority={idx <= 4} project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
