import React, { useCallback, useState } from 'react';
// import Filters from '../../../pages/common/filters';
import TableHeader from '../TableHeader';
import Pagination from '../../molecules/Pagination';
import { StyledTableLayout } from './TableLayout.styles';
import Field from '../../atoms/Field';
import { debounce } from '../../../helpers/common';
import SearchIcon from '../../../assets/searchIcon.svg';
// import { debounce } from '../../helpers/common';

function TableLayout({
  children,
  currentPage = 1,
  pageSize = 10,
  totalCount = 0,
  onChangeFilters,
  customFilterKey = '',
  exportBtn,
  createBtn,
  extraFilters,
  filters = false,
  noNegativeMargin,
  onOptionClick,
  resetFilter = false,
  tableHeading,
  noPagination,
  placeholder,
  btnType,
  btnText,
  btnImg,
  btnWidth,
  btnClass,
  btnClick,
  filterBlock,
  iconImg,
  openModal,
  content,
  setResetFilter = () => {},
  searchText,
  setSearchText,
  innerBorder,
}) {
  const [filterState, setFilterState] = useState('');
  const [searchTexts, setSearchTexts] = useState('');
  // function fetchResults(e) {
  //     onChangeFilters(e);
  // }

  // const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);
  const debouncedSetSearchQuery = useCallback(
    debounce(query => {
      setSearchText(_ => ({ ..._, searchText: query }));
    }, 300),
    [],
  );
  return (
    <>
      {/* {filters && (
        <Filters
          resetFilter={resetFilter}
          setResetFilter={setResetFilter}
          onChangeFilters={_ => {
            onChangeFilters({ ..._, page: 1 });
            setFilterState(_);
          }}
          customFilterKey={customFilterKey}
          extraFilters={extraFilters}
          onOptionClick={onOptionClick}
        />
      )} */}
      <StyledTableLayout
        innerBorder={innerBorder}
        noNegativeMargin={noNegativeMargin}
        noPagination={noPagination}
        filterBlock={filterBlock}>
        {(tableHeading || placeholder || content || btnText) && (
          <div className="head">
            {tableHeading && <strong className="table-heading"> {tableHeading}</strong>}
            <div className="actions">
              {placeholder && (
                <div className="item">
                  <div className="Search">
                    <Field
                      // value={searchTexts}
                      inputSm
                      type="search"
                      rounded
                      sm
                      name="search"
                      placeholder={placeholder}
                      prefix={<img src={SearchIcon} alt="SearchIcon" />}
                      // onChange={({target: {value}}) => {
                      //     setSearchTexts(value);
                      //     if (setSearchText) {
                      //         setSearchText(value);
                      //     }
                      //     // debouncedFetchResults(value);
                      // }}
                      onChange={({ target: { value } }) => {
                        debouncedSetSearchQuery(value);
                      }}
                    />
                  </div>
                </div>
              )}
              {content && <>{content}</>}
              {btnText && btnText}
              {iconImg && (
                <div className="icon-div" onClick={openModal}>
                  <img src={iconImg} alt="iconImg" />
                </div>
              )}
            </div>
          </div>
        )}

        <div className="inner-wrap">
          <TableHeader
            total={totalCount}
            page={currentPage}
            resultPerPage={pageSize}
            setPageSize={_ => onChangeFilters({ pageSize: _, page: 1 })}
            exportBtn={exportBtn}
            createBtn={createBtn}
          />
          {children}
          <div className="pagination">
            {totalCount > 1 ? (
              <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={pageSize}
                // onPageChange={_ => onChangeFilters({ page: _ })}
                onPageChange={_ => onChangeFilters({ filter: filterState.filter, page: _ })}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </StyledTableLayout>
    </>
  );
}

export default TableLayout;
