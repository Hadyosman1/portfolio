import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeading title="Projects" />
      <div className="relative">
        <div className="bg-dots" />
        <div className="max-w-[1200px] px-[1rem] mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-20 lg:grid-cols-3">
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
