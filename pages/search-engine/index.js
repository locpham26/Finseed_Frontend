import React from 'react';
import SourceSelect from '../../modules/search_engine/features/search/containers/search_source_select';
import SearchInputBar from '../../modules/search_engine/features/search/containers/search_input_bar';
import SearchFeed from '../../modules/search_engine/features/search/containers/search_feed';
import { SearchStylesContainer } from '../../modules/search_engine/features/search/components/search_styles_container';

function index(props) {
  return (
    <SearchStylesContainer>
      <SourceSelect />
      <SearchInputBar />
      <SearchFeed />
    </SearchStylesContainer>
  );
}

export default index;
