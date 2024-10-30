import styled from 'styled-components';

export const StyledUploadImage = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: ${({ $noMargin }) => ($noMargin ? '0' : ' 30px')};
  position: relative;
  overflow: hidden;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    &::before {
      opacity: 1;
    }

    .change-photo {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* .label-text {
    display: block;
    font-size: 20px;
    line-height: 24px;
    color: var(--matte-black);
    margin: 0 0 8px;
  }

  .labelButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    overflow: hidden;
    cursor: pointer;
    background: ${({ $bg }) => ($bg ? 'var(--white)' : '#F1F1F1')};
    border-radius: 50px;
    border: 1px dashed #d9d9d9;

    .upload-text {
      display: block;
      text-align: center;
      font-size: 12px;
      line-height: 16px;
      font-weight: 300;
      color: var(--matte-black); */

  .icon-img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  /* }
  } */

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: 0.3s;
  }

  .change-photo {
    position: absolute;
    top: 28px;
    left: 0;
    width: 100%;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.3s;
    cursor: pointer;

    img {
      margin: 0 auto 5px;
    }

    .text {
      display: block;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
      text-align: center;
      color: var(--white);
    }
  }

  input {
    display: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  /* .uploaded-file-name {
    font-weight: 600;
  } */
`;
