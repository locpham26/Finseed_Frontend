import React from 'react';
import { Row, Col } from 'antd';
import SearchDataCard from '../components/search_data_card';
import { searchDataList } from '../components/search_mock_data';
import SearchTable from '../components/data_display/search_table';
import MyResponsiveLine from '../components/data_display/search_nivo_line_chart';
import MyResponsiveBar from '../components/data_display/search_nivo_column_chart';
import MyResponsivePie from '../components/data_display/search_nivo_pie_chart';
// import { getLineData, getColumnData, getPieData, getDataSources } from '../../../../util/getChartData';

const searchFirstData = searchDataList[1];
const data = searchFirstData.answer.data.slice(1, searchFirstData.answer.data.length);

function SearchFeed(props) {
  return (
    <Row gutter={32} style={{ marginBottom: '25px', marginTop: '25px' }}>
      <Col span={16}>
        <SearchDataCard
          height="400px"
          searchId={searchFirstData.id}
          cardHead={searchFirstData.question}
          cardBody={<MyResponsiveLine data={data} />}
        />
        <SearchDataCard
          height="auto"
          searchId={searchFirstData.id}
          cardHead={searchFirstData.question}
          cardBody={<SearchTable data={searchFirstData.answer.data} />}
        />
      </Col>
      <Col span={8}>
        <SearchDataCard
          height="400px"
          searchId={searchFirstData.id}
          cardHead={searchFirstData.question}
          cardBody={<MyResponsiveBar data={data} />}
        />
        <SearchDataCard
          height="400px"
          searchId={searchFirstData.id}
          cardHead={searchFirstData.question}
          cardBody={<MyResponsivePie data={data} />}
        />
      </Col>
    </Row>
  );
}

export default SearchFeed;
