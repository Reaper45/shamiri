import React from 'react';

export interface PaginationProps {
  onPrev(): void;
  onNext(): void;
  count?: number | null;
  page?: number | null;
  pageSize?: number | null;
}

const Pagination = ({
  onPrev,
  onNext,
  count = 0,
  page = 1,
  pageSize = 20
}: PaginationProps) => {
  return (
    <div className='flex flex-row mt-6'>
      <div className='flex flex-col'>
        <span className='text-sm text-gray-700'>
          Showing{' '}
          <span className='font-semibold text-gray-900'>
            {((page || 1) * (pageSize || 20)) - (pageSize || 20) + 1}
          </span>{' '}
          to{' '}
          <span className='font-semibold text-gray-900'>
            {(page || 1) * (pageSize || 20)}
          </span>{' '}
          of <span className='font-semibold text-gray-900 '>{count}</span>{' '}
          Entries
        </span>

        <div className='inline-flex mt-2 xs:mt-0'>
          <button onClick={onPrev} className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 '>
            Prev
          </button>
          <button onClick={onNext} className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 '>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
