import React from 'react';
import Link from 'next/link';
import { SearchCardWrapper } from './search_styles_container';

function SearchDataCard({ cardHead, cardBody, searchId }) {
  return (
    <SearchCardWrapper>
      <div className="search-card-head">
        <Link href={`/search-engine/${searchId}`}>{cardHead}</Link>
      </div>
      <div className="search-card-body">{cardBody}</div>
    </SearchCardWrapper>
  );
}

export default SearchDataCard;
