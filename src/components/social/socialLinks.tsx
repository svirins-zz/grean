import { Facebook, Skype, Telegram, Viber, YouTube } from 'components/social';
import { SOCIALS } from 'const';
import React from 'react';
import { SocialLink, SocialLinkFb } from 'styles/shared';

import styled from '@emotion/styled';

// TODI implement icons and colors
export const SocialLinks: React.FC = () => {
  const linksDisplay = SOCIALS.map((social, index) => {
    if (social.showInHeader) {
      return (
        <a
          key={index}
          className="social-link-fb"
          css={[SocialLink, SocialLinkFb]}
          href={social.link}
          target="_blank"
          title={social.name}
          rel="noopener noreferrer"
        >
          <Facebook />
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
