import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import ListingSkeleton from '@/components/ListingSkeleton';
import { ListingCard, Pagination } from '@/components/ui';
import EmptyState from '@/components/ui/EmptyState';
import type { Listings } from '@/types';

const ITEMS_PER_PAGE = 8;

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const getData = async () => {
  try {
    const filePath = `http://localhost:3000/db.json`;
    const response = await fetch(filePath, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export default async function Index({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const listings = (await getData()) as Listings;
  const filteredListings = query
    ? listings.filter(
        (listing) =>
          listing.name.toLowerCase().includes(query.toLowerCase()) ||
          listing.description.toLowerCase().includes(query.toLowerCase()),
      )
    : listings;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedListings = filteredListings.slice(startIndex, endIndex);

  if (paginatedListings?.length === 0) {
    return (
      <EmptyState
        title="No Listings found"
        subtitle="Looks like you have no properties."
      />
    );
  }

  const totalPage = Math.ceil((filteredListings.length || 0) / ITEMS_PER_PAGE);
  return (
    <div className="w-full">
      <section className=" main-container grid grid-cols-2  gap-4 pt-16 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        <Suspense
          key={query + currentPage}
          fallback={<ListingSkeleton length={4} />}
        >
          <ListingCard listings={paginatedListings} />
        </Suspense>
      </section>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPage} />
      </div>
    </div>
  );
}
