"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { type Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import GithubIcon from "@/assets/icons/githubIcon";

import noiseBg from "@/../public/shapes/noise_bg.svg";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

const ProjectCard = ({
  project: { title, brief, coverImage, slug, githubRepoUrl, liveDemoUrl },
  priority = false,
}: ProjectCardProps) => {
  return (
    <motion.article className="card group rounded-lg border bg-background shadow-md transition-all duration-300">
      <div className="hover-animated-border" />
      <div className="relative overflow-hidden p-4 pb-0 md:max-h-[250px]">
        <Image
          src={noiseBg}
          alt="noise background"
          className="object-cover invert-[250%] dark:invert-0"
          fill
        />
        <Link className="relative block" href={`/projects/${slug}`}>
          <span className="sr-only">View {title} project Cover</span>
          <Image
            priority={priority}
            src={coverImage}
            alt={`${title} cover`}
            width={700}
            height={250}
            className="peer/project-cover aspect-video rounded-t-xl border object-cover object-top transition duration-300 hover:scale-105 group-hover:drop-shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-background/85 via-transparent to-transparent transition duration-300 peer-hover/project-cover:scale-105" />
        </Link>
      </div>

      <div className="p-4">
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-3 line-clamp-3 min-h-[3lh] text-muted-foreground">
          {brief}
        </p>

        <div className="mt-5 flex flex-wrap items-end gap-x-2 gap-y-4">
          <Button size="sm" variant="outline" className="grow" asChild>
            <Link target="_blank" href={liveDemoUrl}>
              Live Demo
              <ExternalLink size={16} />
            </Link>
          </Button>

          <Button size="sm" variant="outline" className="grow" asChild>
            <Link target="_blank" href={githubRepoUrl}>
              Github Repo
              <GithubIcon className="size-4" />
            </Link>
          </Button>

          <Button size="sm" className="grow gap-1 font-semibold" asChild>
            <Link href={`/projects/${slug}`}>
              Details
              <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
