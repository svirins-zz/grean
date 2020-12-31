import logo from 'assets/icons/abuse5.png';
import { Link } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SiteNavLogo = () => {
  return (
    <Link to="/">
      <Img src={logo} alt="Addicts.ws - блог об аддикции"/>
    </Link>
  );
};

const Img = styled.img`
  height: 5rem;
  width: 5rem;
  vertical-align: middle;
  margin-right: 24px;
`;

const SiteNavLogoStyles = css`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: 32px;
  padding: 12px 0;
  color: #36a6e2;
  font-size: 1.8rem;
  line-height: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: none;

  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 21px;
  }
`;

const Emoji = styled.span`
font-size: 2.3rem;
padding-right: 0.75rem;`;

// 〽️ 💮☯️✴️🤷🏻😵‍💫💊💉⛓
