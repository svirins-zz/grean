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
  return (
    <Wrapper>
      {/* <Title>Поделиться: </Title>
      {' '} */}
      <Button>
        <FacebookShareButton url={url}>
          <FacebookIcon round size={35} />
        </FacebookShareButton>
      </Button>
      <Button>
        <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
          <TwitterIcon round size={35} />
        </TwitterShareButton>
      </Button>
      <Button>
        <VKShareButton url={url} title={title}>
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
const Title = styled.span`
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
  
`;