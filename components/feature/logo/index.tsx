import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link
      href='/'
      className='logo-font font-bold text-2xl flex items-center gap-3'
    >
      <Image
        src='/logo.png'
        alt=''
        width={1000000}
        height={100000}
        quality={100}
        className='w-[60px]'
      />
      <span className='uppercase text-3xl text-[#F6EDD9]'>
        Advanced Beauty
      </span>
    </Link>
  )
}

export default Logo;  