import { Project } from '@/data/data';
import Image from 'next/image';
import noiseBg from '@/../public/images/shapes/noise_bg.svg';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

interface ProjectCardProps {
  project: Project;
  lng: string;
}

const ProjectCard = ({
  project: { title, subTitle, coverImage, id, githubRepoUrl, liveDemoUrl },
  lng
}: ProjectCardProps) => {
  return (
    <article className='group rounded-lg border shadow-md transition duration-300 hover:border-foreground'>
      <div className='relative overflow-hidden p-6 pb-0'>
        <Link href={`/${lng}/projects/${id}`}>
          <Image
            src={noiseBg}
            alt='noise background'
            className='object-cover invert-[250%] dark:invert-0'
            fill
          />

          <Image
            quality={100}
            src={coverImage}
            alt={`${title} cover`}
            width={700}
            height={350}
            className='rounded-t-lg transition duration-300 group-hover:scale-105 group-hover:drop-shadow-lg'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent transition duration-300 group-hover:opacity-40' />
        </Link>
      </div>

      <div className='p-4'>
        <h2 className='font-semibold'>{title}</h2>
        <p className='mt-3 line-clamp-3 h-[76px] text-muted-foreground'>
          {subTitle}
        </p>

        <div className='mt-5 flex flex-wrap items-end gap-x-2 gap-y-4'>
          <div className='grow space-x-2'>
            <Button size='sm' variant='outline' asChild>
              <Link target='_blank' href={githubRepoUrl}>
                Github Repo
                <GitHubLogoIcon />
              </Link>
            </Button>
            <Button size='sm' variant='outline' asChild>
              <Link target='_blank' href={liveDemoUrl}>
                Live Demo
                <ExternalLink size={16} />
              </Link>
            </Button>
          </div>

          <Button asChild>
            <Link href={`/${lng}/projects/${id}`}>
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
