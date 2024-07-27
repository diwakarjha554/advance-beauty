import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${className} max-w-[1550px] w-full mx-auto px-4 sm:px-2 md:px-10 xl:px-20`}>
      {children}
    </div>
  )
}

export default Container;