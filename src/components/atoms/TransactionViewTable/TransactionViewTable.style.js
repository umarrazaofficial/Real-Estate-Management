import styled from 'styled-components';

export const TransactionViewTableWrapper = styled.div`
  > div:first-of-type {
    box-shadow: none;
  }
  .sub-heading {
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    padding-left: 20px;
  }
  .amount-wrap {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .user-wrap {
    display: block;
    .title {
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      color: #313131;
    }
    .serialNumber {
      color: #9d9d9d;
      font-size: 14px;
      font-weight: 400;
      line-height: 14px;
    }
  }
`;
