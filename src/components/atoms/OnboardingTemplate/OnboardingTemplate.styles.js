import styled from "styled-components";

export const OnboardingBlock = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
`;
export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
  min-height: calc(100vh - 40px);

  @media (min-width: 768px) {
    padding: 20px;
  }
  @media (min-width: 992px) {
    width: 50%;
    flex-grow: 1;
    min-height: auto;
  }
  .brand_logo {
    max-width: 250px;
    align-self: center;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      max-width: 300px;
      margin-bottom: 40px;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .img {
    position: absolute;
    top: 0;
    right: 0;
    width: 700px;
    z-index: -1;
    filter: blur(100px);
  }
`;

export const BannerCol = styled.div`
  width: 50%;
  display: none;
  justify-content: flex-end;
  height: calc(100vh - 40px);
  @media (min-width: 992px) {
    display: flex;
  }
  img {
    user-select: none;
    width: 100%;
    height: 100%;
  }
`;
