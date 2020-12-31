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
          Copyright &copy; {new Date().getFullYear()}{' '}
          <Link to="/">| Addicts.ws. Блог об аддикции.</Link>
        </section>
        <SiteFooterNav>
          <Link to="/pages/about">О проекте</Link>
          <Link to="/pages/contact">Контакты</Link>
          <a href="https://www.facebook.com/doktorGrin/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.youtube.com/channel/UCg83jkm7aM3OKTAWMoSpf2A" target="_blank" rel="noopener noreferrer">
            Youtube
          </a>
          <a href="/rss.xml">RSS</a>
        </SiteFooterNav>
      </div>
      <Section>
        <Span>
          <span role="img" aria-labelledby="mixed">
            👾
          </span>
          {' '}Made{' '}by{' '}
          <Svirins href="https://twitter.com/svirins">@Svirins</Svirins>
        </Span>
      </Section>
    </footer>
  );
};

const Section = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const Span = styled.span`
  font-size: 1.25rem;
  color: #6d6d6b;
  text-align: center;
`;

const SiteFooter = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
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

const Svirins = styled.a`
  font-size: 1.25rem;
  color: #c0c0c0;
  :hover {
    color: #ec3ffc;
    text-decoration: underline;
  }
`;
