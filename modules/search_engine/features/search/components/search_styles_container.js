import styled from 'styled-components';
import { palette } from 'styled-theme';

export const SearchStylesContainer = styled.div`
  /**
  styles for components in search page
  @author: Loc Pham
  */

  /* source-select */
  .ant-select.fs-search {
    border-radius: 5px;
    .ant-select-selector {
      background: ${palette('darkGrayScale', 1)} !important;
      border-color: ${palette('darkGrayScale', 1)} !important;
      box-shadow: none !important;
      border-radius: 5px !important;
      height: 35px;
      padding-left: 5px;
    }

    .ant-select-selection-item {
      background: ${palette('gradient', 0)};
      border: none;
    }
    .ant-select-dropdown {
      background: ${palette('darkGrayScale', 1)};
      padding: 5px 5px;
      border-radius: 5px;
      .ant-select-item {
        color: white;
        &:not(:last-child) {
          margin-bottom: 5px;
        }
        border-radius: 3px;
        background: ${palette('darkGrayScale', 1)};
      }
      .ant-select-item-option-active {
        background: ${palette('darkGrayScale', 2)};
      }
      .ant-select-item-option-selected {
        background: ${palette('darkGrayScale', 2)};
        color: ${palette('darkGreen', 0)};
        svg {
          fill: ${palette('darkGreen', 0)};
        }
      }
    }
  }
  .fs-search.ant-select-focused {
    .ant-select-selector {
      border-color: ${palette('darkGreen', 0)} !important;
    }
  }
  /* source-select */

  /* search autocomplete */
  .ant-select-auto-complete {
    width: 100%;
    height: 40px;
    margin-top: 15px;
    .ant-select-selector {
      height: 100%;
      .ant-input-affix-wrapper {
        height: 100%;
        border-radius: 5px;
        background: ${palette('darkGrayScale', 1)};
        border-color: transparent;
        box-shadow: none;
        &:hover {
          border-color: ${palette('darkGreen', 0)};
        }
        input {
          background: ${palette('darkGrayScale', 1)};
          color: white;
        }
        .ant-input-prefix {
          margin-right: 15px;
          svg {
            fill: #818182;
          }
        }
      }
      .ant-input-affix-wrapper-focused {
        border-color: ${palette('darkGreen', 0)};
      }
    }
    .ant-select-dropdown-placement-bottomLeft {
      background: ${palette('darkGrayScale', 1)};
      border-radius: 5px;
      padding: 5px;
      .ant-select-item-option {
        border-radius: 3px;
        color: white;
        background: ${palette('darkGrayScale', 1)};
        height: 25px;
        &:not(:last-child) {
          margin-bottom: 5px;
        }
        display: flex;
        align-items: center;
      }
      .ant-select-item-option-active {
        background: ${palette('darkGrayScale', 2)};
      }
      .ant-select-item-option-selected {
        background: ${palette('darkGrayScale', 2)};
        font-weight: normal;
      }
    }
  }
  /* search autocomplete */
`;

export const AutocompleteItemWrapper = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  color: white;
  .autocomplete-item-icon {
    margin-right: 15px;
  }
  .autocomplete-item-text {
    color: white;
  }
  .history-item {
    color: ${palette('darkGreen', 0)};
  }
`;
