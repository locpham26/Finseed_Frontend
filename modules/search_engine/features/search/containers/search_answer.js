import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
import {
  SearchAnswerTitle,
  SearchAnswerTableWrapper,
  SearchAnswerChartWrapper
} from '../components/search_styles_container';
import { searchDataList } from '../components/search_mock_data';
import SearchTable from '../components/data_display/search_table';
import MyResponsiveBar from '../components/data_display/search_nivo_column_chart';
import MyResponsiveLine from '../components/data_display/search_nivo_line_chart';

function SearchAnwser(props) {
  const router = useRouter();
  const { answerId } = router.query;
  const answer = searchDataList.find((data) => data.id === parseInt(answerId));
  return (
    <>
      {answer && (
        <div>
          <SearchAnswerTitle>
            <div>{answer.question}</div>
          </SearchAnswerTitle>
          <Row gutter={24}>
            <Col span={12}>
              <SearchAnswerTableWrapper>
                <SearchTable data={answer.answer.data} />
              </SearchAnswerTableWrapper>
            </Col>
            <Col span={12}>
              <SearchAnswerChartWrapper>
                <MyResponsiveLine data={answer.answer.data.slice(1, answer.answer.data.length)} />
              </SearchAnswerChartWrapper>
              <SearchAnswerChartWrapper>
                <MyResponsiveBar data={answer.answer.data.slice(1, answer.answer.data.length)} />
              </SearchAnswerChartWrapper>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default SearchAnwser;
