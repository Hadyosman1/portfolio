import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="container">
      <SectionHeading title="Projects" />

      <ul className="grid grid-cols-1 gap-3 pb-14 pt-6 md:grid-cols-2 md:pt-8">
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
