import React from 'react';
import { ClockCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { AutocompleteItemWrapper } from './search_styles_container';

function SearchAutoCompleteItem({ isHistory, itemData }) {
  return (
    <AutocompleteItemWrapper>
      {isHistory ? (
        <ClockCircleOutlined className="autocomplete-item-icon" />
      ) : (
        <SearchOutlined className="autocomplete-item-icon" />
      )}
      <div className={`autocomplete-item-text ${isHistory && 'history-item'}`}>{itemData}</div>
    </AutocompleteItemWrapper>
  );
}

export default SearchAutoCompleteItem;
