import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div className='border-r border-grey-400 h-full w-60 bg-white'>
      <b className='text-xl text-slate-700 border-b border-grey-400 block p-4'>
        Rick & Moty
      </b>

      <ul
        className='py-4 px-2 text-sm text-gray-700 dark:text-gray-200'
      >
        <li>
          <Link
            href='/'
            className='block px-4 py-2 rounded-md bg-gray-100 text-gray-700 font-medium'
          >
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
