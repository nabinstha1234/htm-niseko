'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const t = useTranslations('Search');

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value;
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300,
  );

  return (
    <div className="relative w-full max-w-md">
      <input
        type="search"
        id="location-search"
        className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-rose-500"
        placeholder={t('search_placeholder')}
        onChange={handleSearch}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <div className="pointer-events-none absolute inset-y-0  right-0 flex items-center pr-3 ring-rose-500">
        <FaSearch className="text-lg ring-rose-500" />
      </div>
    </div>
  );
};

export default Search;
