import algoliasearch from 'algoliasearch/lite';
import { searchIndices } from 'const';
import { default as React, createRef, useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';

import { ThemeProvider, css } from '@emotion/react';

import SearchBox from './searchBox';
import SearchResult from './searchResult';
import { useClickOutside } from './useClickOutside';

const theme = {
  foreground: '#050505',
  background: 'white',
  faded: '#888',
};

export const Search = () => {
  const rootRef = createRef();
  const [query, setQuery] = useState<string>('');
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID ?? '',
    process.env.ALGOLIA_SEARCH_KEY ?? '',
  );

  useClickOutside(rootRef, () => setFocus(false));
  return (
    <ThemeProvider theme={theme}>
      <div ref={rootRef} css={[SearchRootStyles]}>
        <InstantSearch
          searchClient={searchClient}
          indexName={searchIndices[0].name}
          onSearchStateChange={({ query }: {query: string}) => setQuery(query)}
        >
          <SearchBox
            hasFocus={hasFocus}
            onFocus={() => setFocus(true)}
          />
          <SearchResult
            show={query && query.length > 0 && hasFocus}
            indices={searchIndices}
          />
        </InstantSearch>
      </div>
    </ThemeProvider>
  );
};

const SearchRootStyles = css`
  position: relative;
  margin: 0.6em 0;
`;
