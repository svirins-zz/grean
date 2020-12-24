import logo from 'assets/svg/logo.svg';
import { Link } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';

export const SiteNavLogo = () => {
  return (
    <Link to="/">
      <img css={SiteNavLogoStyles} className="subscribe-overlay-logo" src={logo} alt="Addict.cf" />
    </Link>
  );
};

const SiteNavLogoStyles = css`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: 32px;
  padding: 12px 0;
  color: #fff;
  font-size: 1.7rem;
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