import logo from 'assets/svg/logo.svg';
import React from 'react';

import { css } from '@emotion/react';

export const SubscribeLogo = () => {
  return (
    <img
      css={SubscribeOverlayLogo}
      className="subscribe-overlay-logo"
      src={logo}
      alt="Addict.cf"
    />
  );
};

const SubscribeOverlayLogo = css`
  position: fixed;
  top: 23px;
  left: 30px;
  height: 30px;
`;
