import { Facebook } from 'components/icons/facebook';
import { YouTube } from 'components/icons/youtube';
import { SubscribeModal } from 'components/subscribe';
import { myContext } from 'context';
import { Link } from 'gatsby';
import { darken } from 'polished';
import React, { useContext } from 'react';
import { colors } from 'styles/colors';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { SiteNavLogo } from './logo';

export const SiteNav = () => {
  const context = useContext(myContext);

  return (
    <>
      <SubscribeModal />
      <nav css={SiteNavStyles}>
        <SiteNavLeft className="site-nav-left">
          <SiteNavLogo />
          <SiteNavContent >
            <ul css={NavStyles} role="menu">
              {/* TODO: mark current nav item - add class nav-current */}
              <li role="menuitem">
                <Link to="/">Блог</Link>
              </li>
              <li role="menuitem">
                <Link to="/pages/about">О проекте</Link>
              </li>
              <li role="menuitem">
                <Link to="/pages/contact">Контакты</Link>
              </li>
            </ul>
          </SiteNavContent>
        </SiteNavLeft>
        <SiteNavRight>
          <SocialLinks>
            <Fb
              href="https://www.facebook.com/doktorGrin/"
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
              <Facebook />
            </Fb>
            <Yt
              href="https://www.youtube.com/channel/UCg83jkm7aM3OKTAWMoSpf2A"
              title="Youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube />
            </Yt>
          </SocialLinks>
          <SubscribeButton onClick={context.showModal}>Подписка</SubscribeButton>

        </SiteNavRight>
      </nav>
    </>
  );
};

const Fb = styled.a`
  display: inline-block;
  margin: 0;
  padding: 10px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  svg {
    height: 1.8rem;
    fill: #fff;
    :hover {
      fill: #1877f2;
  }
  }
`;
const Yt = styled.a`
  display: inline-block;
  margin: 0;
  padding: 10px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  svg {
    height: 2rem;
    fill: #fff;
    :hover {
      fill: #ff0505;
  }
  }`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const SiteNavMain = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  /* background: color(var(--darkgrey) l(-5%)) */
  background: ${darken('0.05', colors.darkgrey)};

  @media (max-width: 700px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 64px;
  font-size: 1.4rem;
  `;

const SiteNavLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding: 7px 0 80px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: none;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 5vw;
  }
`;

const SiteNavContent = styled.div`
  position: relative;
  align-self: flex-start;
`;

const NavStyles = css`
  position: absolute;
  z-index: 1000;
  display: flex;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;

  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);

  li {
    display: block;
    margin: 0;
    padding: 0;
  }

  li a {
    position: relative;
    display: block;
    padding: 12px 12px;
    color: #fff;
    opacity: 0.8;
    transition: opacity 0.35s ease-in-out;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }

  li a:before {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 12px;
    height: 1px;
    background: #36a6e2;
    opacity: 1;
    transition: all 0.35s ease-in-out;
  }

  li a:hover:before {
    right: 12px;
    opacity: 1;
  }
`;

const SiteNavRight = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
  height: 64px;
  @media (max-width: 700px) {
    padding-right: 24px;
  }
`;

const SubscribeButton = styled.a`
  display: block;
  padding: 4px 10px;
  margin: 0 0 0 10px;
  border: #fff 1px solid;
  color: #fff;
  line-height: 1em;
  border-radius: 10px;
  opacity: 0.8;
  font-size: 1.3rem;

  :hover {
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
    border: #36a6e2 1px solid;
    color: #36a6e2;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

