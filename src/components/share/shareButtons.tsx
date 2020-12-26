import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  VKIcon,
  VKShareButton,
} from 'react-share';

import { ShareButtonsProps } from '@types';

export const ShareButtons = ({ title, url, twitterHandle, tags }: ShareButtonsProps) => {
  return (
    <div>
      <FacebookShareButton url={url}>
        <FacebookIcon round size={40} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
        <TwitterIcon round size={40} />
      </TwitterShareButton>

      <VKShareButton url={url} title={title}>
        <VKIcon round size={40} />
      </VKShareButton>
    </div>
  );
};
