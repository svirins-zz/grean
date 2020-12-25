import siteImage from 'assets/img/hero.jpg';
import { Footer } from 'components/footer';
import { SiteNav } from 'components/header';
import { Seo, Wrapper } from 'components/layout';
import { PostFullContent } from 'components/post';
import { IndexLayout } from 'layouts';
import React from 'react';
import { colors } from 'styles/colors';
import { SiteArchiveHeader, SiteHeader, SiteMain, SiteNavMain, inner, outer } from 'styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from 'templates/post';

import { css } from '@emotion/react';

const About: React.FC = () => (
  <IndexLayout>
    <Seo
      seoDescription="About Page"
      seoTitle="Who we are"
      imageSrc={siteImage}
    />
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav title="About page" />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>
                  In nunc lacus, dapibus vitae lacus sit amet, efficitur iaculis neque. Suspendisse
                  ut tellus quis leo vestibulum tincidunt. Aenean nec enim ac dolor lacinia semper.
                  Ut sed laoreet libero. Nunc elementum sollicitudin accumsan. Nunc eu augue neque.
                  Proin a tortor nibh. Cras eu nisl ornare sapien feugiat pellentesque. Mauris
                  dignissim vel quam eu pellentesque. Integer sit amet posuere quam, eu ullamcorper
                  odio. Nullam a lacus tempus sapien dignissim ullamcorper. In hac habitasse platea
                  dictumst. Proin quis massa aliquam, feugiat tortor sit amet, tincidunt urna. Donec
                  posuere pulvinar lectus, ac semper ipsum vulputate quis.
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;
