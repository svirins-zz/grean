import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';
import { SiteNavLogoProps } from '@types';

export const SubscribeLogo = () => (
  <StaticQuery
    query={graphql`
      query SubscribeOverlayLogo {
        logo: file(relativePath: { eq: "img/hero.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(quality: 100 width: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data: SiteNavLogoProps) => {
      if (!data.logo) {
        return;
      }

      return (
        <img
          css={SubscribeOverlayLogo}
          className="subscribe-overlay-logo"
          src={data.logo.childImageSharp.fixed.src}
          alt="Addict.cf"
        />
      );
    }}
  />
);

const SubscribeOverlayLogo = css`
  position: fixed;
  top: 23px;
  left: 30px;
  height: 30px;
`;

export default SubscribeLogo;
