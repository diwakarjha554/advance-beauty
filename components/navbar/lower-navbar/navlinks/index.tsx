import ActiveLink from '@/components/feature/active-link';
import React from 'react';

const Navlinks = () => {
  return (
    <div>
        <ActiveLink 
            href='/'
            text='Home'
            exact
        />
    </div>
  )
}

export default Navlinks;