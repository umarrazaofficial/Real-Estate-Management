import styled from 'styled-components';

export const StyledHeader = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  /* @media (max-width: 576px) {
    flex-direction: column-reverse;
    margin-bottom: 10px;
    gap: 10px;
  } */

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    max-width: 200px;
    width: 100%;
    background: rgba(70, 80, 69, 0.05);
    border-radius: 12px;
    padding: 8px 20px 8px 10px;
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

  .hamburger {
    cursor: pointer;
    @media (min-width: 992px) {
      display: none;
    }
  }
`;
