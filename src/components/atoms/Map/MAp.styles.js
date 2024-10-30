import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
100%{
    background-position: -100% 0;
}
`;
export const StyledMAp = styled.div`
  width: 100%;
  height: calc(100vh - 450px);
  border: 1px solid #f1f1f1;
  border-radius: 26px;
  overflow: hidden;
  @media (min-width: 768px) {
    height: calc(100vh - 375px);
  }

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MapMainWrapper = styled.div`
  flex-grow: 1;
  overflow: hidden;
  margin-bottom: 20px;
  .heading {
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    margin-bottom: 20px;
    text-transform: none;
  }
  @media (min-width: 992px) {
    margin: 0;
  }
`;

export const MapSkeletons = styled.div`
  width: 100%;
  height: calc(100vh - 450px);
  @media (min-width: 768px) {
    height: calc(100vh - 400px);
  }
  background-image: linear-gradient(120deg, #ececec 50%, #fafafa 60%, #fafafa 61%, #ececec 70%);
  background-size: 200%;
  background-position: 100% 0;
  animation: ${fadeIn} 1s linear infinite;
`;
