import styled from 'styled-components';

export const MerchantBannerWrapper = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-image: url(${({ $Banner }) => $Banner && $Banner});
  background-position: center;
  margin-bottom: 20px;
  .title {
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    color: var(--primary);
  }
  .desc {
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
  }
  .transactions {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr;
    }
    .col {
      background: var(--white);
      border-radius: 12px;
      padding: 20px;
    }
    .section {
      display: flex;
      justify-content: space-between;
    }
    .title {
      font-size: 14px;
      font-weight: 300;
      line-height: 18px;
      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    .amount {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      margin-top: 12px;
      @media (min-width: 576px) {
        font-size: 22px;
        line-height: 26px;
      }
      @media (min-width: 768px) {
        font-size: 26px;
        line-height: 30px;
      }
    }
    .col-1 {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 34px;
      @media (min-width: 576px) {
        grid-template-columns: 1fr 1fr;
      }
    }
    .col-2 {
      .section {
        align-items: center;
        .sales-percent {
          display: flex;
          gap: 5px;
          img {
            width: 20px;
            height: 20px;
          }
        }
        .danger {
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          color: var(--danger);
        }
        .success {
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          color: #419400;
        }
      }
      .sales-tab {
        padding: 12px;
        border-radius: 12px;
        background-color: var(--gray-100);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        row-gap: 10px;
        @media (min-width: 576px) {
          flex-direction: row;
          .section {
            max-width: 180px;
            width: 100%;
          }
        }

        .title {
          font-size: 14px;
          font-weight: 300;
          line-height: 18px;
        }
        .amount {
          font-size: 16px;
          font-weight: 700;
          line-height: 20px;
          margin-bottom: 0px;
          margin-top: 12px;
        }
      }
    }
  }
`;
