import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components/macro';
import { COLORS, DESKTOP_PADDING } from '../constants';
import {
  shiny,
  StyledBorder,
  StyledPage,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
} from './styles';

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 ${DESKTOP_PADDING};
  @media (max-width: 812px) {
    align-items: center;
    margin: 0 16px;
    width: 100%;
    text-align: center;
    margin-top: 100px;
  }
`;

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

const StyledIconContainer = styled.div``;

const StyledIconLink = styled.a`
  svg {
    ${shiny};
  }
`;

export const Contact: React.FC = () => {
  return (
    <StyledPage id="contact" className="page">
      <StyledContactContainer>
        <StyledPageTitleContainer>
          <StyledPageTitle>Contact</StyledPageTitle>
        </StyledPageTitleContainer>
        <StyledBorder />
        <StyledPageSubtitle>
          Have a question? Want to chat about a project? Feel free to get in
          touch!
        </StyledPageSubtitle>
        <StyledIconsContainer>
          <StyledIconContainer>
            <StyledIconLink
              href="https://www.linkedin.com/in/megan-jevin-51b76254/"
              target="_blank"
              title="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
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
              href="https://www.instagram.com/megzdelight"
              target="_blank"
              title="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="3x"
                color={COLORS.black}
              />
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
      </StyledContactContainer>
    </StyledPage>
  );
};
