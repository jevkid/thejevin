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
import { motion } from 'framer-motion';

interface StyledBurgerMenuProps {
  open?: boolean;
  hidden?: boolean;
}

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${APP_PADDING};
  @media (max-width: 812px) {
    padding: 0 20px;
  }
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

const StyledDesktopNav = styled.div`
  display: flex;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: calc(1210px + (${APP_PADDING} * 3));
  @media (max-width: 812px) {
    display: none;
  }
`;

const StyledMobileNav = styled.div`
  display: flex;
  top: 0;
  position: absolute;
  right: 0;
  @media (min-width: 811px) {
    display: none;
  }
`;

const StyledBurgerMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const StyledMobileMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  overflow: overlay;
  z-index: 100;
  background-color: white;
  transform-origin: 0% 0%;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const StyledMobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const StyledMobileNavLink = styled.a`
  font-size: 24px;
  color: ${COLORS.navy};
  text-decoration: none;
  padding: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledBurgerMenu = styled.button<StyledBurgerMenuProps>`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10000;

  &:focus {
    outline: none;
  }
`;

const StyledBurgerLines = styled.div<StyledBurgerMenuProps>`
  width: 30px;
  height: 3px;
  background: ${COLORS.navy};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  &:first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &:nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
  }

  &:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

export const App: React.FC = () => {
  const [navigationMenuOpen, openNavigationMenu] = React.useState(false);
  return (
    <BrowserRouter>
      <StyledAppContainer>
        {/* Desktop Nav */}
        <StyledDesktopNav>
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
        </StyledDesktopNav>
        {/* Mobile Nav */}
        <StyledMobileNav>
          <StyledBurgerMenuContainer>
            <StyledBurgerMenu
              id="burger-menu-toggle"
              onClick={() => openNavigationMenu(!navigationMenuOpen)}
            >
              <StyledBurgerLines open={navigationMenuOpen} />
              <StyledBurgerLines open={navigationMenuOpen} />
              <StyledBurgerLines open={navigationMenuOpen} />
            </StyledBurgerMenu>
          </StyledBurgerMenuContainer>
          {navigationMenuOpen && (
            <StyledMobileMenu
              id="mobile-navigation-menu"
              initial={{
                borderRadius: '100%',
                clipPath: 'circle(50% at 50% 50%)',
                height: '0%',
                width: '0%',
              }}
              animate={{
                borderRadius: '0%',
                clipPath: 'none',
                height: '100%',
                width: '100%',
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
              }}
              transition={{
                duration: 0.425,
              }}
            >
              <motion.div
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
              >
                <StyledMobileMenuLinks>
                  <StyledMobileNavLink href="/">Home</StyledMobileNavLink>
                  <StyledMobileNavLink href="/about">About</StyledMobileNavLink>
                  <StyledMobileNavLink href="/portfolio">
                    Portfolio
                  </StyledMobileNavLink>
                  <StyledMobileNavLink href="/contact">
                    Contact
                  </StyledMobileNavLink>
                </StyledMobileMenuLinks>
              </motion.div>
            </StyledMobileMenu>
          )}
        </StyledMobileNav>
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
