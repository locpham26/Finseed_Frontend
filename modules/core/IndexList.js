import React from 'react';
import styled from 'styled-components';
import IndexListItem from './IndexListItem';

const StyledIndexList = styled.div`
   display: flex;
   align-items: center;
`;

function IndexList() {
   const indexData = [
      { name: 'VN-INDEX', value: '1,111.29', status: 'up', change: '3.32%' },
      { name: 'VN30-INDEX', value: '1,117.98', status: 'up', change: '3.55%' },
      { name: 'VNX-AllShare', value: '1,694.71', status: 'up', change: '3.46%' },
      { name: 'HNX-INDEX', value: '223.62', status: 'up', change: '3.84%' },
      { name: 'HN30-INDEX', value: '329.40', status: 'up', change: '3.32%' },
      { name: 'UPCOM', value: '73.30', status: 'down', change: '2.29%' }
   ];
   return (
      <StyledIndexList>
         {indexData.map((index) => (
            <IndexListItem
               key={index.name}
               indexName={index.name}
               indexValue={index.value}
               indexStatus={index.status}
               indexChange={index.change}
            />
         ))}
      </StyledIndexList>
   );
}

export default IndexList;
