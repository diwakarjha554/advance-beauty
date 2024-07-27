import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`${className} flex w-full justify-center`}>
      {children}
    </section>
  )
}

export default Section;