import React from 'react';
import { SearchTableWrapper } from '../search_styles_container';

function SearchTable({ data }) {
  const headData = data[0];
  const bodyData = data.slice(1, data.length);
  return (
    <>
      <SearchTableWrapper>
        <thead>
          <tr>
            {headData.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyData.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </SearchTableWrapper>
    </>
  );
}

export default SearchTable;
