import { styled } from 'styled-components';
import { styles } from '../Input/Input.styles';
import PhoneInput from 'react-phone-number-input';

export const PhoneWrapper = styled.div`
  .PhoneInputCountrySelect {
    background: ${({ $bgWhite }) => ($bgWhite ? 'var(--white)' : 'var(--gray-100)')};
    padding: 20px;
    flex-shrink: 0;
    border: 0px;
    outline: none;
    display: block;
    border-radius: 50px;
    @media screen and (max-width: 576px) {
      padding: 10px;
    }
  }
  .PhoneInputCountry {
    padding: 10px;
    background: ${({ $bgWhite }) => ($bgWhite ? 'var(--white)' : 'var(--gray-100)')};
    border-radius: 8px;
    width: ${({ $noFlagWidth }) => ($noFlagWidth ? $noFlagWidth : '100px')};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media screen and (max-width: 576px) {
      width: 70px;
      border-radius: 20px;
    }
  }
  .PhoneInput {
    input {
      ${styles}
    }
  }
`;
