import styled, { css } from 'styled-components';

export const StyledInfoCard = styled.div`
  ${({ $unStyled }) =>
    !$unStyled &&
    css`
      background: var(--gray-100);
      border-radius: 10px;
      padding: 16px;
    `}
`;

export const Title = styled.strong`
  font-size: ${({ fontbase }) => (fontbase ? 'var(--font-size-base)' : 'var(--font-size-sm)')};
  line-height: ${({ fontbase }) =>
    fontbase ? 'calc(var(--font-size-base) + 0.3125rem)' : 'calc(var(--font-size-sm) + 0.3125rem)'};
  display: block;
  margin-bottom: 0.375rem;
`;

export const Value = styled.span`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: var(--light-gray);
  display: ${({ isArrayValue }) => (isArrayValue ? 'block' : 'flex')};
  word-break: break-all;
`;
