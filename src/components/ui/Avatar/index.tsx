import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="select-none rounded-full"
      height="28"
      width="28"
      alt="Avatar"
      src={src || '/assets/images/placeholder.jpg'}
    />
  );
};

export default Avatar;
