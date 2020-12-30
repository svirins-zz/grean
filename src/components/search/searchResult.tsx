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
import { colors } from 'styles/colors';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;
  return hitCount > 0 ? (
    <div className="HitCount">
      найдено {hitCount} совпаден{hitCount === 1 ? 'ие' : 'ий'}
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
    <Flex>
      <HitCount />
      <PoweredBy />
    </Flex>
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
);

const SearchResult = ({ indices, className, show }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex key={index.name} index={index} />
    ))}
    
  </div>
);
const Popover = css`
  max-height: 80vh;
  /* overflow: scroll; */
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  top: 100%;
  margin-top: 0.5em;
  width: 65.4%;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  border-radius: 2px;
  background: rgba(235, 235, 235, 0.95);
  @media (max-width: 990px) {
      /* border-color: color(var(--darkmode) l(+6%)); */
      width: 100%;
    }
`;

export default styled(SearchResult)`
  display: ${props => (props.show ? 'block' : 'none')};
  ${Popover}
  .HitCount {
    display: flex;
    width: 50%;
    color: #36a6e2;
    /* justify-content: flex-end; */
    font-size: 1.2rem;
    padding-left: 0.8rem;
  }
  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 0px;
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
    width: 50%;
    margin-right: 0.5rem;
    justify-content: flex-end;
    color:#36a6e2;
    font-size: 80%;
    svg {
      margin-left: 0.5rem;
      width: 70px;
    }
  }
`;

const Flex = styled.div`
  display: flex;
`;
