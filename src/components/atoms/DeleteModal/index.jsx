import React from 'react';
import Alert from '../../../assets/alert.svg';
import Button from '../../molecules/Button';
import { DeleteModalWrapper } from './DeleteModal.style';

const DeleteModal = ({ heading, para, btnText, btnClick }) => {
  return (
    <DeleteModalWrapper>
      <div className="alert-icon">
        <img src={Alert} alt="alert" priority />
      </div>
      <div className="details">
        {heading && <h2>{heading}</h2>}
        {para && <p>{para}</p>}
      </div>
      {btnText && (
        <Button md onClick={btnClick} variant="danger">
          {btnText}
        </Button>
      )}
    </DeleteModalWrapper>
  );
};

export default DeleteModal;
