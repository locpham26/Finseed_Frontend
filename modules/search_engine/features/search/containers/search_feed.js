import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import SearchDataCard from '../components/search_data_card';
import { searchDataList } from '../components/search_mock_data';
import SearchTable from '../components/data_display/search_table';
import MyResponsiveLine from '../components/data_display/search_nivo_line_chart';
import MyResponsiveBar from '../components/data_display/search_nivo_column_chart';
import MyResponsivePie from '../components/data_display/search_nivo_pie_chart';
import { getLineData } from '../../../../util/getLineData';

const searchFirstData = searchDataList[1];

function SearchFeed(props) {
  const lineData = getLineData(searchFirstData.answer.data.slice(1, searchFirstData.answer.data.length), 'GSO');
  useEffect(() => {
    console.log(lineData);
  });
  return (
    <Row gutter={32} style={{ marginBottom: '25px', marginTop: '25px' }}>
      <Col span={16}>
        <SearchDataCard
          searchId={searchFirstData.id}
          cardHead={searchFirstData.question}
          cardBody={<SearchTable data={searchFirstData.answer.data} />}
        />
        <SearchDataCard
          searchId={searchFirstData.id}
          cardHead={searchFirstData.question}
          cardBody={<MyResponsiveBar data={lineData} />}
        />
        <SearchDataCard
          searchId={searchFirstData.id}
          cardHead={searchFirstData.question}
          cardBody={<MyResponsiveLine data={lineData} />}
        />
        <SearchDataCard
          searchId={searchFirstData.id}
          cardHead={searchFirstData.question}
          cardBody={<MyResponsivePie />}
        />
      </Col>
    </Row>
  );
}

export default SearchFeed;
