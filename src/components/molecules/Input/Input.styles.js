import styled, { css } from 'styled-components';
import FakeInput from '../FakeInput';

export const styles = css`
  border: ${({ $invalid }) => ($invalid ? '1px solid var(--danger)' : '1px solid transparent')};
  background: ${({ $bgWhite }) => ($bgWhite ? 'var(--white)' : 'var(--gray-100)')};
  outline: none;
  height: 44px;
  padding: 10px 25px 10px 15px;
  width: 100%;
  transition: border var(--animation-speed) ease-in-out;
  color: var(--text-color);
  font: var(--base-font-sans-serif);
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  border-radius: 8px;
  /* border-radius: ${({ $straight }) => ($straight ? '6px' : '60px')}; */
  padding-left: ${({ $prefix }) => $prefix && '2.5rem'};
  padding-right: ${({ $suffix, $button }) => {
    if ($suffix) return '2.5rem';
    if ($button) return '3.6rem';
    return '';
  }};

  @media (min-width: 768px) {
    height: 58px;
    padding: 13px 35px 13px 20px;
  }

  ${({ inputSm }) =>
    inputSm &&
    css`
      height: 45px;
      padding: 12px 35px 12px 20px;
      /* background: var(--white); */
      @media (min-width: 768px) {
        height: 45px;
        padding: 12px 35px 12px 20px;
      }
    `}

  ${({ type }) =>
    type === 'search' &&
    css`
      transition: all var(--animation-speed) ease-in-out;

      ${({ responsive }) =>
        responsive &&
        css`
          @media (max-width: 767px) {
            position: absolute;
            top: -22px;
            right: 7px;
            z-index: 9;
            box-shadow: 0px 23px 44px rgba(176, 183, 195, 0.3);
            background: var(--white);
            border: 1px solid var(--light);
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
            width: 0;
          }
          @media (max-width: 575px) {
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
          }
        `}

      ${({ openSearch }) =>
        openSearch &&
        css`
          @media (max-width: 767px) {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            width: 350px;
          }
          @media (max-width: 575px) {
            transform: translateY(0);
            width: 100%;
          }
        `}
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--light);
      cursor: not-allowed;
      border-color: var(--gray-100);
      color: var(--light-gray);

      &::placeholder {
        opacity: 0.7;
      }
    `}

  &:focus {
    border-color: var(--primary);
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--secondary-text-color);
    opacity: 0.6;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: var(--secondary-text-color);
    opacity: 0.6;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--secondary-text-color);
    opacity: 0.6;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--secondary-text-color);
    opacity: 0.6;
  }

  &[type='radio'] {
    + ${FakeInput} {
      border-radius: 100%;
      &:before {
        content: '';
        background: var(--white);
        border-radius: 100%;
        width: 10px;
        height: 10px;
      }
    }
  }

  + ${FakeInput} {
    transition: background var(--animation-speed) ease-in-out;
    &:before,
    .icon-check {
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: opacity var(--animation-speed) ease-in-out;
    }
  }

  &[type='checkbox'] {
    + ${FakeInput} {
      .icon-check {
        color: var(--white);
        font-size: var(--font-size-xs);
      }
    }
  }

  &[type='checkbox'],
  &[type='radio'] {
    display: none;
    &:checked {
      + ${FakeInput} {
        background: #465045;
        .icon-check,
        &:before {
          opacity: 1;
        }
      }
    }
    &:disabled {
      + ${FakeInput} {
        opacity: 0.5;
      }
    }
  }
`;

export const StyledTextarea = styled.textarea`
  ${styles}
  resize: vertical;
  min-height: ${({ $textareaHeight }) => ($textareaHeight ? $textareaHeight : '9.375rem')};
  resize: none;
  border-radius: 16px;
`;

export const StyledInput = styled.input`
  ${styles}
`;
