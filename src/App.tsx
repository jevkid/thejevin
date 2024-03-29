import * as React from 'react';
import styled from 'styled-components/macro';
import { DESKTOP_PADDING, FONTS, COMMON } from './constants';
import { Home } from './pages/home';
import { navigation } from './api/data';
import { motion } from 'framer-motion';
import { About } from './pages/about';
import { Portfolio } from './pages/portfolio';
import { Contact } from './pages/contact';
import { Wrapper } from './components/gaWrapper';
import { useAnalytics } from './analytics/useAnalytics';
import { BrowserRouter } from 'react-router-dom';
import { trackEvent } from './analytics/trackEvent';

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
  position: relative;
  margin: 16px ${DESKTOP_PADDING};
`;

const StyledNavLogoLink = styled.a`
  font-family: ${FONTS.questrial};
  font-size: 24px;
  color: ${COMMON.subtitleColor};
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
  color: ${COMMON.titleColor};
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

const StyledLogoImg = styled.img`
  width: 40px;
  height: 40px;
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
  color: ${COMMON.titleColor};
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
  background: ${COMMON.titleColor};
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
  const initialised = useAnalytics();

  const handleNavClick = (
    isMobile: boolean,
    title: string,
    ref?: React.RefObject<HTMLDivElement>
  ) => {
    trackEvent({
      category: 'Internal link clicked',
      action: `${
        isMobile ? 'Mobile' : 'Desktop'
      } navigation "${title}" clicked`,
    });
    if (ref) {
      scrollTo(ref);
    }
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    openNavigationMenu(false);
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <Wrapper initialised={initialised}>
        {/* Desktop Nav */}
        <StyledDesktopNav>
          <StyledNavLogoContainer>
            <StyledNavLogoLink
              onClick={() => handleNavClick(false, 'home', homeRef)}
            >
              <StyledLogoImg src="/images/Rounded.png" />
            </StyledNavLogoLink>
          </StyledNavLogoContainer>
          <StyledNavLinksContainer>
            <StyledNavLink
              onClick={() => handleNavClick(false, 'about', aboutRef)}
            >
              {navigation.about}
            </StyledNavLink>
            <StyledNavLink
              onClick={() => handleNavClick(false, 'portfolio', portfolioRef)}
            >
              {navigation.portfolio}
            </StyledNavLink>
            <StyledNavLink
              onClick={() => handleNavClick(false, 'contact', contactRef)}
            >
              {navigation.contact}
            </StyledNavLink>
          </StyledNavLinksContainer>
        </StyledDesktopNav>
        {/* Mobile Nav */}
        <StyledMobileNav>
          <StyledBurgerMenuContainer>
            <StyledBurgerMenu
              id="burger-menu-toggle"
              onClick={() => {
                handleNavClick(true, 'burger');
                openNavigationMenu(!navigationMenuOpen);
              }}
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
                    <StyledNavLogoLink
                      onClick={() => handleNavClick(true, 'home', homeRef)}
                    >
                      <StyledLogoImg src="/images/Rounded.png" />
                    </StyledNavLogoLink>
                  </StyledNavLogoContainer>
                  <StyledMobileNavLink
                    onClick={() => handleNavClick(true, 'about', aboutRef)}
                  >
                    {navigation.about}
                  </StyledMobileNavLink>
                  <StyledMobileNavLink
                    onClick={() =>
                      handleNavClick(true, 'portfolio', portfolioRef)
                    }
                  >
                    {navigation.portfolio}
                  </StyledMobileNavLink>
                  <StyledMobileNavLink
                    onClick={() => handleNavClick(true, 'contact', contactRef)}
                  >
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
      </Wrapper>
    </BrowserRouter>
  );
};
