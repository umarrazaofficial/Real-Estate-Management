import styled from 'styled-components';

export const BusinessHeaderWrapper = styled.div`
  padding-top: 33px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 0;
  }
  .heading-wrap {
    flex-grow: 1;
    .heading {
      font-size: 22px;
      font-weight: 500;
      line-height: 26px;
      text-transform: none;
      @media (min-width: 576px) {
        font-size: 26px;
        line-height: 30px;
      }
    }
  }

  .filters {
    display: flex;
    gap: 16px;

    @media (max-width: 576px) {
      flex-wrap: wrap;
    }

    button {
      font-size: 15px;
      font-weight: 400;
      line-height: 19px;

      @media (max-width: 576px) {
        max-width: 100%;
        height: 50px;
      }
    }
    .Search {
      > div:first-of-type {
        margin-bottom: 0;
      }
      input {
        height: 50px;
        padding-left: 2.8rem;
      }
      @media (max-width: 576px) {
        width: 100%;
      }
    }
    .filter-options {
      width: 120px;
      > div:first-of-type {
        margin-bottom: 0;
      }
      .react-select__control {
        height: 50px;
      }
      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }
`;
