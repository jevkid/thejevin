import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import { DesktopNavigation } from '../components/desktopNavigation';
import { COLORS } from '../constants';
import {
  StyledBGPage,
  StyledNavigationContainer,
  StyledPageContent,
  StyledPageTitle,
  StyledPageTitleContainer,
} from './styles';

const StyledIconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 500px;
  align-items: center;
  width: 100%;
  padding: 0 64px;
`;

const StyledIconContainer = styled.div``;

const StyledIconLink = styled.a`
  &:hover {
    svg {
      color: black;
    }
  }
`;

export const ContactMe: React.FC = () => {
  return (
    <StyledBGPage id="contact" backgroundImg="images/halfOffWhiteBg.jpg">
      <StyledPageTitleContainer>
        <StyledPageTitle>Contact</StyledPageTitle>
        <StyledNavigationContainer>
          <DesktopNavigation />
        </StyledNavigationContainer>
      </StyledPageTitleContainer>
      <StyledPageContent>
        <StyledIconsContainer>
          <StyledIconContainer>
            <StyledIconLink
              href="https://www.linkedin.com/in/megan-jevin-51b76254/"
              target="_blank"
              title="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                color={COLORS.black}
              />
            </StyledIconLink>
          </StyledIconContainer>
          <StyledIconContainer>
            <StyledIconLink
              href="https://github.com/jevkid"
              target="_blank"
              title="Github"
            >
              <FontAwesomeIcon icon={faGithub} size="3x" color={COLORS.black} />
            </StyledIconLink>
          </StyledIconContainer>
          <StyledIconContainer>
            <StyledIconLink
              href="mailto:jevinme@gmail.com"
              target="_blank"
              title="Email"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="3x"
                color={COLORS.black}
              />
            </StyledIconLink>
          </StyledIconContainer>
        </StyledIconsContainer>
      </StyledPageContent>
    </StyledBGPage>
  );
};
