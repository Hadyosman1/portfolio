// Skills Icons
import HtmlIcon from '@/components/icons/logos/htmlIcon';
import CssIcon from '@/components/icons/logos/cssIcon';
import JsIcon from '@/components/icons/logos/jsIcon';
import ReactIcon from '@/components/icons/logos/reactIcon';
import NextJsIcon from '@/components/icons/logos/nextJsIcon';
import TypeScriptIcon from '@/components/icons/logos/typeScriptIcon';
import ReduxIcon from '@/components/icons/logos/reduxIcon';
import TailwindCssIcon from '@/components/icons/logos/tailwindcss';
import GitIcon from '@/components/icons/logos/gitIcon';
import BootstrapIcon from '@/components/icons/logos/bootstrapIcon';
import GithubIcon from '@/components/icons/logos/githubIcon';
import ViteIcon from '@/components/icons/logos/viteIcon';
import ReactRouterIcon from '@/components/icons/logos/reactRouterIcon';
import NodeJsIcon from '@/components/icons/logos/nodeJsIcon';

export const skills = [
  { name: 'CSS', icon: CssIcon, color: '#2965f1' },
  { name: 'HTML', icon: HtmlIcon, color: '#f06529' },
  { name: 'Next.js', icon: NextJsIcon, color: '#9aaaca' },
  { name: 'JavaScript', icon: JsIcon, color: '#f3dc1f' },
  { name: 'React', icon: ReactIcon, color: '#7ccfff' },
  { name: 'Redux', icon: ReduxIcon, color: '#8a63d2' },
  { name: 'Tailwind CSS', icon: TailwindCssIcon, color: '#4fd1c5' },
  { name: 'Bootstrap', icon: BootstrapIcon, color: '#7952b3' },
  { name: 'TypeScript', icon: TypeScriptIcon, color: '#4c9ed7' },
  { name: 'React Router', icon: ReactRouterIcon, color: '#f44250' },
  { name: 'Git', icon: GitIcon, color: '#f05033' },
  { name: 'Github', icon: GithubIcon, color: '#76887899' },
  { name: 'Vite', icon: ViteIcon, color: '#bd34fe' },
  { name: 'Node.js', icon: NodeJsIcon, color: '#3f8b3d' }
];

// Projects
import { StaticImageData } from 'next/image';

// Flow Jobs
import flowJobsCover from '@/../public/images/projects/flow-jobs/flow_jobs_cover.png';
import flowJobsGallery1 from '@/../public/images/projects/flow-jobs/gallery_1.png';
import flowJobsGallery2 from '@/../public/images/projects/flow-jobs/gallery_2.png';
import flowJobsGallery3 from '@/../public/images/projects/flow-jobs/gallery_3.png';

export interface Project {
  id: number;
  title: string;
  subTitle: string;
  coverImage: StaticImageData;
  githubRepoUrl: string;
  liveDemoUrl: string;
  description: string;
  pageImages: StaticImageData[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Flow Jobs',
    subTitle: 'Website for job posting and applying.',
    coverImage: flowJobsCover,
    githubRepoUrl: 'https://github.com/Hadyosman1/flow-jobs',
    liveDemoUrl: 'https://flow-jobs-ten.vercel.app/',
    description: '',
    pageImages: [flowJobsGallery1, flowJobsGallery2, flowJobsGallery3]
  }
];
