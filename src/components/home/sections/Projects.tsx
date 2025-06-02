"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { projects as allProjects } from "@/data/projects";
import { motion } from "framer-motion";
import { useState } from "react";

const PAGE_SIZE = 6;

const Projects = () => {
  const [projects, setProjects] = useState(allProjects.slice(0, PAGE_SIZE));

  return (
    <section id="projects">
      <SectionHeading title="Projects" />
      <div className="relative">
        <div className="bg-dots pointer-events-none" />
        <div className="mx-auto max-w-[1280px] px-4">
          <ul className="grid grid-cols-1 gap-5 pt-12 pb-16 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                key={project.slug}
              >
                <ProjectCard priority={idx <= 4} project={project} />
              </motion.li>
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
