import Skeleton from 'react-loading-skeleton';

interface ListingSkeletonProps {
  length?: number;
}
const ListingSkeleton = ({ length = 1 }: ListingSkeletonProps) => {
  return (
    <>
      {Array.from({ length }).map(() => {
        return (
          <div
            className="col-span-1 "
            key={`skeleton-${Math.random().toString(36).substring(2, 5)}`}
          >
            <div className="flex w-full flex-col gap-1">
              <Skeleton
                width="100%"
                height="100%"
                borderRadius="12px"
                className="aspect-square"
              />

              <div className="flex flex-row gap-3">
                <Skeleton height="18px" width="84px" />
                <Skeleton height="18px" width="84px" />
              </div>
              <Skeleton height="16px" width="102px" />
              <Skeleton height="18px" width="132px" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListingSkeleton;
