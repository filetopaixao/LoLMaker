import React from 'react';

import * as S from './styled';

const Filter = (props) => (
  <S.ContentInput id="filter_container">
    <S.FilterInput
      id="search"
      name="search"
      type="text"
      placeholder={props.placeholder}
      value={props.filterText}
      onChange={props.onChange}
    />
  </S.ContentInput>
);

export default Filter;
