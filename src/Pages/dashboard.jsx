import React, { useContext } from 'react';
import Map from '../components/atoms/Map';
import { DashboardStyles } from '../components/atoms/RecentTransactions/RecentTransactions.style';
import RecentTransactions from '../components/atoms/RecentTransactions';
import MerchantBanner from '../components/atoms/MerchantBanner';

const Dashboard = () => {
  return (
    <>
      <DashboardStyles>
        <Map />
      </DashboardStyles>
      {/* <MerchantBanner />
          <RecentTransactions /> */}
    </>
  );
};

export default Dashboard;
