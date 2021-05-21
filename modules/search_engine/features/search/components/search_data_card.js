import React from 'react';
import Link from 'next/link';
import { SearchCardWrapper } from './search_styles_container';

function SearchDataCard({ cardHead, cardBody, searchId, height }) {
  return (
    <SearchCardWrapper height={height}>
      <div className="search-card-head">
        <Link href={`/search-engine/search-answer/${searchId}`}>{cardHead}</Link>
      </div>
      <div className="search-card-body">{cardBody}</div>
    </SearchCardWrapper>
  );
}

export default SearchDataCard;
