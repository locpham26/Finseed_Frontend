import React from 'react';
import { Row, Col } from 'antd';
import SearchDataCard from '../components/search_data_card';
import { searchDataList } from '../components/search_mock_data';
import SearchTable from '../components/data_display/search_table';
import MyResponsiveLine from '../components/data_display/search_nivo_line_chart';
import MyResponsiveBar from '../components/data_display/search_nivo_column_chart';
import MyResponsivePie from '../components/data_display/search_nivo_pie_chart';

const [first, second, third, fourth, fifth] = searchDataList;

const firstData = first.answer.data.slice(1, first.answer.data.length);
const secondData = second.answer.data.slice(1, second.answer.data.length);
const thirdData = third.answer.data.slice(1, third.answer.data.length);
const fourthData = fourth.answer.data.slice(1, fourth.answer.data.length);
const fifthData = fifth.answer.data.slice(1, fifth.answer.data.length);

function SearchFeed(props) {
  return (
    <Row gutter={24} style={{ marginBottom: '24px', marginTop: '24px' }}>
      <Col span={15}>
        <SearchDataCard
          height="600px"
          searchId={fifth.id}
          cardHead={fifth.question}
          cardBody={<MyResponsiveLine data={fifthData} />}
        />
        <SearchDataCard
          height="auto"
          searchId={first.id}
          cardHead={first.question}
          cardBody={<SearchTable data={first.answer.data} />}
        />
      </Col>
      <Col span={9}>
        <SearchDataCard
          height="400px"
          searchId={first.id}
          cardHead={first.question}
          cardBody={<MyResponsiveBar data={firstData} />}
        />
        <SearchDataCard
          height="400px"
          searchId={fourth.id}
          cardHead={fourth.question}
          cardBody={<MyResponsivePie data={fourthData} />}
        />
      </Col>
    </Row>
  );
}

export default SearchFeed;
