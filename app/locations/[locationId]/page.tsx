'use client';

import React from 'react';
import ResidentsTable from '../../components/ResidentsTable';
import { format } from 'date-fns';
import { useGetLocationByIdQuery } from '../../gql/types';

const Page = ({
  params: { locationId }
}: {
  params: { locationId: string };
}) => {
  const { data, loading } = useGetLocationByIdQuery({
    variables: { id: locationId }
  });


  return (
    <div>
      <div className='mb-6'>
        <a href='/' className='text-slate-700 font-semibold'>
          Locations
        </a>
        <span className='mx-2 text-gray-400'>/</span>

        <small className='text-gray-600'>{data?.location?.name}</small>

        <div className='border border-gray-200 rounded-md p-4 bg-white mt-4'>
          <div className='flex flex-row	justify-between'>
            <div className='flex flex-row	gap-x-4 items-center'>
              <div className='w-16 h-16 bg-slate-200 rounded-md flex justify-center items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-map-pin w-10 h-10 text-slate-600'
                >
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                  <circle cx='12' cy='10' r='3'></circle>
                </svg>
              </div>
              <div>
                {loading ? (
                  <div className='h-2.5 bg-gray-300 rounded-full w-32 mb-2.5'></div>
                ) : (
                  <h3 className='text-slate-700 font-semibold	mr-2 inline'>
                    {data?.location?.name}
                  </h3>
                )}
                <div className='mt-1 flex gap-x-6 items-center'>
                  {loading ? (
                    <div className='w-32 h-2 bg-gray-200 rounded-full'></div>
                  ) : (
                    <small className='text-slate-400'>
                      Type: &nbsp;{' '}
                      <span className='text-slate-600'>
                        {data?.location?.type}
                      </span>
                    </small>
                  )}

                  {loading ? (
                    <div className='w-32 h-2 bg-gray-200 rounded-full'></div>
                  ) : (
                    <small className='text-slate-400'>
                      Dimentions: &nbsp;{' '}
                      <span className='text-slate-600'>
                        {data?.location?.dimension}
                      </span>
                    </small>
                  )}

                  {loading ? (
                    <div className='w-24 h-2 bg-gray-200 rounded-full'></div>
                  ) : (
                    <small className='text-slate-400'>
                      Created at: &nbsp;{' '}
                      <span className='text-slate-600'>
                        {data?.location?.created &&
                          format(
                            new Date(data?.location?.created),
                            'do MMM, yyyy hh:mm a'
                          )}
                      </span>
                    </small>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-6 flex gap-x-3 items-center mt-8'>
          <p className='text-slate-700 font-semibold'>Residents</p>
        </div>

        <ResidentsTable
          loading={loading}
          residents={data?.location?.residents}
        />
      </div>
    </div>
  );
};

export default Page;
