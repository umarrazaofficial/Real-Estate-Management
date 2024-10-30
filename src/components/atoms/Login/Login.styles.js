import styled from "styled-components";
import bg from '../../../assets/mainBg.png';
export const FormContent = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;

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
  }

  .btn-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px 0 16px;
  }
`;

export const MainWrapperForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 40px);
  border-radius: 20px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .logo-wrapper {
    max-width: 237px;
    margin-bottom: 40px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .text-wrapper {
    max-width: 332px;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    text-align: center;
    margin-bottom: 36px;
  }
`;