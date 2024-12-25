import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className='section_heading mx-auto'>
      {'<'}
      <span className='component_name'>{children}</span>
      {' />'}
    </h2>
  );
};

export default SectionHeading;
