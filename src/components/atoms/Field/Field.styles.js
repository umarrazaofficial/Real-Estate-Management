import styled from 'styled-components';

export const Error = styled.span`
  display: block;
  color: var(--danger);
  /* min-height: 26px; */
  height: auto;
  opacity: 1;
  font-size: 12px;
  line-height: 16px;
  padding-top: 3px;
  /* position: absolute;
  bottom: -18px;
  left: 0; */
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const InputHolder = styled.div`
  @media (min-width: 576px) {
    position: relative;
  }
  @media (max-width: 575px) {
    position: ${({ $searchField }) => !$searchField && 'relative'};
  }
`;
