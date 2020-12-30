import React from 'react';

import styled from '@emotion/styled';

export const FeaturedIcon = () => {
  return (<Featured>Избранное</Featured>);
};

const Featured = styled.span`
  background-color: #ff0b00d9;
  color: white;
  font-size: 1.15rem;
  padding: 0 0.4rem;
  float: right;
  border-radius: 0.4rem;
  line-height: 2rem;
`;
