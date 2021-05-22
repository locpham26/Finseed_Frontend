import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { SearchCardWrapper, DownloadButtonWrapper } from './search_styles_container';

function SearchDataCard({ cardHead, cardBody, searchId, height }) {
  return (
    <SearchCardWrapper height={height}>
      <div className="search-card-head">
        <Link href={`/search-engine/search-answer/${searchId}`}>{cardHead}</Link>
      </div>
      <div className="search-card-body">{cardBody}</div>
      <div className="search-card-footer">
        <DownloadButtonWrapper>
          <Button icon={<DownloadOutlined style={{ fontSize: '18px' }} />}>Tải dữ liệu</Button>
        </DownloadButtonWrapper>
      </div>
    </SearchCardWrapper>
  );
}

export default SearchDataCard;
