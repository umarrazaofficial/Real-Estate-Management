import styled from 'styled-components';
export const MapHolder = styled.div`
  padding: 20px;
  .heading {
    display: block;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    color: var(--matte-black);
    text-align: center;
    margin-bottom: 30px;
  }
  .map {
    width: 100%;
    height: 326px;
    margin-bottom: 30px;
    position: relative;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.15);
      z-index: 1;
      border-radius: 30px;
      pointer-events: none;
    }
  }
  .search {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 500px;
    z-index: 9999;
    .pac-target-input {
      padding-left: 50px;
    }
  }
  .input-holder {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    input {
      background: var(--gray-light);
    }
    > div {
      flex-grow: 1;
      margin-bottom: 0 !important;
    }
    .btn-holder {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: ${({ storeNameField }) => (storeNameField ? '0' : '1')};
    }
  }
`;
