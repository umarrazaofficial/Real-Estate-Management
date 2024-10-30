import styled from "styled-components";

export const EditStoreModalWrapper = styled.div`
    .input-wrap {
        display: flex;
        flex-direction: column;
        gap: 0;
        @media (min-width: 576px) {
            flex-direction: row;
            gap: 16px;
        }
        label {
            font-weight: 400;
        }
    }
    .devices-wrap {
        border: 1px solid #f1f1f1;
        border-radius: 26px;
        padding: 20px 10px;
        margin-bottom: 26px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media (min-width: 576px) {
            padding: 40px 20px;
        }
        .row-wrap {
            display: flex;
            justify-content: space-between;

            .detail-wrap {
                .title{
                    margin-bottom: 8px;
                }
                .secondary {
                    font-size: 14px;
                    font-weight: 300;
                    line-height: 18px;
                    color: var(--light-gray);
                }
                .success{
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 18px;
                    color: var(--success);
                }
                .primary{
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 18px;
                    color: var(--primary);
                }
            }

            .title {
                font-size: 20px;
                font-weight: 400;
                line-height: 24px;
            }
            .count {
                font-size: 16px;
                font-weight: 300;
                line-height: 20px;
            }
            .heading {
                font-size: 16px;
                font-weight: 400;
                line-height: 20px;
            }
            button {
                padding: 10px 20px;
                height: 40px;
            }
        }
    }
`;
