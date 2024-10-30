import styled from 'styled-components';

export const StyledHeader = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    margin-bottom: 10px;
    gap: 10px;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    max-width: 180px;
    width: 100%;
    background: rgba(70, 80, 69, 0.05);
    border-radius: 12px;
    padding: 8px 20px 8px 10px;
    @media (max-width: 576px) {
      max-width: 100%;
    }
    .pic {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      overflow: hidden;
      flex-shrink: 0;
      img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    .body {
      display: flex;
      flex-direction: column;

      .greeting {
        font-size: 13px;
        font-weight: 300;
        line-height: 15px;
      }
      .name {
        font-size: 15px;
        font-weight: 600;
        line-height: 18px;
      }
      /* @media (max-width: 991px) {
                display: none;
            } */
    }
  }

  .notificationWraaper {
    max-width: 216px;
    width: 100%;
    padding: 8px 20px 8px 10px;
    background: rgba(70, 80, 69, 0.05);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    color: var(--text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
    @media (max-width: 991px) {
      padding: 0;
      max-width: 40px;
    }

    .bell {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.8px solid rgba(157, 157, 157, 0.2);
      width: 40px;
      height: 40px;
      border-radius: 50px;
      img {
        width: 16px;
        height: 16px;
      }
    }
    .notifcation-text {
      @media (max-width: 991px) {
        display: none;
      }
    }
    .count {
      padding: 4px 8px;
      border-radius: 60px;
      text-align: center;
      background: rgba(254, 184, 99, 1);
      font-size: 13px;
      font-weight: 300;
      line-height: 17px;
      @media (max-width: 991px) {
        display: none;
      }
    }
  }
  .notificationWrapper-visible {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
    max-width: 432px;
    position: absolute;
    top: 55px;
    right: 40px;
    transform: translateY(50px);
    transition: 0.4s;
    z-index: 9;
    @media (max-width: 576px) {
      left: 40px;
    }
  }
  .notificationWrapper {
    max-width: 432px;
    position: absolute;
    top: 55px;
    right: 40px;
    padding-top: 64px;
    visibility: hidden;
    transform: translateY(10px);
    opacity: 0;
    transition: 0.4s;
    z-index: 9;
    @media (max-width: 576px) {
      left: 40px;
    }
  }
  .header-right-col {
    display: flex;
    gap: 15px;
    align-items: center;
    .hamburger {
      @media (min-width: 992px) {
        display: none;
      }
    }
    @media (max-width: 576px) {
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
`;
