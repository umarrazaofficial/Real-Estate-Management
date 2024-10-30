import React from 'react';
import { SuccessModalWrapper } from './SuccessModal.style';
import Tick from '../../../assets/tick.svg';
import Button from '../../molecules/Button';

const SuccessModal = ({ img, heading, para, btnText, btnClick }) => {
  return (
    <SuccessModalWrapper>
      <div className="tick-mark">
        <img src={img ? img : Tick} alt="tick" priority />
      </div>
      <div className="details">
        {heading && <h2>{heading}</h2>}
        {para && <p>{para}</p>}
      </div>
      {btnText && (
        <Button md onClick={btnClick}>
          {btnText}
        </Button>
      )}
    </SuccessModalWrapper>
  );
};

export default SuccessModal;
