import React, { useState } from 'react';
import BusinessHeader from '../components/atoms/BusinessHeader';
import AllBusinessSection from '../components/atoms/AllBusinessSection';

const Business = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    searchText: '',
    filterText: 'ACTIVE',
  });

  return (
    <>
      <BusinessHeader setSearchQuery={setSearchQuery} heading="Approved businesses (live)" />
      <AllBusinessSection
        searchQuery={searchQuery}
        currentPage={searchQuery.page}
        pageSize={searchQuery.pageSize}
        onChangeFilters={filters => {
          setSearchQuery(_ => ({
            ..._,
            ...filters,
          }));
        }}
      />
    </>
  );
};

export default Business;
