import styled, {css} from "styled-components";

export const StyledTabPanels = styled.div`
    background: var(--white);
    width: 100%;
    ${({verticalTabs}) =>
        verticalTabs &&
        css`
            border: ${({$noBorder}) => ($noBorder ? "" : "1px solid rgba(74, 85, 104, 0.1)")};
            border-radius: ${({$noBorder}) => ($noBorder ? "" : "25px")};
            overflow: ${({$noOverflow}) => ($noOverflow ? "" : "hidden")};
            padding: ${({$noBorder}) => ($noBorder ? "" : "20px 5px")};
            min-height: 470px;
        `}
    ${({rounded}) =>
        rounded &&
        css`
            border: ${({$noBorder}) => ($noBorder ? "" : "1px solid rgba(74, 85, 104, 0.1)")};
            border-radius: ${({$noBorder}) => ($noBorder ? "" : "25px")};
            overflow: ${({$noOverflow}) => ($noOverflow ? "" : "hidden")};
            padding: ${({$noBorder}) => ($noBorder ? "" : "20px 0px")};
        `}
`;

export const StyledTabPanel = styled.div`
    position: relative;
    padding: 0 15px;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    height: 0;
    @media (min-width: 992px) {
        padding: 0 30px;
    }

    > div:first-of-type {
        padding: 20px;
    }

    ${({active}) =>
        active &&
        css`
            opacity: 1;
            visibility: visible;
            height: auto;
        `}
`;

export const TabBtn = styled.div`
    flex-shrink: 0 !important;
    ${({verticalTabs}) =>
        verticalTabs === true &&
        css`
            width: max-content !important;
        `}
`;
export const StyledTabList = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;

    .title {
        display: block;
        margin-bottom: 15px;
        color: var(--dark);
        font-size: 18px;
        line-height: 22px;
        font-weight: 700;
    }
    ${({verticalTabs}) =>
        verticalTabs === true &&
        css`
            display: flex !important;
            align-items: center;
            white-space: nowrap;
            gap: 10px;
            width: 100%;
            height: auto;
            padding: 0;
            border-bottom: 2px solid var(--gray-6);

            ${StyledTabPanel} {
                padding-left: 0;
            }
            ${StyledTabPanels} {
                padding: 10px 0;
            }
            ${TabBtn} {
                padding: 0 0 0 20px;

                &:first-child {
                    padding: 0 0 0 0;
                }
            }
        `}
    ${({rounded}) =>
        rounded === true &&
        css`
            display: flex !important;
            align-items: center;
            white-space: nowrap;
            gap: 10px;
            width: 100%;
            height: auto;
            padding: 0;

            ${StyledTabPanel} {
                padding-left: 0;
            }
            ${StyledTabPanels} {
                padding: 10px 0;
            }
            ${TabBtn} {
                padding: 0 0 0 0px;
            }
        `}
         @media (min-width: 1200px) {
        display: block;
        margin: 0 0 15px;
    }
`;

export const StyledTab = styled.button`
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    text-transform: capitalize;
    color: var(--gray-5);
    position: relative;
    border-radius: 0px;
    width: 100%;
    text-align: center;
    padding: 20px 15px;

    @media (min-width: 992px) {
        padding: 30px;
        ${({isModal}) =>
        isModal === true &&
        css`
            padding: 20px;
        `}

    }
    @media (min-width: 1200px) {
        font-size: var(--font-size-base);
        text-align: left;
    }

    ${({verticalTabs}) =>
        verticalTabs === true &&
        css`
            margin-bottom: 0;
        `}

    ${({rounded}) =>
        rounded === true &&
        css`
            margin-bottom: 0;
            padding: 15px 27px !important;
            border-radius: 100px;
            border: 1px solid #f1f1f1;
            color: var(--gray-5);
            text-align: center !important;
            font-size: 12px !important;
            font-weight: 400;
            line-height: 16px !important;
            color: #9d9d9d;
            &:hover {
                &:after {
                    visibility: visible;
                    opacity: 1;
                    width: 100%;
                }
            }
            &::after {
                display: none;
            }
        `}
    ${({active}) =>
        active &&
        css`
            background: var(--primary);
            color: var(--white);
            ${({rounded}) =>
                rounded === true &&
                css`
                    color: var(--primary);
                    background: rgba(53, 91, 133, 0.1);
                    &::after {
                        display: none;
                    }
                `}
        `}
     &:hover {
        ${({rounded}) =>
            rounded === true &&
            css`
                color: var(--primary);
                background: rgba(53, 91, 133, 0.1);
            `}
    }
`;

export const Wrap = styled.div`
    overflow-y: auto;
    width: 100%;
    position: relative;
    border-bottom: 1px solid #e6e8ec;

    ${({verticalTabs}) =>
        verticalTabs === true &&
        css`
            display: flex;
            align-items: center;
            max-width: 100%;
            width: 100% !important;
            min-height: auto;
            height: auto;
            padding: 0 15px 0 0;
            overflow-y: hidden;
            border-right: 0 !important;
            border-bottom: 0 !important;
        `}
    ${({rounded}) =>
        rounded === true &&
        css`
            display: flex;
            align-items: center;
            width: 100% !important;
            min-height: auto !important;
            padding: 15px 0px;
            overflow-y: hidden;
            border-right: 0 !important;
            border-bottom: 0 !important;
        `}
  &::-webkit-scrollbar {
        height: 8px;
        border-radius: 0;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
    }
    @media (min-width: 1200px) {
        width: 277px;
        min-height: 608px;
        border-right: 1px solid #e6e8ec;
        ${({isModal}) =>
        isModal === true &&
        css`
            max-height: 350px;
        `}
    }
`;

export const StyledTabs = styled.div`
    margin: 0;
    width: 100%;
    /* border: 1px solid #f1f1f1; */
    border-radius: 26px;
    overflow: hidden;

    ${({verticalTabs}) =>
        verticalTabs === true &&
        css`
            border: none;
            display: block !important;
            margin: 15px 0 15px 0;
        `}
    ${({rounded}) =>
        rounded === true &&
        css`
            display: block !important;
        `};
    @media (min-width: 1200px) {
        display: flex;
    }
`;
