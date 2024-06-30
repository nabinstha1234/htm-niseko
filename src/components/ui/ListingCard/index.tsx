'use server';

import Link from 'next/link';
import React from 'react';

import Image from '@/components/ui/Image';
import type { Listing, Listings } from '@/types';

interface ListingCardProps {
  listings: Listings;
}

const ListingCard = ({ listings }: ListingCardProps) => {
  return (
    <>
      {listings.map((data: Listing) => (
        <div key={data.id} className="relative">
          <Link
            href={`/listings/${data.id}`}
            className="col-span-1 cursor-pointer"
          >
            <div className="flex w-full flex-col gap-1">
              <div className=" overflow-hidden rounded-md md:rounded-xl">
                <div className="relative aspect-[1/0.95] bg-gray-100">
                  <Image
                    imageSrc={
                      data.images[0]?.src || '/assets/images/no-image.jpg'
                    }
                    fill
                    alt={data.name}
                    effect="zoom"
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
              <span className="mt-[4px] text-[16px] font-semibold">
                {data?.name}
              </span>
              <span className="mt-[4px] text-[12px] font-semibold">
                {data?.description}
              </span>
              {data?.standardPax && (
                <span className="mt-[4px] text-[12px] font-semibold">
                  Pax:{data?.standardPax}
                </span>
              )}
              {data?.floorArea ? (
                <span className="text-sm font-light text-neutral-500">
                  Floor Area:{data?.floorArea}
                </span>
              ) : null}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ListingCard;
