import styled from "styled-components";

export const AddStoreModalWrapper = styled.div`
  .input-wrap {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    label {
      font-weight: 400;
    }
  }
  .add-device {
    border: 1px solid #f1f1f1;
    border-radius: 26px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 26px;

    @media (min-width: 576px) {
      padding: 40px 0;
    }
    .heading {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      max-width: 180px;
    }
  }
  .form-subtitle {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    display: block;
    margin-bottom: 20px;
  }
`;
