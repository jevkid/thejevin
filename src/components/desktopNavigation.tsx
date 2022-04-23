import * as React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants';

interface DesktopNavigationProps {
  centered?: boolean;
}

const StyledDesktopNav = styled.div<{ centered?: boolean }>`
  display: flex;
  bottom: 0;
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')};
  align-items: center;
  width: 100%;
  position: absolute;
  padding: 24px 0;
  @media (max-width: 812px) {
    display: none;
  }
`;

const StyledNavLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledNavLink = styled.a`
  font-size: 14px;
  color: ${COLORS.black};
  text-decoration: none;
  padding: 0 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export const DesktopNavigation: React.FC<DesktopNavigationProps> = (props) => {
  return (
    // Desktop Nav
    <StyledDesktopNav centered={props.centered}>
      <StyledNavLinksContainer>
        <StyledNavLink href="#about">About</StyledNavLink> /
        <StyledNavLink href="#portfolio">Portfolio</StyledNavLink> /
        <StyledNavLink href="#contact">Contact</StyledNavLink>
      </StyledNavLinksContainer>
    </StyledDesktopNav>
  );
};
