import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="relative hidden h-[35px] w-[150px] md:block ">
      <Image
        src="/assets/images/niseko-central-logo.png"
        alt="logo"
        fill
        sizes="150px"
        priority
      />
    </Link>
  );
};

export default Logo;
