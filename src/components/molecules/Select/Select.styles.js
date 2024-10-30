import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import styled, { css } from 'styled-components';
import { styles } from '../Input/Input.styles';

const Styles = css`
  min-width: 100px;
  .react-select__control {
    ${styles}
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
    border-color: ${({ error }) => error && 'var(--danger) !important'};
    box-shadow: none;
    @media (min-width: 768px) {
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 20px;
      padding-right: 20px;
      /* height: 44px; */
    }
    ${({ $gray }) =>
      $gray &&
      css`
        background: var(--gray-4);
        /* border-color: var(--light-secondary); */
      `}
    &:hover {
      border-color: var(--light);
    }
    &.react-select__control--is-focused,
    &.react-select__control--menu-is-open {
      border-color: #408f8c;
    }
  }
  .react-select__placeholder {
    color: var(--gray-200);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: calc(100% - 8px);
    font-size: 14px;
    line-height: 18px;
  }
  .react-select__single-value {
    font-size: 14px;
    line-height: 18px;
  }
  .react-select__value-container {
    padding-left: 0;
    padding-right: 0;
  }
  .react-select__menu-portal {
    z-index: 9999;
  }
  .react-select__menu {
    box-shadow: 3px 18px 44px rgba(176, 183, 195, 0.28);
    border-radius: 8px;
    border: 1px solid var(--gray-50);
    z-index: 2;
  }
  /* .react-select__dropdown-indicator {
    display: none;
  } */
  .react-select__option {
    font-size: 12px;
    &:active {
      color: #f1f1f1;
      background: var(--dark-green);
    }
  }
  .react-select__option--is-focused {
    color: #f1f1f1;
    background: rgba(70, 80, 69, 0.5);
  }
  .react-select__option--is-selected {
    color: #f1f1f1;
    background: var(--dark-green);
  }
  ${({ isMulti }) =>
    isMulti &&
    css`
      .react-select__control {
        height: auto;
        min-height: 45px;
      }
      .react-select__option {
        position: relative;
        font-size: 14px;
        padding-left: 42px;
        padding-top: 15px;
        padding-bottom: 15px;
        text-transform: uppercase;
        &:before,
        &:after {
          content: '';
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          border: 1px solid var(--primary);
          border-radius: 5px;
          width: 16px;
          height: 16px;
        }
        &:after {
          content: '\\e876';
          font-family: 'Material Icons Round';
          background: var(--primary);
          opacity: 0;
          visibility: hidden;
          transition: 0.3s linear;
          color: var(--white);
          font-size: 10px;
          line-height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &.react-select__option--is-selected {
          background: none;
          color: #0f2546;
          &:after {
            opacity: 1;
            visibility: visible;
          }
          &.react-select__option--is-focused {
            background: var(--light-secondary);
          }
        }
      }
      .react-select__multi-value {
        background: #d2ecf1;
        font-size: 12px;
        line-height: 12px;
      }
    `}
`;

export const StyledSelect = styled(Select)`
  ${Styles}
`;

export const StyledSelectAsync = styled(AsyncSelect)`
  ${Styles}
`;
