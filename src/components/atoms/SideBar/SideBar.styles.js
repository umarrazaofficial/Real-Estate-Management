import styled from 'styled-components';

export const StyledSideBar = styled.div`
  background: linear-gradient(116.03deg, #355b85 5.04%, #1b2e44 86.56%);
  border-radius: 12px;
  /* padding: 20px 16px; */
  padding: 20px 0;
  position: fixed;
  left: 20px;
  top: 20px;
  bottom: 20px;
  max-width: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: var(--white);
  z-index: 70;
  flex-shrink: 0;
  /* overflow: hidden; */
  transition: 0.3s all ease-in-out;
  @media (max-width: 576px) {
    bottom: 90px !important;
  }
  @media (max-width: 991px) {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    left: 15px;
    bottom: 20px;
    transform: translateX(-200%);
    .aside-active & {
      transform: translateX(0%);
    }
  }

  .nav-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 45px;
    flex-grow: 1;
    overflow-y: auto;
    width: 100%;
    .logoWrapper {
      max-width: 40px;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .nav-links {
      padding: 20px 0px 5px 0px;
      width: 100%;
      display: block;
      li {
        padding: 0 16px;
        position: relative;
        width: 100%;
        margin: 0 auto 50px;
        text-align: center;
        .tooltip {
          position: absolute;
        }
      }
      .active {
        &::before {
          position: absolute;
          content: '';
          top: -7px;
          bottom: -7px;
          left: -1px;
          width: 4px;
          background: rgba(254, 184, 99, 1);
          border-radius: 0px 60px 60px 0px;
        }
      }
    }
  }
  button {
    border: none;
    outline: none;
    background: transparent;
  }
`;
