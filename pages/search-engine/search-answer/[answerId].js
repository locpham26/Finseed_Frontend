import React from 'react';
import SourceSelect from '../../../modules/search_engine/features/search/containers/search_source_select';
import SearchInputBar from '../../../modules/search_engine/features/search/containers/search_input_bar';
import SearchAnwser from '../../../modules/search_engine/features/search/containers/search_answer';
import { SearchStylesContainer } from '../../../modules/search_engine/features/search/components/search_styles_container';

function Answer(props) {
  return (
    <SearchStylesContainer>
      <SourceSelect />
      <SearchInputBar />
      <SearchAnwser />
    </SearchStylesContainer>
  );
}

export default Answer;
