'use client';

import { useTranslation } from '@/app/i18n/client';
import ProjectCard from '@/components/project-card';
import SectionHeading from '@/components/ui/section-heading';
import { projects } from '@/data/data';

const Projects = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'translation');

  return (
    <section id='projects-section' className='home_section container-md'>
      <SectionHeading>{t('projects')}</SectionHeading>
      <div
        lang='en'
        dir='ltr'
        className='grid grid-cols-1 gap-3 py-10 md:grid-cols-2 md:py-16'
      >
        {projects.map(project => (
          <ProjectCard lng={lng} key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
