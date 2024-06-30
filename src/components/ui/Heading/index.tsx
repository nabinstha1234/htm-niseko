import React from 'react';

import { BackButton } from '@/components/ui';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  backBtn?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  backBtn = false,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className={center ? 'text-center' : 'text-start'}>
        <h3 className="text-2xl font-bold leading-tight">{title}</h3>
        <p className="mt-2 font-light text-neutral-500 md:mt-1">{subtitle}</p>
      </div>
      {backBtn ? <BackButton /> : null}
    </div>
  );
};

export default Heading;
