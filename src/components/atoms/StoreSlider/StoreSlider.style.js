import styled from 'styled-components';

export const StoreSliderWrapper = styled.div`
  background: transparent;
  /* max-width: 500px; */
  width: 100%;
  overflow: hidden;
  .card-wrapper {
    display: flex !important;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    gap: 10px;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid rgba(241, 241, 241, 1);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: all 0.3s ease-in-out;

    &.active,
    &:hover {
      background: var(--primary);
      .title {
        color: var(--white);
      }
      .store-count {
        color: var(--white);
      }
      .business {
        background: var(--white);
        color: var(--primary);
      }
      .img-container {
        background: var(--white);
        img {
          filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(109deg) brightness(104%) contrast(101%);
        }
      }
    }

    .img-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary);
      padding: 10px;
      transition: all 0.3s ease-in-out;
      @media (min-width: 992px) {
        width: 60px;
        height: 60px;
      }
    }
    .desc {
      display: flex;
      justify-content: space-between;
    }
    .title {
      width: 100%;
      max-width: 100px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      margin-bottom: 0;
    }
    .store-count {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      color: var(--light-gray);
    }

    .business {
      position: absolute;
      right: 16px;
      top: 20px;
      background: rgba(53, 91, 133, 0.1);
      padding: 6px 10px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      text-align: center;
      color: var(--primary);
    }
  }

  .slick-slider {
    /* display: flex; */
    overflow: hidden;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      inset: 0 0 0 auto;
      width: 30px;
      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%);
      z-index: 9;
      @media (min-width: 576px) {
        width: 100px;
      }
    }

    .slick-slide {
      display: flex;
      width: 280px;
      padding: 20px 10px;

      > div {
        display: flex;
        justify-content: center;
        width: 280px;
      }
    }
    .slick-arrow {
      display: none !important;
    }
    /* .slick-track,
        .slick-list {
            display: flex;
            gap: 16px;
        } */
  }
`;
