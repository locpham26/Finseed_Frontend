import React from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

function ThePageHeader({ title, desc }) {
  return (
    <PageHeaderStyles>
      <h1>{title}</h1>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center'
        }}
      >
        <Tooltip color="white" placement="right" title={desc}>
          <InfoCircleOutlined
            style={{
              color: '#818189',
              cursor: 'pointer'
            }}
          />
        </Tooltip>
      </span>
    </PageHeaderStyles>
  );
}

export default ThePageHeader;

const PageHeaderStyles = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(42, 242, 112, 0.2);
  h1 {
    display: inline-block;
    margin-bottom: 0;
    margin-right: 15px;
    font-size: 30px;
    font-weight: normal;
    text-align: left;
    color: white;
  }
`;
