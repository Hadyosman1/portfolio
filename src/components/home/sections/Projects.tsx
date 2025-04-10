"use client";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { projects as allProjects } from "@/data/projects";
import { useState } from "react";

const PAGE_SIZE = 6;

const Projects = () => {
  const [projects, setProjects] = useState(allProjects.slice(0, PAGE_SIZE));

  return (
    <section id="projects">
      <SectionHeading title="Projects" />
      <div className="relative">
        <div className="bg-dots pointer-events-none" />
        <div className="mx-auto max-w-[1200px] px-[1rem]">
          <ul className="grid grid-cols-1 gap-5 pb-12 pt-20 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <li key={project.slug}>
                <ProjectCard priority={idx <= 4} project={project} />
              </li>
            ))}
          </ul>
          {allProjects.length > projects.length && (
            <div className="pb-20">
              <Button
                onClick={() =>
                  setProjects((prev) => [
                    ...prev,
                    ...allProjects.slice(
                      projects.length,
                      projects.length + PAGE_SIZE,
                    ),
                  ])
                }
                className="mx-auto flex"
              >
                Show more
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
