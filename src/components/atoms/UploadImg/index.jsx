import React, { useState } from 'react';
import { StyledUploadImage } from './UploadImg.style';
import uploadImg from '../../../assets/upload-file.svg';
import ProfilePic from '../../../assets/upload.png';
import Toast from '../../molecules/Toast';

const UploadImg = ({
  imageUrl = '',
  id = 'upload',
  fileSize = 2,
  accept = '.png , .jpg , .jpeg',
  noMargin,
  ...props
}) => {
  const [uploaded, setUploaded] = useState('');

  function handelChange(e) {
    const file = e.target.files[0];
    if (file) {
      const fileLength = file.size / (1024 * 1024);
      if (fileLength <= fileSize) {
        setUploaded(e.target.files[0]);
        props.onChange(e.target.files[0]);
        // onChange(e.target.files[0]);
      } else {
        Toast({
          type: 'warning',
          message: 'file size exceeded',
        });
      }
    }
  }
  return (
    <StyledUploadImage $noMargin={noMargin}>
      <label htmlFor={id} className="labelButton">
        {!uploaded && (
          <span className="upload-text">
            <img className="icon-img" src={imageUrl || ProfilePic} alt="icon" />
          </span>
        )}
        {uploaded && typeof uploaded === 'string' ? (
          <img src={uploaded} alt="img" width={250} height={300} />
        ) : (
          uploaded && <img src={URL.createObjectURL(uploaded)} alt="img" width={250} height={300} />
        )}
        <input
          type="file"
          id={id}
          accept={accept}
          onChange={e => {
            handelChange(e);
          }}
        />
        <div className="change-photo">
          <img src={uploadImg} alt="upload" width={24} height={24} />
          <span className="text">Upload image</span>
        </div>
      </label>
    </StyledUploadImage>
  );
};

export default UploadImg;
