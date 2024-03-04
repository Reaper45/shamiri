import React, { useState } from 'react';

interface NoteModalProps {
  onSave(value: string): void;
}

const NoteModal = ({ onSave }: NoteModalProps) => {
  const [open, setOpen] = useState(false);
  const [noteValue, setNoteValue] = useState('');

  const handleOnSave = () => {
    onSave(noteValue);
    setOpen(false);
    setNoteValue('');
  };

  return (
    <div>
      <button
        className='block text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center'
        onClick={() => setOpen(true)}
      >
        + Note
      </button>

      {open && <div className='bg-gray-900/50 fixed inset-0 z-40'></div>}
      <div
        tabIndex={-1}
        aria-hidden='true'
        className={`${
          open ? '' : 'hidden'
        } overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className='relative p-4 w-full max-w-md max-h-full'>
          <div className='relative bg-white rounded-lg shadow'>
            <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
              <h3 className='text-xl font-semibold text-gray-900'>Add Note</h3>
              <button
                type='button'
                className='end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                data-modal-hide='authentication-modal'
                onClick={() => setOpen(false)}
              >
                <svg
                  className='w-3 h-3'
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
            </div>

            <div className='p-4 md:p-5'>
              <div className='mb-6'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Note
                </label>
                <textarea
                  rows={4}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Write your thoughts here...'
                  value={noteValue}
                  onChange={(e) => setNoteValue(e.currentTarget.value)}
                ></textarea>
              </div>
              <button
                className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                onClick={handleOnSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
