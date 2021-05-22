import styled from 'styled-components';
import { palette } from 'styled-theme';

/**
  styles for components in search page
  @author: Loc Pham
  */

export const SearchStylesContainer = styled.div`
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
    margin-top: 5px;
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

export const DownloadButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  .ant-btn {
    background: none;
    outline: none;
    border: none;
    color: white;
    padding: 0;
    &:hover {
      color: ${palette('darkGreen', 0)};
    }
  }
`;

export const SearchTableWrapper = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
  background-color: transparent;
  th {
    border: none;
    padding: 5px 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    height: 40px;
    color: #818189;
    background-color: transparent;
  }
  tr {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #5848f6;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
  td {
    padding: 5px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: auto !important;
  }

  tbody tr {
    height: 60px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: white;
    background-color: transparent;
  }
  thead > tr {
    background-color: transparent;
  }
`;

export const SearchCardWrapper = styled.div`
  width: 100%;
  .search-card-head {
    height: 60px;
    padding: 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: white !important;
    background-color: ${palette('darkGrayScale', 1)};
    margin-bottom: 5px;
    border-radius: 5px 5px 0px 0px;
    &:hover {
      a {
        color: ${palette('darkGreen', 0)} !important;
      }
    }
  }
  .search-card-body {
    user-select: none;
    background-color: ${palette('darkGrayScale', 1)};
    border-radius: 0px 0px 5px 5px;
    padding: 20px;
    min-height: 400px;
    height: ${(props) => props.height};
  }
  .search-card-footer {
    /* height: 60px; */
    background-color: ${palette('darkGrayScale', 1)};
    margin-bottom: 30px;
    padding: 10px 20px;
  }
`;

export const SearchAnswerTitle = styled.div`
  height: 60px;
  background: ${palette('darkGrayScale', 1)};
  border-left: 5px solid ${palette('darkGreen', 0)};
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-radius: 3px;
  color: white;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const SearchAnswerTableWrapper = styled.div`
  padding: 20px;
  border-radius: 5px;
  background: ${palette('darkGrayScale', 1)};
`;
export const SearchAnswerChartWrapper = styled.div`
  padding: 10px;
  height: 500px;
  border-radius: 5px;
  background: ${palette('darkGrayScale', 1)};
  margin-bottom: 8px;
`;
