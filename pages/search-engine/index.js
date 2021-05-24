import React from 'react';
import ThePageHeader from '@core/ThePageHeader';
import { CaretRightOutlined } from '@ant-design/icons';
import SourceSelect from '../../modules/search_engine/features/search/containers/search_source_select';
import SearchInputBar from '../../modules/search_engine/features/search/containers/search_input_bar';
import SearchFeed from '../../modules/search_engine/features/search/containers/search_feed';
import { SearchStylesContainer } from '../../modules/search_engine/features/search/components/search_styles_container';
import { StyledDesc } from '../../modules/scan_pdf/features/file_upload/components/file_upload_styles';

function index(props) {
  return (
    <SearchStylesContainer>
      <ThePageHeader
        title="Search Engine"
        desc={
          <StyledDesc>
            <p className="desc-title">Search Engine là gì?</p>
            <p className="desc-text">
              <CaretRightOutlined />
              Công cụ tìm kiếm dữ liệu tài chính bao gồm dữ liệu vĩ mô, ngành, doanh nghiệp và thị trường.
            </p>
            <p className="desc-text">
              <CaretRightOutlined />
              Dữ liệu được tổng hợp đa dạng từ nhiều nguồn thông tin, có độ chính xác cao, cập nhật liên tục, được xử lí
              thành các dạng trực quan như biểu đồ, chỉ số.
            </p>
          </StyledDesc>
        }
      />
      <SourceSelect />
      <SearchInputBar />
      <SearchFeed />
    </SearchStylesContainer>
  );
}

export default index;
