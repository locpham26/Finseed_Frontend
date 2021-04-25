import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const sources = [
  { value: 'all', label: 'Tất cả nguồn' },
  { value: 'gso', label: 'GSO' },
  { value: 'world_bank', label: 'World Bank' }
];

function SourceSelect(props) {
  const [selectedSources, setSelectedSources] = useState(['all']);

  const handleChange = (value) => {
    setSelectedSources([...value]);
  };
  return (
    <Select
      mode="multiple"
      className="fs-search"
      allowClear={false}
      style={{ width: '100%' }}
      placeholder="Chọn nguồn"
      value={selectedSources}
      getPopupContainer={(trigger) => trigger.parentNode}
      onChange={handleChange}
    >
      {sources.map((source) => (
        <Option key={source.value} value={source.value}>
          {source.label}
        </Option>
      ))}
    </Select>
  );
}

export default SourceSelect;
