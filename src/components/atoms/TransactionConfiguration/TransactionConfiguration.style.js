import styled from 'styled-components';

export const TransactionConfigurationWrapper = styled.div`
  border: 1px solid rgba(241, 241, 241, 1);
  border-radius: 20px;

  .configure-wrap {
    display: flex;
    gap: 16px;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      width: 45px;
      height: 45px;
      border-radius: 60px;
      background: var(--primary);
      img {
        width: 18px;
        height: 18px;
      }

      @media (min-width: 576px) {
        width: 50px;
        height: 50px;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      @media (min-width: 576px) {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px;
      }
    }
    .desc {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: var(--light-gray);
      @media (min-width: 576px) {
        font-size: 14px;
        line-height: 18px;
      }
    }

    @media (max-width: 576px) {
      grid-column: 1 / 3;
    }
  }
  .switch-wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    @media (min-width: 520px) {
      flex-direction: row;
    }
  }

  .btn-wrap {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
`;

export const TabWrap = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 20px;
  border-bottom: 1px solid rgba(241, 241, 241, 1);
  @media (min-width: 768px) {
    padding: 26px 30px;
    flex-direction: row;
  }
  .invoice-btn-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 767px) {
      align-self: flex-end;
    }
    .title {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
    .invoice-btn {
      max-width: 120px;
      border-radius: 5px;
      background: var(--gray-100);
      height: 28px;
      .action-btn-status {
        border: none;
        outline: none;
        color: var(--text-color);
        height: 28px;
        width: 60px;
        background: transparent;
        transition: 0.2s all ease-in-out;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 7px;
      }
      .active {
        background: linear-gradient(180deg, #465045 0%, #6e786d 100%);
        color: var(--white);
      }
    }
  }
`;

export const EmployeeTab = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  row-gap: 20px;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 26px 30px;
    flex-direction: row;
  }
  .switch-wrap {
    @media (max-width: 768px) {
      align-self: flex-end;
    }
  }
`;
export const TipTab = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 20px;
  @media (min-width: 768px) {
    padding: 26px 30px;
    flex-direction: row;
  }
  .config-wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    @media (min-width: 520px) {
      flex-direction: row;
    }
    @media (max-width: 767px) {
      align-self: flex-end;
      align-items: flex-end;
    }
  }
  .configure-wrap {
    align-items: center;
    .title {
      margin-bottom: 0;
    }
  }
`;
export const TipWrap = styled.div`
  padding: 0 20px 20px;
  border-bottom: 1px solid rgba(241, 241, 241, 1);

  @media (min-width: 768px) {
    padding: 0 30px 26px;
  }

  .col-title {
    margin-bottom: 18px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #313131;
  }
  .footer-col-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 16px;
    column-gap: 20px;
    width: 100%;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
    .footer-col {
      border-radius: 20px;
      .reciept-wrapper {
        padding: 20px;
        background: #f1f1f1;
        border-radius: 12px;
        textarea {
          background-color: var(--white);
        }
        .toggle-wrap {
          justify-content: space-between;
          margin-bottom: 20px;
        }
        label {
          font-weight: 400;
        }
      }
    }
    .labelButton {
      height: 260px;
    }
  }
  .fields-wrap {
    padding: 16px;
    background: var(--white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    :first-child,
    :nth-child(2),
    :nth-child(3) {
      display: flex;
      justify-content: space-between;
      label {
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        margin-bottom: 0;
      }
      .optionsField {
        width: 80px;
        height: 36px;
      }
    }
  }
  .tip-amount {
    .optionsField {
      padding-left: 30px;
      padding-right: 10px;
    }
  }
`;
