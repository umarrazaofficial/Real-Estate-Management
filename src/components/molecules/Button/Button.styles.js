import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: relative;
  width: 100%;
  max-width: ${({ $width }) => ($width ? $width : '100%')};
  font-size: 13px;
  line-height: 17px;
  font-weight: 500;
  padding: 10px;
  border-radius: 8px;
  color: var(--primary);
  overflow: hidden;
  background: var(--brown);
  transition: 0.3s all ease-in-out;

  @media (min-width: 576px) {
    padding: 16px 20px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 23px;
  }

  ${({ $animation }) =>
    $animation &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) skew(70deg);
        visibility: hidden;
        opacity: 0;
        width: 0;
        border-radius: 8px;
        background: var(--dark-green);
        transition: 0.3s all ease-in-out;
        z-index: -1;
      }
    `}
  /* &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) skew(70deg);
    visibility: hidden;
    opacity: 0;
    width: 0;
    border-radius: 8px;
    background: var(--dark-green);
    transition: 0.3s all ease-in-out;
    z-index: -1;
  } */

  ${({ $sm }) =>
    $sm &&
    css`
      font-weight: 500;

      @media (min-width: 576px) {
        padding: 12px 20px;
      }
      @media (min-width: 1200px) {
        font-size: 14px;
        line-height: 18px;
      }
    `}

  ${({ $xs }) =>
    $xs &&
    css`
      font-size: 13px;
      line-height: 16px;
      font-weight: 500;

      @media (min-width: 576px) {
        padding: 8px 10px;
      }
      @media (min-width: 1200px) {
        font-size: 13px;
        line-height: 16px;
      }

      &::before {
        content: '';
        transform: translateX(-50%) skew(50deg);
      }
    `}

  ${({ $md }) =>
    $md &&
    css`
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;

      @media (min-width: 576px) {
        padding: 10px 20px;
      }
      @media (min-width: 1200px) {
        font-size: 16px;
        line-height: 20px;
      }
    `}

  ${({ $loader, disabled }) =>
    $loader ||
    (disabled &&
      css`
        cursor: not-allowed;
      `)}

      ${({ $animation }) =>
    $animation &&
    css`
      &:hover {
        opacity: 0.99;
        color: var(--white);

        &::before {
          width: 100%;
          visibility: visible;
          opacity: 1;
        }
      }
    `}
  

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      color: var(--white);
      background: var(--primary);
    `}

  ${({ $variant }) =>
    $variant === 'primary' &&
    css`
      color: var(--primary);
      background: rgba(213, 203, 191, 1);
    `}
  ${({ $variant }) =>
    $variant === 'light-primary' &&
    css`
      color: var(--primary);
      background: rgba(70, 80, 69, 0.1);
    `}
  ${({ $variant }) =>
    $variant === 'light' &&
    css`
      color: var(--secondary);
      background: var(--white);
    `}

  ${({ $variant }) =>
    $variant === 'outline' &&
    css`
      border: 1px solid rgba(70, 80, 69, 0.1);
      color: var(--light-gray);
      background: var(--gray-100);

      &::before {
        background: var(--primary);
      }

      &:hover {
        color: var(--white);
      }
    `}

  ${({ $variant }) =>
    $variant === 'danger' &&
    css`
      color: var(--white);
      background: var(--danger);

      &::before {
        background: #e06348;
      }
    `}

  .loader {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
