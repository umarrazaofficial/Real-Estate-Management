import React from 'react';
import logo from '../../../assets/Logo.png';
import Img01 from '../../../assets/banner.png';

import { OnboardingBlock, FormCol, BannerCol } from './OnboardingTemplate.styles';

function OnboardingTemplate({ children }) {
  return (
    <OnboardingBlock>
      <FormCol>
        <div className="brand_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="middle-content">{children}</div>
      </FormCol>
      <BannerCol>
        <img src={Img01} alt="banner" draggable="false" />
      </BannerCol>
    </OnboardingBlock>
  );
}

export default OnboardingTemplate;
