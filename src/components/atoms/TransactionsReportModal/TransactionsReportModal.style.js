import styled from 'styled-components';

export const TransactionsReportModalWrapper = styled.div`
  padding: 32px 25px;
  background: rgba(241, 241, 241, 1);
  border-radius: 20px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  text-align: left;
  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    .title {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
    .detail {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
    img {
      width: 34px;
    }
  }
`;
