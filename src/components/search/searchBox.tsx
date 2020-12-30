import { lighten } from 'polished';
import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { colors } from 'styles/colors';

import styled from '@emotion/styled';

const SearchBox = connectSearchBox(({ refine, currentRefinement, className, onFocus }) => (
  <form className={className}>
    <input
      className="SearchInput"
      type="text"
      placeholder="&nbsp; 🔎 Поиск по материалам Addict.cf"
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
    width: 65.4%;
    /* border: color(var(--lightgrey) l(+7%)) 1px solid; */
    border: ${lighten('0.07', colors.lightgrey)} 1px solid;
    /* color: var(--midgrey); */
    color: ${colors.darkgrey};
    padding-left: 1rem;
    font-size: 1.8rem;
    line-height: 1em;
    padding-top: 1rem;
    opacity: 0.7;
    padding-bottom: 1rem;
    font-weight: normal;
    user-select: text;
    border-radius: 5px;
    cursor: text;
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
`;
