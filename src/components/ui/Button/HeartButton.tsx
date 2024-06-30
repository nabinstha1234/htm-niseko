'use client';

import React, { useCallback, useRef, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { cn } from '@/utils/Helpers';

interface HeartButtonProps {
  hasFavorited: boolean;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  hasFavorited: initialValue,
}) => {
  const [hasFavorited, setHasFavorited] = useState(initialValue);
  const hasFavoritedRef = useRef(initialValue);

  const handleUpdate = useCallback(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    handleUpdate();
    setHasFavorited((prev) => !prev);
    hasFavoritedRef.current = !hasFavoritedRef.current;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="heart"
      className="relative z-[5] cursor-pointer transition hover:opacity-80 "
    >
      <AiOutlineHeart
        size={28}
        className="
          absolute
          right-[2px-1]
          top-[2px-1]
          text-gray-50
        "
      />
      <AiFillHeart
        size={24}
        className={cn(hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70')}
      />
    </button>
  );
};

export default HeartButton;
