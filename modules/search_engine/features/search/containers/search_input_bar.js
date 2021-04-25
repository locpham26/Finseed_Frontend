import React, { useState } from 'react';
import { AutoComplete, Tooltip, Input } from 'antd';
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import SearchAutoCompleteItem from '../components/search_autocomplete_item';

const historyList = [
  { key: 'h1', value: 'GDP Viet Nam nam 2020' },
  { key: 'h2', value: 'Tang truong cac nganh cong nghiep' }
];

const suggestionList = [
  { key: 's1', value: 'GDP Viet Nam qua cac nam' },
  { key: 's2', value: 'Tang truong GDP' }
];

const options = historyList
  .map((historyItem) => ({
    label: <SearchAutoCompleteItem isHistory itemData={historyItem.value} />,
    value: historyItem.value
  }))
  .concat(
    suggestionList.map((suggestionItem) => ({
      label: <SearchAutoCompleteItem isHistory={false} itemData={suggestionItem.value} />,
      value: suggestionItem.value
    }))
  );

function SearchInputBar(props) {
  return (
    <AutoComplete
      // value={input}
      // onSearch={handleAutoComplete}
      // onKeyPress={handleEnterSearch}
      // onSelect={handleSelect}
      // onFocus={() => setShowSource(true)}
      options={options}
      getPopupContainer={(trigger) => trigger.parentNode}
    >
      <Input
        placeholder="Tìm kiếm thông tin kinh tế vĩ mô, ngành, doanh nghiệp,..."
        prefix={
          <SearchOutlined
            style={{
              fontSize: '20px'
            }}
          />
        }
        suffix={
          <Tooltip color="white" placement="left" title="Yo">
            <InfoCircleOutlined
              style={{
                color: '#818189',
                cursor: 'pointer'
              }}
            />
          </Tooltip>
        }
      />
    </AutoComplete>
  );
}

export default SearchInputBar;
