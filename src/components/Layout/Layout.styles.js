import styled, {css} from "styled-components";

export const StyledLayout = styled.div`
  ${({ $showlayout }) =>
    $showlayout
      ? css`
          padding: 20px 15px;
          @media (min-width: 768px) {
            padding: 20px;
          }
          @media (min-width: 992px) {
            padding: 20px 20px 20px 120px;
          }
        `
      : css`
          padding: 20px;
        `}
  .children {
    min-height: calc(100vh - 40px);
    ${({ $showlayout }) =>
      $showlayout
        ? css`
            background: var(--white);
            border-radius: 12px;
            padding: 20px 15px;
            @media (min-width: 992px) {
              padding: 20px;
            }
          `
        : css`
            background: var(--white);
          `}
  }
`;
