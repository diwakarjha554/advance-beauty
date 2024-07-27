'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  href: string;
  exact?: boolean;
  text: string;
  className?: string;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  exact,
  text,
  className
}) => {

  const pathname = usePathname() ?? '';

  let isActive = exact ? pathname === href : pathname.startsWith(href);

  if (!exact) {
    isActive = false;
  }

  return (
    <Link
      href={href}
      className={`
              ${className}
              ${isActive ? 'text-[#E1BB78]' : 'text-custom-txl'}
              dark:text-custom-txd
              hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text hover:w-fit
              hover:cursor-pointer 
              dark:hover:bg-gradient-to-r dark:hover:from-indigo-500 dark:hover:via-purple-500 dark:hover:to-pink-500 dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:w-fit
              font-semibold
          `}
    >
      {text}
    </Link>
  )
}

export default ActiveLink;