import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { APP_PADDING, COLORS, COMMON, FONTS } from './constants';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Portfolio } from './pages/portfolio';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Contact } from './pages/contact';

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${APP_PADDING};
`;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: calc(1210px + (${APP_PADDING} * 3));
  top: 0;
`;

const StyledNavLogoContainer = styled.div``;
const StyledNavLogo = styled.h1`
  font-family: ${FONTS.vazirmatn};
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  margin: 0;
`;

const StyledNavLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledNavLink = styled(Link)`
  font-size: 14px;
  color: ${COLORS.navy};
  text-decoration: none;
  padding: 0 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyledAppContainer>
        <StyledNavigation>
          <StyledNavLogoContainer>
            <StyledNavLink to="/">
              <StyledNavLogo>
                <FontAwesomeIcon icon={faCode} color={COMMON.primary} />
              </StyledNavLogo>
            </StyledNavLink>
          </StyledNavLogoContainer>
          <StyledNavLinksContainer>
            <StyledNavLink to="/about">About</StyledNavLink>
            <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
          </StyledNavLinksContainer>
        </StyledNavigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </StyledAppContainer>
    </BrowserRouter>
  );
};
