import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
  font-size: 16px;
  line-height: 20px;
  color: var(--text-color);
  font-weight: 600;
  margin-bottom: 16px;
  display: block;
  pointer-events: ${({ $onlyRead }) => $onlyRead && 'none'};
  ${({ labelIcon }) =>
    labelIcon &&
    css`
      display: flex;
      align-items: center;
    `}
  ${({ $labelReverse }) =>
    $labelReverse &&
    css`
      position: relative;
      .label {
        flex-direction: row-reverse;
      }
    `};
  .label {
    display: flex;
    align-items: center;
  }
`;

export const RequiredAsterisk = styled.span`
  color: var(--danger);
  font-size: 14px;
`;
