'use client';

import { useState } from 'react';
import Locations from '../components/LocationsTable';
import Search from '../components/Search';
import Dropdown, { DropdownItem } from '../components/Dropdown';
import { useGetLocationsQuery } from '../gql/types';
import FilterBadge from '../components/FilterBadge';

const locationTypes = [
  'All',
  'Dimension',
  'Planet',
  'unknown',
  'Microverse',
  'Menagerie',
  'Space station'
];

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [lType, setLType] = useState('');
  const [page, setPage] = useState(1);

  const { data, loading } = useGetLocationsQuery({
    variables: {
      name: searchValue,
      page,
      type: lType
    }
  });

  const handleOnFilter = (item: DropdownItem) => {
    // Reset page
    setPage(1);
    if (item.key === 'All') {
      setLType('');
    } else {
      setLType(item.key);
    }
  };

  const handleNext = async () => {
    if (data?.locations?.info?.next) {
      setPage(data?.locations?.info?.next);
    }
  };

  const handlePrev = async () => {
    if (data?.locations?.info?.prev) {
      setPage(data?.locations?.info?.prev);
    }
  };

  return (
    <>
      <div className='mb-6 '>
        <p className='text-slate-700 font-semibold'>Locations</p>
      </div>

      <div className='flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0'>
        <div className='grow'>
          <Search
            onChange={(value) => setSearchValue(value)}
            value={searchValue}
          />
        </div>
        <div className='flex items-center gap-x-4 text-sm'>
          <span className='font-medium text-slate-400'>Filter by:</span>
          {lType !== '' ? (
            <FilterBadge label={lType} onRemove={() => setLType('')}/>
          ) : null}
          <Dropdown
            items={locationTypes.map((locationType) => ({
              label: locationType,
              key: locationType
            }))}
            onChange={handleOnFilter}
            title='Type'
          />
        </div>
      </div>

      <Locations
        loading={loading}
        onNext={handleNext}
        onPrev={handlePrev}
        count={data?.locations?.info?.count}
        page={page}
        pageSize={data?.locations?.results?.length || 0 + 1}
        locations={data?.locations?.results}
      />
    </>
  );
}
