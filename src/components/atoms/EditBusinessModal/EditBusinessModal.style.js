import styled from "styled-components";

export const EditBusinessModalWrapper = styled.div`
    padding-top: 20px;
    .input-wrap {
        display: flex;
        flex-direction: column;
        gap: 0;
        @media (min-width: 576px)
        {
            flex-direction: row;
            gap: 16px;
        }
        label{
            font-weight: 400;
        }
    }
`;
