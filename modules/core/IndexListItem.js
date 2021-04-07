import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import SeparatorIcon from 'images/separator.svg';
import { StyledIndexItem, StyledIndexName, StyledIndexValue, StyledIndexChange } from './BaseComponents.styles';

function IndexListItem({ indexName, indexValue, indexStatus, indexChange }) {
   return (
      <>
         <StyledIndexItem status={indexStatus}>
            <div className="dp-space-bw">
               <StyledIndexName>{indexName}</StyledIndexName>
               <StyledIndexValue className="indexValue">{indexValue}</StyledIndexValue>
            </div>
            <div>
               <span>{indexStatus === 'up' ? <UpOutlined className="up" /> : <DownOutlined className="down" />}</span>
               <StyledIndexChange status={indexStatus}>{indexChange}</StyledIndexChange>
            </div>
         </StyledIndexItem>
         <img src={SeparatorIcon} />
      </>
   );
}

export default IndexListItem;
