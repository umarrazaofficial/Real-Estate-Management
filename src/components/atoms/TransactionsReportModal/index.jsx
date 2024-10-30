import React from 'react';
import { TransactionsReportModalWrapper } from './TransactionsReportModal.style';

const TransactionsReportModal = ({ data }) => {
  const cardNetwork = networkType => {
    switch (networkType.toLowerCase()) {
      case 'visa':
        return 'https://img.icons8.com/color/48/000000/visa.png';
      case 'mastercard':
        return 'https://img.icons8.com/color/48/000000/mastercard.png';
      case 'amex':
        return 'https://img.icons8.com/color/48/000000/amex.png';
      case 'discover':
        return 'https://img.icons8.com/color/48/000000/discover.png';
      case 'diners-club':
        return 'https://img.icons8.com/color/48/000000/diners-club.png';
      case 'jcb':
        return 'https://img.icons8.com/color/48/000000/jcb.png';
      case 'unionpay':
        return 'https://img.icons8.com/color/48/000000/unionpay.png';
      case 'cash':
        return 'https://img.icons8.com/color/48/000000/cash.png';
      default:
        return 'https://img.icons8.com/color/48/000000/cash.png';
    }
  };
  return (
    <TransactionsReportModalWrapper>
      <div>
        <span className="title">Operation Date:</span>
        <h2 className="detail">08/02/2024 (12:29:16)</h2>
      </div>
      <div>
        <span className="title">Transaction Type:</span>
        <h2 className="detail">Sales</h2>
      </div>
      <div>
        <span className="title">Total Amount:</span>
        <h2 className="detail">${data?.amount}.00</h2>
      </div>
      <div>
        <span className="title">Tips:</span>
        <h2 className="detail">$00.00</h2>
      </div>
      <div>
        <span className="title">Surcharge:</span>
        <h2 className="detail">$00.00</h2>
      </div>
      <div>
        <span className="title">Terminal S/N:</span>
        <h2 className="detail">{data?.terminalId}</h2>
      </div>
      <div>
        <span className="title">Network Type:</span>
        <img src={cardNetwork('Visa')} alt="card_network" width={35} height={60} />
      </div>
      <div>
        <span className="title">Card Number:</span>
        <h2 className="detail">450644**9286</h2>
      </div>
    </TransactionsReportModalWrapper>
  );
};

export default TransactionsReportModal;
