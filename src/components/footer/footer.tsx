import { Link } from 'gatsby';
import { setLightness } from 'polished';
import React from 'react';
import { colors } from 'styles/colors';
import { inner, outer } from 'styles/shared';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

// TODO: IMPLEMENT FOOTER SOCIALS + MENU
export const Footer: React.FC = () => {
  return (
    <footer css={[outer, SiteFooter]}>
      <div css={[inner, SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">Copyright</Link> &copy; {new Date().getFullYear()}{' '}
          <Link to="/">| Addict.cf title</Link>
        </section>
        <SiteFooterNav>
          <Link to="/">Latest Posts</Link>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Svirins
          </a>
          <a href="/rss.xml">RSS</a>
        </SiteFooterNav>
      </div>
    </footer>
  );
};

const SiteFooter = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 60px;
  color: #fff;
  background: ${setLightness('0.0015', colors.darkgrey)};
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  a {
    color: rgba(255, 255, 255, 0.7);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const SiteFooterNav = styled.nav`
  display: flex;

  a {
    position: relative;
    margin-left: 20px;
  }

  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }

  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    a:first-of-type {
      margin-left: 0;
    }
  }
`;
