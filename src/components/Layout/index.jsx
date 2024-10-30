import React, { Suspense, useEffect } from 'react';
import { StyledLayout } from './Layout.styles';
import SideBar from '../atoms/SideBar';
import Header from '../atoms/Header';
import Loaders from '../atoms/Loaders';

const Layout = ({ children, showTemplate }) => {
  useEffect(() => {
    if (showTemplate) {
      document.body.style.background = 'var(--primary-50)';
    } else {
      document.body.style.background = 'var(--white)';
    }
  }, [showTemplate]);

  return (
    <StyledLayout $showlayout={showTemplate}>
      {showTemplate ? (
        <>
          <SideBar />
          <div className="children">
            <Header />
            <Suspense fallback={<Loaders viewLoader />}>{children}</Suspense>
          </div>
        </>
      ) : (
        <>
          <div className="children">{children}</div>
        </>
      )}
    </StyledLayout>
  );
};

export default Layout;
