import styled, { css } from 'styled-components';
import { PaginationList } from '../../molecules/Pagination/Pagination.styles';

export const StyledTableLayout = styled.div`
  width: 100%;
  padding: 20px 10px;
  border-radius: 20px;
  border: none;
  box-shadow: none;
  margin: ${({ noNegativeMargin }) => (noNegativeMargin ? '' : '0 0 0')};
  background: var(--white);
  overflow: hidden;
  font-family: var(--base-font-serif);
  border: 1px solid #d9d9d9;

  @media (min-width: 1400px) {
    padding: 20px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05), -10px 10px 20px rgba(0, 0, 0, 0.05);
  }
  ${({ innerBorder }) =>
    innerBorder &&
    css`
      padding: 0 !important;
      box-shadow: none !important;
      border: none;
      .inner-wrap {
        padding: 20px;
        border: 1px solid rgba(241, 241, 241, 1);
        border-radius: 20px;
      }
    `}
  .action-btn-dropdown {
    display: inline-flex;
    position: relative;
  }
  .location {
    display: flex;
    align-items: center;
    gap: 7px;
    p {
      white-space: nowrap;
      max-width: 123px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0;
    }
    .editAddress {
      background: rgba(88, 76, 153, 0.1);
      width: 16px;
      height: 16px;
      border-radius: 50%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .status {
    width: 95px;
    height: 28px;
    padding: 5px 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  .otp-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 8px;
    margin: 0;
  }
  .success {
    color: var(--success);
  }
  .danger {
    color: var(--danger);
  }
  .primary {
    color: var(--primary);
  }
  .secondary {
    color: #9d9d9d;
  }
  .brown {
    color: #7f6145;
  }
  .primary-0 {
    background: rgba(88, 76, 153, 0.1);
  }
  .success-0 {
    background: rgba(65, 148, 0, 0.1);
  }
  .danger-0 {
    background: rgba(215, 65, 32, 0.1);
  }
  .secondary-0 {
    background: rgba(205, 205, 205, 0.1);
    img {
      filter: invert(91%) sepia(0%) saturate(0%) hue-rotate(317deg) brightness(92%) contrast(90%);
    }
  }
  .flex {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .flex-row {
    display: flex;
    align-items: center;
    gap: 10px;
    button {
      line-height: 1;
    }
  }
  .deatil-btn {
    display: inline-flex;
    gap: 10px;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    padding: 6px 12px;
    color: var(--text-color);
  }
  .report-btn {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: var(--primary);
    text-decoration: underline;
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 10px;

    .btn-wrapper {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
  }

  ${({ noPagination }) =>
    noPagination &&
    css`
      ${PaginationList} {
        display: none;
      }
    `}

  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-family: var(--base-font-serif);
    padding: 5px 0;

    @media (min-width: 1400px) {
      padding: 20px 0;
    }
    .table-heading {
      display: flex;
      align-items: center;
      gap: 12px;
      text-transform: none;
      /* margin: 0 0 15px; */
      font-size: 22px;
      font-weight: 400;
      line-height: 24px;
      font-family: var(--base-font-sans-serif);
    }
    .actions {
      display: flex;
      /* align-items: baseline; */
      gap: 10px;
      font-family: var(--base-font-serif);

      .Search {
        height: 39px;
        width: 291px;
        input {
          color: var(--text-color);
          background-color: var(--gray-100);
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          padding-left: 2.8rem;
        }
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 8px;
        margin: 0;
      }
      .success {
        color: var(--success);
      }
      .danger {
        color: var(--danger);
      }
      .primary {
        color: var(--primary);
      }
      .secondary {
        color: #9d9d9d;
      }
      .primary-0 {
        background: rgba(88, 76, 153, 0.1);
      }
      .success-0 {
        background: rgba(65, 148, 0, 0.1);
      }
      .danger-0 {
        background: rgba(215, 65, 32, 0.1);
      }
      .secondary-0 {
        background: rgba(205, 205, 205, 0.1);
        img {
          filter: invert(91%) sepia(0%) saturate(0%) hue-rotate(317deg) brightness(92%) contrast(90%);
        }
      }
      .flex {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      .flex-row {
        display: flex;
        align-items: center;
        gap: 10px;
        button {
          line-height: 1;
        }
      }
      .deatil-btn {
        display: inline-flex;
        gap: 10px;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        text-align: center;
        padding: 6px 12px;
        color: var(--text-color);
      }
      .report-btn {
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        color: var(--primary);
        text-decoration: underline;
      }

      .action-btn {
        display: flex;
        align-items: center;
        gap: 10px;

        .btn-wrapper {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
      }

      ${({ noPagination }) =>
        noPagination &&
        css`
          ${PaginationList} {
            display: none;
          }
        `}

      .head {
        width: 100%;
        height: 20px;
        margin: auto 0;
        background-color: rgba(246, 248, 250, 1);
        border-radius: 50px;
        cursor: pointer;
      }
    }

    ${({ filterBlock }) =>
      filterBlock &&
      css`
        @media only screen and (max-width: 768px) {
          .actions {
            flex-direction: column;
            button {
              width: 100%;
            }
          }
        }
      `}

    /* @media (max-width: 992px) {
      .Search {
        width: 250px !important;
        height: 35px !important;
      }
    } */
    @media only screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      .item {
        width: 100%;
      }
    }

    @media (max-width: 800px) {
      /* flex-direction: column !important; */
      gap: 10px;
      /* .actions {
        .Search {
          width: 100% !important;
          height: 40px !important;
        }
      } */
      .table-heading {
        margin: 0;
      }
    }
  }

  .inner-wrap {
    @media (max-width: 1339px) {
      padding: 5px 10px 20px;
      border-radius: 10px;
    }
    @media (max-width: 768px) {
      padding: 5px 10px 10px;
    }
    .pagination {
      /* background: var(--gray-4); */
      /* border-radius: 0 0 10px 10px; */
    }
  }
`;
