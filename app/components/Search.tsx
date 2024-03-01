import React from 'react';

interface SearchProps {
  onChange(value: string): void;
  value: string;
}

const Search = ({ onChange, value }: SearchProps) => {
  return (
    <div className='relative w-full max-w-sm'>
      <input
        onChange={(e) => onChange(e.currentTarget.value)}
        value={value}
        type='text'
        id='simple-search'
        className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-2.5'
        placeholder='Search location name...'
        required
      />
    </div>
  );
};

export default Search;
