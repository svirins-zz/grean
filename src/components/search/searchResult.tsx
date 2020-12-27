import { Link } from 'gatsby';
import { default as React } from 'react';
import {
  Highlight,
  Hits,
  Index,
  PoweredBy,
  Snippet,
  connectStateResults,
} from 'react-instantsearch-dom';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults ?? 0;
  return hitCount > 0 ? (
    <div className="HitCount">
      `${hitCount} result${hitCount === 1 ? '' : 's'}`
    </div>
  ) : null;
});

const PageHit = ({ hit }) => (
  <div>
    <Link to={hit.slug}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
);

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
);
const Popover = css`
  max-height: 80vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  margin-top: 0.5em;
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  border-radius: 2px;
  background: white;
`;

export default styled(SearchResult)`
  display: ${props => (props.show ? `block` : `none`)};
  ${Popover}
  .HitCount {
    display: flex;
    justify-content: flex-end;
  }
  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
    }
    li.ais-Hits-item {
      margin-bottom: 1em;
      a {
        color: #050505;
        h4 {
          margin-bottom: 0.2em;
        }
      }
    }
  }
  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;
    svg {
      width: 70px;
    }
  }
`;

