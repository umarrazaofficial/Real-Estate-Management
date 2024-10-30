/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import 'styled-components';
import PropTypes from 'prop-types';

import { StyledTabs, Wrap, StyledTabList, TabBtn, StyledTab, StyledTabPanels, StyledTabPanel } from './DataTabs.styles';

const propTypes = {
  data: PropTypes.array,
};

function DataTabs({ data, verticalTabs, uploadBtn, rounded, title, noBorder, noOverflow, isModal }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <StyledTabs verticalTabs={verticalTabs} rounded={rounded}>
      <Wrap uploadBtn verticalTabs={verticalTabs} rounded={rounded} isModal={isModal}>
        <StyledTabList verticalTabs={verticalTabs} rounded={rounded}>
          {title && <strong className="title">{title}</strong>}
          {data.map((tab, index) => (
            <TabBtn
              verticalTabs={verticalTabs}
              key={tab.label}
              onClick={() => {
                setActiveTab(index);
              }}>
              <StyledTab
                type="button"
                active={activeTab === index}
                verticalTabs={verticalTabs}
                rounded={rounded}
                isModal={isModal}>
                {tab.label}
              </StyledTab>
            </TabBtn>
          ))}
        </StyledTabList>
        {uploadBtn ?? uploadBtn}
      </Wrap>
      <StyledTabPanels verticalTabs={verticalTabs} rounded={rounded} $noBorder={noBorder} $noOverflow={noOverflow}>
        {data?.map((tab, index) => (
          <StyledTabPanel key={tab.label} active={activeTab === index}>
            {activeTab === index && tab?.content}
          </StyledTabPanel>
        ))}
      </StyledTabPanels>
    </StyledTabs>
  );
}

DataTabs.propTypes = propTypes;

export default DataTabs;
