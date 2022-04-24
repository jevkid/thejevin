import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components/macro';
import { COMMON } from '../constants';
import {
  shiny,
  StyledBorder,
  StyledPageContent,
  StyledPage,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
} from './styles';

const StyledIconsContainer = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  width: 100%;
  margin: 0 24px;
  margin-left: 0;
  @media (max-width: 812px) {
    justify-content: space-around;
  }
`;

const StyledIconLink = styled.a`
  svg {
    ${shiny};
  }
`;

export const Contact: React.FC = () => {
  return (
    <StyledPage id="contact" className="page">
      <StyledPageContent>
        <StyledPageTitleContainer>
          <StyledPageTitle>Contact me</StyledPageTitle>
        </StyledPageTitleContainer>
        <StyledBorder />
        <StyledPageSubtitle>
          Have a question? Want to chat about a project? Feel free to get in
          touch!
        </StyledPageSubtitle>
        <StyledIconsContainer>
          <StyledIconLink
            href="https://www.linkedin.com/in/megan-jevin-51b76254/"
            target="_blank"
            title="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="3x"
              color={COMMON.linkColor}
            />
          </StyledIconLink>

          <StyledIconLink
            href="https://github.com/jevkid"
            target="_blank"
            title="Github"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              color={COMMON.linkColor}
            />
          </StyledIconLink>

          <StyledIconLink
            href="https://www.instagram.com/megzdelight"
            target="_blank"
            title="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="3x"
              color={COMMON.linkColor}
            />
          </StyledIconLink>

          <StyledIconLink
            href="mailto:jevinme@gmail.com"
            target="_blank"
            title="Email"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="3x"
              color={COMMON.linkColor}
            />
          </StyledIconLink>
        </StyledIconsContainer>
      </StyledPageContent>
    </StyledPage>
  );
};
