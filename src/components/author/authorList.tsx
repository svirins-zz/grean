import React from 'react';

import styled from '@emotion/styled';
import { AuthorListProps } from '@types';

import { AuthorListItem } from './authorListItem';

export const AuthorList: React.FC<AuthorListProps> = props => (
  <AuthorListUl className="author-list">
    {props.authors.map(author => (
      <AuthorListItem key={author.name} author={author} tooltip={props.tooltip} />
    ))}
  </AuthorListUl>
);

export const AuthorListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 4px;
  padding: 0;
  list-style: none;
`;
