import React, { useMemo, useState } from 'react';
import { RecentTransactionsWrapper } from './RecentTransactions.style';
import TableLayout from '../../molecules/TableLayout';
import Table from '../../molecules/Table';
import ViewDetails from '../../../assets/viewdetails.png';
import ModalContainer from '../../molecules/ModalContainer';
import deviceService from '../../../services/deviceService';
import TransactionsReportModal from '../TransactionsReportModal';

const products_data = [
  {
    amount: '65',
    terminalId: '0821595091',
  },
  {
    amount: '20',
    terminalId: '0821595092',
  },
  {
    amount: '50',
    terminalId: '0821595093',
  },
  {
    amount: '20',
    terminalId: '0821595094',
  },
  {
    amount: '50',
    terminalId: '0821595095',
  },
];

const RecentTransactions = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 10,
  });

  const { recent_transactions_data, recent_transactions_loading } = deviceService.GetRecentTransactions(searchQuery);

  const amount = _ => <span className={`${_ >= 40 ? 'success' : 'danger'}`}>€{_ && `${_}.00`}</span>;

  const machineDetail = _ => (
    <ModalContainer
      width="700"
      title="Recent Transaction Details"
      btnComponent={({ onClick }) => (
        <button className="deatil-btn" onClick={onClick}>
          View <img src={ViewDetails} alt="viewDetails" />
        </button>
      )}
      content={({ onClose }) => <TransactionsReportModal data={_} onCloseModal={onClose} />}
    />
  );
  const { product_rows, totalCount } = useMemo(() => {
    // const items = recent_transactions_data?.data;
    const items = products_data;
    return {
      product_rows: items?.map(data => [
        amount(data?.amount) || '------------',
        data?.terminalId || '------------',
        machineDetail(data),
      ]),
      totalCount: recent_transactions_data?.meta?.totalTransactions,
    };
  }, [recent_transactions_data]);

  const columnNamess = [`Amount`, `Terminal ID`, `Details`];

  return (
    <RecentTransactionsWrapper>
      <TableLayout
        onChangeFilters={filters => {
          setSearchQuery(_ => ({
            ..._,
            // searchText: filters,
            ...filters,
          }));
        }}
        tableHeading="Recent transactions"
        currentPage={searchQuery.page}
        pageSize={searchQuery.itemsPerPage}
        totalCount={totalCount}
        btnWidth={'40px'}
        btnType="download"

        //   iconImg={CalenderIcon}
        //   openModal={openModal}
      >
        <Table
          rowsData={product_rows}
          columnNames={columnNamess}
          noPadding
          align
          loading={recent_transactions_loading}
        />
      </TableLayout>
    </RecentTransactionsWrapper>
  );
};

export default RecentTransactions;
