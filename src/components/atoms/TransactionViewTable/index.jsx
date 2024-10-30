import React, { useContext, useMemo, useState } from 'react';
import TableLayout from '../../molecules/TableLayout';
import Table from '../../molecules/Table';
import { TransactionViewTableWrapper } from './TransactionViewTable.style';
// import deviceService from '../../../services/deviceService';
// import { AuthContext } from '../../../Context/authContext';
// import { useContextHook } from 'use-context-hook';
import ReportsHeader from '../ReportsHeader';
import ReportFilters from '../ReportFilters';
import AmountIcon from '../../../assets/amountArrowIcon.svg';
import StoreIcon from '../../../assets/storeIcon.svg';

const products_data = [
  {
    date: '2024 - 07 - 28',
    merchant: 'Fostor store',
    totalAmount: '200.00',
    terminal: '0821595091',
    card: '450644**9286',
    name: 'James walson',
    status: 'completed',
    timeAgo: '1 hour ago',
  },
  {
    date: '2024 - 07 - 28',
    merchant: 'Fostor store',
    totalAmount: '200.00',
    terminal: '0821595091',
    card: '450644**9286',
    name: 'James walson',
    status: 'pending',
    timeAgo: '3 hours ago',
  },
  {
    date: '2024 - 07 - 28',
    merchant: 'Fostor store',
    totalAmount: '200.00',
    terminal: '0821595091',
    card: '450644**9286',
    name: 'James walson',
    status: 'cancelled',
    timeAgo: '6 hours ago',
  },
  {
    date: '2024 - 07 - 28',
    merchant: 'Fostor store',
    totalAmount: '200.00',
    terminal: '0821595091',
    card: '450644**9286',
    name: 'James walson',
    status: 'completed',
    timeAgo: '7 hours ago',
  },
  {
    date: '2024 - 07 - 28',
    merchant: 'Fostor store',
    totalAmount: '200.00',
    terminal: '0821595091',
    card: '450644**9286',
    name: 'James walson',
    status: 'completed',
    timeAgo: '2 days ago',
  },
  {
    date: '2024 - 07 - 28',
    merchant: 'Fostor store',
    totalAmount: '200.00',
    terminal: '0821595091',
    card: '450644**9286',
    name: 'James walson',
    status: 'pending',
    timeAgo: '2 days ago',
  },
  {
    date: '2024 - 07 - 28',
    merchant: 'Fostor store',
    totalAmount: '200.00',
    terminal: '0821595091',
    card: '450644**9286',
    name: 'James walson',
    status: 'completed',
    timeAgo: '2 days ago',
  },
  {
    date: '2024 - 07 - 28',
    merchant: 'Fostor store',
    totalAmount: '200.00',
    terminal: '0821595091',
    card: '450644**9286',
    name: 'James walson',
    status: 'cancelled',
    timeAgo: '3 days ago',
  },
  {
    date: '2024 - 07 - 28',
    merchant: 'Fostor store',
    totalAmount: '200.00',
    terminal: '0821595091',
    card: '450644**9286',
    name: 'James walson',
    status: 'completed',
    timeAgo: '4 days ago',
  },
];

const TransactionViewTable = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 10,
    merchant_id: '',
    terminal_id: '',
    transaction_type: '',
    card_type: '',
    start_date: '',
    end_date: '',
    search: '',
    start_time: '',
    end_time: '',
  });
  // const { fetch } = useContextHook(AuthContext, v => ({
  //   fetch: v.fetch,
  // }));
  // const { transactions_data, transactions_loading } = deviceService.GetTransactions(searchQuery, fetch);
  // const cardNetwork = networkType => {
  //   switch (networkType.toLowerCase()) {
  //     case 'visa':
  //       return 'https://img.icons8.com/color/48/000000/visa.png';
  //     case 'mastercard':
  //       return 'https://img.icons8.com/color/48/000000/mastercard.png';
  //     case 'amex':
  //       return 'https://img.icons8.com/color/48/000000/amex.png';
  //     case 'discover':
  //       return 'https://img.icons8.com/color/48/000000/discover.png';
  //     case 'diners-club':
  //       return 'https://img.icons8.com/color/48/000000/diners-club.png';
  //     case 'jcb':
  //       return 'https://img.icons8.com/color/48/000000/jcb.png';
  //     case 'unionpay':
  //       return 'https://img.icons8.com/color/48/000000/unionpay.png';
  //     case 'cash':
  //       return 'https://img.icons8.com/color/48/000000/cash.png';
  //     default:
  //       return 'https://img.icons8.com/color/48/000000/cash.png';
  //   }
  // };
  const totalAmount = _ => (
    <div className="amount-wrap">
      <img src={AmountIcon} alt="AmountIcon" />€ {_}
    </div>
  );
  const merchant = _ => (
    <div className="amount-wrap">
      <img src={StoreIcon} alt="StoreIcon" />
      {_}
    </div>
  );
  const user = _ => (
    <div className="user-wrap">
      <h2 className="title">{_?.name}</h2>
      <span className="serialNumber">{_?.terminal}</span>
    </div>
  );
  const date = _ => (
    <div className="user-wrap">
      <h2 className="title">{_?.timeAgo}</h2>
      <span className="serialNumber">{_?.date}</span>
    </div>
  );
  const status = _ => {
    switch (_) {
      case 'completed':
        return (
          <div className="status success success-bg-50">
            Completed <span className="dot success-bg" />
          </div>
        );
      case 'cancelled':
        return (
          <div className="status danger danger-bg-50">
            Cancelled <span className="dot danger-bg" />
          </div>
        );
      case 'pending':
        return (
          <div className="status brown brown-bg-50">
            Pending <span className="dot brown-bg" />
          </div>
        );
      default:
        return null;
    }
  };

  const { product_rows, totalCount } = useMemo(() => {
    // const items = transactions_data?.data;
    const items = products_data;
    return {
      product_rows: items?.map(data => [
        // data?.date + ' (' + data?.time + ') ' || '------------',
        totalAmount(data?.totalAmount) || '------------',
        merchant(data?.merchant) || '------------',
        user(data) || '------------',
        // data?.tips || '------------',
        // data?.surcharge || '------------',
        status(data?.status) || '------------',
        // <img src={cardNetwork(data?.network)} alt="card_network" width={35} height={60} /> || '------------',
        date(data) || '------------',
      ]),
      // totalCount: transactions_data?.totalItems,
      totalCount: products_data?.length,
    };
  }, [products_data]);

  const columnNamess = [
    `Amount`,
    `Merchant`,
    `User`,
    // `Tips`,
    // `Surcharge`,
    `Transaction status`,
    // `Network Type`,
    `Date`,
  ];

  return (
    <>
      <ReportsHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* {admin &&  */}
      <ReportFilters setSearchQuery={setSearchQuery} />
      {/* } */}
      <TransactionViewTableWrapper>
        <TableLayout
          onChangeFilters={filters => {
            setSearchQuery(_ => ({
              ..._,
              // searchText: filters,
              ...filters,
            }));
          }}
          // tableHeading={
          //   <>
          //     Transactions:
          //     <span className="sub-heading">Transactions Total: 21,415.60 CAD </span>
          //   </>
          // }
          currentPage={searchQuery?.page}
          pageSize={searchQuery?.itemsPerPage}
          totalCount={totalCount}>
          <Table rowsData={product_rows} columnNames={columnNamess} noPadding />
        </TableLayout>
      </TransactionViewTableWrapper>
    </>
  );
};

export default TransactionViewTable;
