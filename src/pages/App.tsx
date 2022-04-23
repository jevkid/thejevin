import * as React from 'react';
import styled from 'styled-components/macro';
import { DESKTOP_PADDING, COLORS, FONTS, BORDER_RADIUS } from '../constants';
import { Home } from './home';
import { navigation } from '../api/data';
import { motion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { About } from './about';
import { Portfolio } from './portfolio';
import { Contact } from './contact';
import { shiny } from './styles';

interface StyledBurgerMenuProps {
  open?: boolean;
  hidden?: boolean;
}
const StyledDesktopNav = styled.div`
  display: flex;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 812px) {
    display: none;
  }
`;

const StyledNavLogoContainer = styled.div`
  width: 38px;
  height: 30px;
  padding: 4px;
  border: 2px solid ${COLORS.black};
  border-radius: ${BORDER_RADIUS};
  position: relative;
  margin: 16px ${DESKTOP_PADDING};
  background: ${COLORS.white};
  color: ${COLORS.black};
  ${shiny};
`;

const StyledNavLogoLink = styled.a`
  font-family: ${FONTS.questrial};
  font-size: 24px;
  color: ${COLORS.black};
  font-weight: 700;
  text-decoration: none;
`;

const StyledNavLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 16px ${DESKTOP_PADDING};
`;

const StyledNavLink = styled.a`
  font-family: ${FONTS.questrial};
  font-size: 24px;
  color: ${COLORS.black};
  font-weight: 700;
  text-decoration: none;
  padding: 0 12px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledMobileNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  top: 0;
  position: absolute;
  right: 0;
  @media (min-width: 812px) {
    display: none;
  }
`;

const StyledLogo = styled.h3`
  margin: 0;
  padding: 0;
  position: absolute;
`;

const StyledBurgerMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 36px;
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

const StyledMobileNavLink = styled.button`
  appearance: none;
  border: 0;
  box-shadow: none;
  background: transparent;
  font-size: 24px;
  color: ${COLORS.black};
  text-decoration: none;
  padding: 12px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
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
  background: ${COLORS.black};
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
  const homeRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const portfolioRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    openNavigationMenu(false);
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <>
        {/* Desktop Nav */}
        <StyledDesktopNav>
          <StyledNavLogoContainer>
            <StyledNavLogoLink onClick={() => scrollTo(homeRef)}>
              <StyledLogo>{navigation.logo}</StyledLogo>
            </StyledNavLogoLink>
          </StyledNavLogoContainer>
          <StyledNavLinksContainer>
            <StyledNavLink onClick={() => scrollTo(aboutRef)}>
              {navigation.about}
            </StyledNavLink>
            <StyledNavLink onClick={() => scrollTo(portfolioRef)}>
              {navigation.portfolio}
            </StyledNavLink>
            <StyledNavLink onClick={() => scrollTo(contactRef)}>
              {navigation.contact}
            </StyledNavLink>
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
                  <StyledNavLogoContainer>
                    <StyledNavLogoLink onClick={() => scrollTo(homeRef)}>
                      <StyledLogo>{navigation.logo}</StyledLogo>
                    </StyledNavLogoLink>
                  </StyledNavLogoContainer>
                  <StyledMobileNavLink onClick={() => scrollTo(aboutRef)}>
                    {navigation.about}
                  </StyledMobileNavLink>
                  <StyledMobileNavLink onClick={() => scrollTo(portfolioRef)}>
                    {navigation.portfolio}
                  </StyledMobileNavLink>
                  <StyledMobileNavLink onClick={() => scrollTo(contactRef)}>
                    {navigation.contact}
                  </StyledMobileNavLink>
                </StyledMobileMenuLinks>
              </motion.div>
            </StyledMobileMenu>
          )}
        </StyledMobileNav>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </>
    </BrowserRouter>
  );
};
