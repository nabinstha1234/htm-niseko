// components/DropdownMenu.tsx
import Link from 'next/link';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

import type { DropdownOption } from '@/types';

interface DropdownMenuProps {
  title: string;
  options: DropdownOption[];
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  optionClassName?: string;
  activeOptionClassName?: string;
  icon?: ReactNode;
  activeOption?: string;
}

const defaultIcon = (
  <svg
    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const DropdownMenu = ({
  title,
  options,
  className = '',
  buttonClassName = '',
  menuClassName = '',
  optionClassName = '',
  activeOptionClassName = '',
  icon,
  activeOption,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <div>
        <button
          type="button"
          className={`group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 ${buttonClassName}`}
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          {icon || defaultIcon}
        </button>
      </div>
      {isOpen && (
        <div
          className={`absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none ${menuClassName}`}
        >
          <div className="py-1" role="none">
            {options.map((option) =>
              option.href ? (
                <Link
                  key={option.value}
                  href={option.href}
                  className={`block px-4 py-2 text-sm ${
                    option.value === activeOption
                      ? `font-medium text-gray-900 ${activeOptionClassName}`
                      : `text-gray-500 ${optionClassName}`
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {option.label}
                </Link>
              ) : (
                <button
                  key={option.value}
                  className={`block w-full px-4 py-2 text-left text-sm ${
                    option.value === activeOption
                      ? `font-medium text-gray-900 ${activeOptionClassName}`
                      : `text-gray-500 ${optionClassName}`
                  }`}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    option.onClick?.();
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </button>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
