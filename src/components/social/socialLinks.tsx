import { SOCIALS } from 'const';
import React from 'react';
import { SocialLink } from 'styles/shared';

import styled from '@emotion/styled';

// TODI implement icons and colors
export const SocialLinks: React.FC = () => {
  const linksDisplay = SOCIALS.map(social => {
    if (social.showInHeader) {
      return (
        <a
          key={social.name}
          css={[SocialLink]}
          href={social.link}
          target="_blank"
          title={social.name}
          rel="noopener noreferrer"
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            title={social.name}
            style={{ fill: social.color }}
          >
            <path d={social.svgPath} />
          </svg>
        </a>
      );
    }

    return null;
  });
  return (
    <LinksContainer>
      {linksDisplay}
    </LinksContainer>
  );
};

const LinksContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;
