import React from 'react';
import { Row, Col } from 'antd';
import SearchDataCard from '../components/search_data_card';
import { searchDataList } from '../components/search_mock_data';
import SearchColumnChart from '../components/data_display/search_column_chart';
import SearchTable from '../components/data_display/search_table';

const searchFirstData = searchDataList[2];

function SearchFeed(props) {
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
          cardBody={<SearchColumnChart data={searchFirstData.answer.data} />}
        />
      </Col>
    </Row>
  );
}

export default SearchFeed;
