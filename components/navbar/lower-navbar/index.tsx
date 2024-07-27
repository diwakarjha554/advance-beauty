import Container from '@/components/feature/container';
import Logo from '@/components/feature/logo';
import Section from '@/components/feature/section';
import React from 'react'
import Navlinks from './navlinks';

const LowerNavbar = () => {
  return (
    <Section className='bg-[#222222] py-2'>
        <Container className='flex justify-between items-center'>
            <Logo />
            <div>
              <Navlinks />
            </div>
        </Container>
    </Section>
  )
}

export default LowerNavbar;