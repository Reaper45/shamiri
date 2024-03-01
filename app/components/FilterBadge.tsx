import React from 'react';

const FilterBadge = ({ label, onRemove }: { label: string, onRemove(): void }) => {
  return (
    <span
      id='badge-dismiss-dark'
      className='inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded'
    >
      {label}
      <button
        onClick={onRemove}
        type='button'
        className='inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900'
      >
        <svg
          className='w-2 h-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 14'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
          />
        </svg>
      </button>
    </span>
  );
};

export default FilterBadge;
