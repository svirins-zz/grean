import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  VKIcon,
  VKShareButton,
} from 'react-share';

import styled from '@emotion/styled';
import { ShareButtonsProps } from '@types';

export const ShareButtons = ({ title, url, twitterHandle, tags }: ShareButtonsProps) => {
  const url_= url;
  return (
    <Wrapper>
      {/* <Title>Поделиться: </Title>
      {' '} */}
      <Button>
        <FacebookShareButton url={url_}>
          <FacebookIcon round size={35} />
        </FacebookShareButton>
      </Button>
      <Button>
        <TwitterShareButton url={url_} title={title} via={twitterHandle} hashtags={tags}>
          <TwitterIcon round size={35} />
        </TwitterShareButton>
      </Button>
      <Button>
        <VKShareButton url={url_} title={title}>
          <VKIcon round size={35} />
        </VKShareButton>
      </Button>
    </Wrapper>
  );
};

const Button = styled.span`
  :hover {
    opacity: 0.9
  }
  margin: 0 .15rem;
`;

const Wrapper = styled.div`
  /* @media (min-width: 1200px) {
    position: relative;
    top: -200px;
    left: 2rem;;
  } */
  text-align: right;
`;

