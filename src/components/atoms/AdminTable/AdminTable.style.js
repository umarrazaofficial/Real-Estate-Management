import styled from 'styled-components';
import { Menu, MenuItem } from '@szhsin/react-menu';

export const MenuMain = styled(Menu)`
  width: 155px;
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  left: -160px;
  ul {
    left: 0 !important;
    border-radius: 12px;
  }
`;
export const MenuItems = styled(MenuItem)`
  display: flex;
  gap: 10px;
  padding: 11px;
  border-bottom: 1px solid rgba(241, 241, 241, 1);
  &:last-child {
    border-bottom: none;
  }
`;

export const AdminTableWrapper = styled.div`
  .head {
    .table-heading {
      color: var(--text-color);
      font-size: 28px;
      font-weight: 500;
      line-height: 32px;
      margin-top: 20px;
      @media (min-width: 576px) {
        font-size: 32px;
        line-height: 36px;
      }
      @media (min-width: 768px) {
        font-size: 36px;
        line-height: 40px;
        margin-top: 0px;
      }
    }
  }
  .actions {
    @media (max-width: 650px) {
      flex-direction: column;
      gap: 15px !important;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
    button {
      padding: 13px 15px;
      max-width: 100%;
    }
    .Search {
      @media (max-width: 576px) {
        width: 100% !important;
      }
    }
  }
  .filter {
    min-width: 120px;
  }
`;
