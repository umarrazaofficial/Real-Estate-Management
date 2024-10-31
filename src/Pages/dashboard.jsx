import React from 'react';
import Map from '../components/atoms/Map';
import { DashboardStyles } from '../components/atoms/RecentTransactions/RecentTransactions.style';

const Dashboard = () => {
  return (
    <>
      <DashboardStyles>
        <Map />
      </DashboardStyles>
    </>
  );
};

export default Dashboard;
