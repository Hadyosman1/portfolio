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
  project: { title, subTitle, coverImage, slug, githubRepoUrl, liveDemoUrl },
  priority = false,
}: ProjectCardProps) => {
  return (
    <article className="group rounded-lg border shadow-md transition duration-300 hover:border-foreground">
      <div className="relative overflow-hidden p-6 pb-0">
        <Link href={`/projects/${slug}`}>
          <Image
            src={noiseBg}
            alt="noise background"
            className="object-cover invert-[250%] dark:invert-0"
            fill
          />

          <Image
            priority={priority}
            src={coverImage}
            alt={`${title} cover`}
            width={700}
            height={350}
            className="scale-[1.01] rounded-t-lg transition duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent transition duration-300 group-hover:opacity-40" />
        </Link>
      </div>

      <div className="p-4">
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-3 line-clamp-3 h-[76px] text-muted-foreground">
          {subTitle}
        </p>

        <div className="mt-5 flex flex-wrap items-end gap-x-2 gap-y-4">
          <div className="grow space-x-2">
            <Button size="sm" variant="outline" asChild>
              <Link target="_blank" href={liveDemoUrl}>
                Live Demo
                <ExternalLink size={16} />
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link target="_blank" href={githubRepoUrl}>
                Github Repo
                <GithubIcon />
              </Link>
            </Button>
          </div>

          <Button className="font-semibold" asChild>
            <Link href={`/projects/${slug}`}>
              Details
              <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
