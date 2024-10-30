import styled, { css, keyframes } from 'styled-components';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { menuSelector, menuItemSelector } from '@szhsin/react-menu/style-utils';
import { darken, cssVar } from 'polished';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const menuShow = keyframes`
  from {
    opacity: 0;
  }
`;

const menuHide = keyframes`
  to {
    opacity: 0;
  }
`;

export const StyledMenu = styled(Menu)`
  ${menuSelector.name} {
    left: -150px !important;
    box-sizing: border-box;
    list-style: none;
    user-select: none;
    margin: 0px;
    /* padding: 5px 0px; */
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    min-width: 10rem;
    z-index: 999;
    border-radius: 12px;
    background: var(--white);
  }

  ${menuSelector.stateOpening} {
    animation: ${menuShow} 0.15s ease-out;
  }

  ${menuSelector.stateClosing} {
    animation: ${menuHide} 0.2s ease-out forwards;
  }

  ${menuItemSelector.name} {
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
    display: flex;
    gap: 5px;
    /* margin: 5px 0px; */
    padding: 10px 10px;
    color: var(--dark);
    border: none;
  }

  ${menuItemSelector.name}:hover {
    background: var(--primary);
    color: var(--white);
  }
`;

export const StyledMenuButton = styled(MenuButton)`
  ${({ button }) =>
    button &&
    css`
      color: var(--light-gray);
      background: var(--secondary-btn-background);
      width: fit-content;
      height: 40px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      border-radius: 8px;
      .material-icons-outlined {
        font-size: 15px;
        line-height: 1;
        margin: 0 3px;
      }
      &:hover {
        background: ${darken(0.1, cssVar('--light'))};
      }
    `}
`;

export const StyledMenuItem = styled(MenuItem)`
  transition: all 0.3s ease-in-out;
  ${({ active }) =>
    active &&
    css`
      background: var(--primary);
      color: #fff !important;
      img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(263deg) brightness(107%) contrast(101%) !important;
      }
    `}

  &:hover {
    img {
      transition: all 0.3s ease-in-out;
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(263deg) brightness(107%) contrast(101%) !important;
    }
  }

  [class^='material-icons-'],
  [class*=' material-icons-'] {
    margin-right: 0.5rem;
  }

  &.delete-btn {
    color: var(--danger);
  }
  &.disble-btn {
    color: var(--light-gray);
  }
  &.enable-btn {
    color: var(--light-blue);
  }

  &.detail-btn {
    color: var(--primary);
  }
`;
