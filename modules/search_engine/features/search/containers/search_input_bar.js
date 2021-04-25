import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';
// import { ReactComponent as SearchIcon } from '../../assets/images/search.svg';
// import { ReactComponent as ClockIcon } from '../../assets/images/clock.svg';
import { AutoComplete, Tooltip, Input } from 'antd';
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';

const historyItem = <div>Yooooo</div>;

const options = [
  { label: historyItem, value: '2' },
  { label: historyItem, value: '1' }
];

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
