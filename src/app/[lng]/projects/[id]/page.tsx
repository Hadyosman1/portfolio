import ProjectCarousel from '@/components/project-carousel';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/data';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map(({ id }) => id);
}

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({
  params: { id }
}: ProjectPageProps): Metadata {
  const project = projects.find(project => project.id === parseInt(id));
  if (!project) notFound();

  return {
    title: `${project.title} | Project`,
    description: project.subTitle
  };
}

const ProjectPage = ({ params: { id } }: ProjectPageProps) => {
  const project = projects.find(project => project.id === parseInt(id));
  if (!project) notFound();

  const {
    title,
    subTitle,
    coverImage,
    liveDemoUrl,
    githubRepoUrl,
    pageImages,
    description
  } = project;

  return (
    <section lang='en' dir='ltr' className='container-md'>
      <div className='relative h-[300px]'>
        <Image
          priority
          src={coverImage}
          alt={`${title} cover`}
          fill
          className='rounded-b-xl object-cover object-top drop-shadow-md'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-background/85 to-transparent' />
      </div>

      <div className='flex flex-wrap items-start gap-x-2 gap-y-10 py-8'>
        <div className=''>
          <h1 className='text-4xl font-bold'>{title}</h1>
          <p className='mt-4 max-w-[500px] text-xl text-muted-foreground'>
            {subTitle}
          </p>
        </div>
        <div className='ms-auto space-x-2'>
          <Button asChild>
            <Link target='_blank' href={githubRepoUrl}>
              Github Repo
              <GitHubLogoIcon />
            </Link>
          </Button>
          <Button asChild>
            <Link target='_blank' href={liveDemoUrl}>
              Live Demo
              <ExternalLink size={16} />
            </Link>
          </Button>
        </div>
      </div>

      {pageImages.length > 0 && (
        <div className='mt-8'>
          <h2 className='mb-8 text-3xl font-semibold'>Pages</h2>
          <ProjectCarousel images={pageImages} />
        </div>
      )}

      <div className='mt-10'>{description}</div>
    </section>
  );
};

export default ProjectPage;
