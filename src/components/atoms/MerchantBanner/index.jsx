import React from 'react';
import { MerchantBannerWrapper } from './MerchantBanner.style';
import Banner from '../../../assets/banner.png';
import WalletIcon from '../../../assets/walletIcon.svg';
import SalesIcon from '../../../assets/salesIcon.svg';
import RefundIcon from '../../../assets/refundIcon.svg';
import ArrowDown from '../../../assets/arrowDown.svg';
import ArrowUp from '../../../assets/arrowUp.svg';

const MerchantBanner = () => {
  return (
    <MerchantBannerWrapper $Banner={Banner}>
      <h2 className="title">Sales distribution</h2>
      <span className="desc">Here's a breakdown of your sales.</span>
      <div className="transactions">
        <div className="col col-1">
          <div className="section">
            <div>
              <span className="title">Total - transactions</span>
              <h2 className="amount">€ 12.700,00</h2>
            </div>
            <img src={WalletIcon} alt="WalletIcon" width={26} height={26} />
          </div>
          <div className="section">
            <div>
              <span className="title">Total - sales</span>
              <h2 className="amount">€ 12.700,00</h2>
            </div>
            <img src={SalesIcon} alt="SalesIcon" width={26} height={26} />
          </div>
          <div className="section">
            <div>
              <span className="title">Total - refunds</span>
              <h2 className="amount">€ 12.700,00</h2>
            </div>
            <img src={RefundIcon} alt="RefundIcon" width={26} height={26} />
          </div>
        </div>
        <div className="col col-2">
          <div className="section">
            <div>
              <span className="title">Today sales</span>
              <h2 className="amount">€ 12.700,00</h2>
            </div>
            <div className="sales-percent">
              <span className="danger">-6.3%</span>
              <img src={ArrowDown} alt="ArrowDown" />
            </div>
          </div>
          <div className="sales-tab">
            <div className="section">
              <div>
                <span className="title">Week sales</span>
                <h2 className="amount">€ 12.700,00</h2>
              </div>
              <div className="sales-percent">
                <span className="danger">-6.3%</span>
                <img src={ArrowDown} alt="ArrowDown" />
              </div>
            </div>
            <div className="section">
              <div>
                <span className="title">Month sales</span>
                <h2 className="amount">€ 12.700,00</h2>
              </div>
              <div className="sales-percent">
                <span className="success">+615%</span>
                <img src={ArrowUp} alt="ArrowUp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MerchantBannerWrapper>
  );
};

export default MerchantBanner;
