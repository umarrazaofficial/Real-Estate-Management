import styled from "styled-components";

export const DeleteModalWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 36px;

    .alert-icon {
        @media (max-width: 576px) {
            width: 120px;
        }
    }

    .details {
        max-width: 441px;
        width: 100%;
        h2 {
            font-size: 18px;
            font-weight: 600;
            line-height: 22px;
            text-align: center;
            @media (min-width: 576px) {
                font-size: 20px;
                line-height: 24px;
            }
        }
        p {
            font-size: 16px;
            font-weight: 300;
            line-height: 20px;
            text-align: center;
            @media (min-width: 576px) {
                font-size: 18px;
                line-height: 22px;
            }
        }
    }
    button {
        height: 52px;
    }
`;
