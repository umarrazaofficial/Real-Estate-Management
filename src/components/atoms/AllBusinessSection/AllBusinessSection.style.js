import styled from 'styled-components';

export const AllBusinessSectionWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid rgba(241, 241, 241, 1);
  border-radius: 26px;
  padding-bottom: 30px;
  .content-wrap {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 20px;
    padding: 16px 40px 16px 20px;

    @media (min-width: 576px) {
      padding: 26px 50px 26px 30px;
      flex-direction: row;
      gap: 0;
    }
    .dots {
      position: absolute;
      font-size: 22px;
      cursor: pointer;
      right: 10px;
      top: 34px;
      @media (min-width: 576px) {
        right: 20px;
        top: 44px;
      }
      .action-btn {
        position: relative;
      }
    }
  }

  .btns-wrap {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export const BusinessWrap = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 16px;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 60px;
    background: var(--primary);
    img {
      width: 18px;
      height: 18px;
    }

    @media (min-width: 576px) {
      width: 60px;
      height: 60px;
      img {
        width: 24px;
        height: 25px;
      }
    }
  }
  .title {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    @media (min-width: 576px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  .desc {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: var(--light-gray);
    @media (min-width: 576px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
