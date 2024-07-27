import React from 'react';
import { IconType } from 'react-icons';

interface GradientIconProps {
  icon: IconType;
  size?: number;
  className?: string;
};

const GradientIcon: React.FC<GradientIconProps> = ({ icon: Icon, size, className }) => {
  return (
    <svg width="100" height="100" className={`${className}`}>
      <defs>
        <linearGradient id="tailwindGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" /> {/* indigo-500 */}
          <stop offset="50%" stopColor="#a855f7" /> {/* purple-500 */}
          <stop offset="100%" stopColor="#ec4899" /> {/* pink-500 */}
        </linearGradient>
      </defs>
      <Icon style={{ fill: 'url(#tailwindGradient)' }} size={size}/>
    </svg>
  )
}

export default GradientIcon;