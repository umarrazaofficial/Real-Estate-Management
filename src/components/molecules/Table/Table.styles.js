import styled, { css } from 'styled-components';

export const TableHolder = styled.div`
  padding: ${({ noPadding }) => (noPadding ? '0' : '20px 20px 9px')};
  /* background: var(--base-background-color); */
  padding-top: 15px;
  @media (min-width: 1200px) {
    padding-top: 10px;
  }

  ${({ responsive }) =>
    responsive
      ? css`
          @media (min-width: 1200px) {
            padding: 20px;
          }
          @media (min-width: 992px) {
            /* background: var(--gray-4); */
            padding: 0;
          }
        `
      : css`
          background: var(--light);
        `}
`;

export const TableScroll = styled.div`
  width: 100%;
  max-height: ${({ $height }) => $height && `${$height}px`};

  /* @media (min-width: 992px) {
    overflow-x: auto;
  } */
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: var(--text-color);
  font-family: var(--base-font-serif);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  ${({ responsive }) =>
    responsive
      ? css`
          @media (min-width: 992px) {
            min-width: ${({ $width }) => $width && `${$width}px`}; /* width on which horizontal scroll will appear */
          }
        `
      : css`
          min-width: ${({ $width }) => $width && `${$width}px`};
        `}
`;

export const Thead = styled.thead`
  ${({ responsive }) =>
    responsive
      ? css`
          @media (max-width: 991px) {
            display: none;
          }
        `
      : css`
          display: table-header-group;
        `}
  .table-head {
    border-bottom: none;
    th {
      &:first-child {
        padding-left: 25px;
        border-radius: 6px 0 0 6px;
      }
      &:last-child {
        border-radius: 0 6px 6px 0;
        padding-right: 25px;
      }
    }
  }
  .separator {
    height: 20px;
    width: 100%;
    background: #fff;
    border-bottom: none;
  }
`;

export const TBody = styled.tbody`
  ${({ responsive }) =>
    responsive &&
    css`
      @media (max-width: 991px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0px, 1fr));
        gap: 10px;
      }

      @media (max-width: 767px) {
        grid-template-columns: repeat(1, minmax(0px, 1fr));
      }
    `}
`;

export const NoRecordFound = styled.span`
  display: block;
  max-width: 200px;
  padding: 15px 10px 13px;
  margin: 15px auto;
  border-radius: 5px;
  color: var(--danger);
  background: #ffebeb;
  text-align: center;
`;
