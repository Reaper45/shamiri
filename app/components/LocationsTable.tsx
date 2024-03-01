import React from 'react';
import { format } from 'date-fns';
import { Location, Maybe } from '../gql/types';
import Pagination, { PaginationProps } from './Pagination';
import { useRouter } from 'next/navigation';

export interface LocationsTableProps extends PaginationProps {
  locations?: Maybe<Array<Maybe<Omit<Location, 'residents'>>>>;
  loading: boolean;
}

const LocationsTable = ({
  locations,
  onNext,
  onPrev,
  page,
  pageSize,
  count,
  loading
}: LocationsTableProps) => {
  const router = useRouter();

  return (
    <div className='mt-4'>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
          <thead className='text-xs text-gray-700 uppercase'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Location name
              </th>
              <th scope='col' className='px-6 py-3'>
                Type
              </th>
              <th scope='col' className='px-6 py-3'>
                Created at
              </th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from(Array(10).keys()).map((item) => (
                  <tr className='bg-white border-b hover:bg-gray-50' key={item}>
                    <td
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-500 whitespace-nowrap'
                    >
                      <div className='h-2.5 bg-gray-300 rounded-full w-32 mb-2.5'></div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='w-24 h-2 bg-gray-200 rounded-full'></div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='h-2 bg-gray-200 rounded-full w-16'></div>
                    </td>
                    <td className='px-6 py-4 text-right'>
                      <div className='h-2 bg-gray-200 rounded-full w-12'></div>
                    </td>
                  </tr>
                ))
              : locations?.map((location) => (
                  <tr
                    className='bg-white border-b hover:bg-gray-50'
                    key={location?.id}
                    onClick={() => router.push(`/locations/${location?.id}`)}
                  >
                    <td
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-500 whitespace-nowrap'
                    >
                      {location?.name}
                    </td>
                    <td className='px-6 py-4'>{location?.type}</td>
                    <td className='px-6 py-4'>
                      {location?.created
                        ? format(location?.created, 'do MMM, yyyy')
                        : null}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onNext={onNext}
        onPrev={onPrev}
        page={page}
        pageSize={pageSize}
        count={count}
      />
    </div>
  );
};

export default LocationsTable;
