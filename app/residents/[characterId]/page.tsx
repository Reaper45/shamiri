'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useGetResidentByIdQuery } from '../../gql/types';
import NoteModal from '../../components/NoteModal';

const storeKey = 'shamiri:notes';

const Page = ({
  params: { characterId }
}: {
  params: { characterId: string };
}) => {
  const [notesState, setNoteState] = useState([]);

  const { data, loading } = useGetResidentByIdQuery({
    variables: { id: characterId }
  });

  const onNoteSave = (note: string) => {
    const data = sessionStorage.getItem(storeKey);

    let updatedNotes;

    if (data) {
      updatedNotes = JSON.parse(data);
      updatedNotes?.push(note);
    } else {
      updatedNotes = [note];
    }

    setNoteState(updatedNotes);
    sessionStorage.setItem(storeKey, JSON.stringify(updatedNotes));
  };

  return (
    <div>
      <div className='mb-6'>
        <a href='#' className='text-slate-700 font-semibold'>
          Resident
        </a>
        <span className='mx-2 text-gray-400'>/</span>
        <small className='text-gray-600'>{data?.character?.name}</small>

        <div className='border border-gray-200 rounded-md p-4 bg-white mt-4'>
          <div className='flex flex-row	justify-between'>
            <div className='flex flex-row	gap-x-4 items-center'>
              <div className='w-16 h-16 bg-slate-200 rounded-md flex justify-center items-center'>
                {!loading && (
                  <Image
                    width={80}
                    height={80}
                    className='w-16 h-16 rounded-md'
                    src={data?.character?.image || ''}
                    alt={data?.character?.name || ''}
                  />
                )}
              </div>
              <div>
                {loading ? (
                  <div className='h-2.5 bg-gray-300 rounded-full w-32 mb-2.5'></div>
                ) : (
                  <>
                    <h3 className='text-slate-700 font-semibold	mr-2 inline'>
                      {data?.character?.name}
                    </h3>
                    <span
                      className={`${
                        data?.character?.status === 'Alive'
                          ? 'bg-green-100'
                          : data?.character?.status === 'Dead'
                          ? 'bg-red-100'
                          : 'bg-gray-100'
                      } ${
                        data?.character?.status === 'Alive'
                          ? 'text-green-800'
                          : data?.character?.status === 'Dead'
                          ? 'text-red-800'
                          : 'text-gray-800'
                      } text-xs font-medium ms-6 px-2.5 py-0.5 rounded`}
                    >
                      {data?.character?.status}
                    </span>
                  </>
                )}
                <div className='mt-1 flex gap-x-6 items-center'>
                  {loading ? (
                    <div className='w-32 h-2 bg-gray-200 rounded-full'></div>
                  ) : (
                    <small className='text-slate-400'>
                      Type: &nbsp;{' '}
                      <span className='text-slate-600'>
                        {data?.character?.type}
                      </span>
                    </small>
                  )}

                  {loading ? (
                    <div className='w-32 h-2 bg-gray-200 rounded-full'></div>
                  ) : (
                    <small className='text-slate-400'>
                      Species: &nbsp;{' '}
                      <span className='text-slate-600'>
                        {data?.character?.species}
                      </span>
                    </small>
                  )}

                  {loading ? (
                    <div className='w-32 h-2 bg-gray-200 rounded-full'></div>
                  ) : (
                    <small className='text-slate-400'>
                      Gender: &nbsp;{' '}
                      <span className='text-slate-600'>
                        {data?.character?.gender}
                      </span>
                    </small>
                  )}

                  {loading ? (
                    <div className='w-32 h-2 bg-gray-200 rounded-full'></div>
                  ) : (
                    <small className='text-slate-400'>
                      Created at: &nbsp;{' '}
                      <span className='text-slate-600'>
                        {data?.character?.created &&
                          format(
                            data?.character?.created,
                            'do MMM, yyyy hh:mm a'
                          )}
                      </span>
                    </small>
                  )}
                </div>
              </div>
            </div>
            <div>
              <NoteModal onSave={onNoteSave} />
            </div>
          </div>
        </div>

        <div className='mb-6 flex gap-x-3 items-center mt-8'>
          <p className='text-slate-700 font-semibold'>Notes</p>
        </div>

        <ul>
          {notesState?.map((note) => (
            <li
              className='w-full bg-white border border-gray-200 rounded-lg p-5 mb-4'
              key={note}
            >
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
