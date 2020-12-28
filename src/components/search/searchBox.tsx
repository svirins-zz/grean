import { lighten, saturate } from 'polished';
import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { colors } from 'styles/colors';

import styled from '@emotion/styled';

const searchSvg = (
  <path
    fillRule="evenodd"
    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    clipRule="evenodd"
  />
);

const SearchBox = connectSearchBox(({ refine, currentRefinement, className, onFocus }) => (
  <form className={className}>
    <svg
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className="SearchIcon"
    >
      {searchSvg}
    </svg>
    <input
      className="SearchInput"
      type="text"
      placeholder="Поиск по материалам Addict.cf"
      aria-label="Search"
      value={currentRefinement}
      onFocus={onFocus}
      onChange={e => refine(e.target.value)}
    />
  </form>
));

export default styled(SearchBox)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
  .SearchInput {
    width: 66%;
    /* border: color(var(--lightgrey) l(+7%)) 1px solid; */
    border: ${lighten('0.07', colors.lightgrey)} 1px solid;
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    font-size: 1.8rem;
    line-height: 1em;
    padding-top: 1rem;
    opacity: 0.7;
    padding-bottom: 1rem;
    font-weight: normal;
    user-select: text;
    border-radius: 5px;
    transition: border-color 0.15s linear;

    -webkit-appearance: none;
    :focus {
      outline: 0;
      opacity: 0.9;
      /* border-color: color(var(--lightgrey) l(-2%)); */
      border-color: ${lighten('-0.02', colors.lightgrey)};
    }

    @media (max-width: 990px) {
      /* border-color: color(var(--darkmode) l(+6%)); */
      width: 100%;
    }
  }
  .SearchIcon {
    width: 1.3em;
    margin: 0.3em;
    color: ${({ theme }) => theme.foreground};
    pointer-events: none;
  }
`;

// outline: none;
// border: auto;
// font-size: 1.3em;
// transition: 100ms;
// border-radius: 1px;
// color: ${({ theme }) => theme.foreground};
// ::placeholder {
//   color: ${({ theme }) => theme.faded};
// }
// width: 100%;
// background: rgba(255, 255, 255, 0.8);
// cursor: text;

// padding-top: 1rem;
// padding-bottom: 1rem;
