import styled from 'styled-components';

export const FormContent = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  .heading-text {
    width: 100%;
    color: var(--white);
    margin: 0 0 30px;
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    font-weight: 300;
    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  .head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 85px;
    .back-arrow {
      cursor: pointer;
      margin-bottom: 15px;
    }
  }

  h1 {
    color: var(--white);
  }

  form {
    max-width: 480px;
    width: 100%;
    overflow: hidden;

    .input-flex {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      width: 100%;
    }

    label {
      display: block;
      width: 100%;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      margin: 0 0 16px;
      color: var(--white);
    }
  }

  .btn-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px 0 16px;
  }

  .sign-in {
    width: 100%;
    color: var(--white);
    text-align: right;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    padding: 10px;
    cursor: pointer;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
