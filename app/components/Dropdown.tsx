import React, { useEffect, useRef, useState } from 'react';

export type DropdownItem = {
  key: string;
  label: string;
};

interface DropdownProps {
  items: DropdownItem[];
  title: string;
  onChange(item: DropdownItem): void 
}

const Dropdown = ({ items, title, onChange }: DropdownProps) => {
  const [show, setShow] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (!ref?.current?.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [ref]);

  return (
    <div className='relative' ref={ref}>
      <div>
        <button
          onClick={() => setShow(true)}
          id='dropdownActionButton'
          data-dropdown-toggle='dropdownAction'
          className='inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5'
          type='button'
        >
          {title}
          <svg
            className='w-2.5 h-2.5 ms-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 4 4 4-4'
            />
          </svg>
        </button>
      </div>

      <div
        id='dropdownAction'
        style={{ zIndex: 10 }}
        className={`'z-20 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
          !show ? ' hidden' : ''
        }`}
      >
        <ul
          className='py-1 text-sm text-gray-700 '
          aria-labelledby='dropdownActionButton'
        >
          {items?.map((item) => (
            <li
              key={item.key}
              className='block px-4 py-2 hover:bg-gray-100'
              onClick={() => {
                onChange(item);
                setShow(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
