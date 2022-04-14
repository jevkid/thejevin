import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import styled from 'styled-components';
import { COMMON } from '../constants';
import { StyledPage, StyledPageTitle } from './styles';

const StyledContactContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-evenly;
`;

const StyledIconContainer = styled.div``;

const StyledIconLink = styled.a`
  &:hover {
    svg {
      color: black;
    }
  }
`;

export const Contact: React.FC = () => {
  return (
    <StyledPage>
      <StyledPageTitle>Contact</StyledPageTitle>
      <StyledContactContainer>
        <StyledIconContainer>
          <StyledIconLink
            href="https://www.linkedin.com/in/megan-jevin-51b76254/"
            target="_blank"
            title="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              color={COMMON.primary}
            />
          </StyledIconLink>
        </StyledIconContainer>
        <StyledIconContainer>
          <StyledIconLink
            href="https://github.com/jevkid"
            target="_blank"
            title="Github"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color={COMMON.primary} />
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
              size="2x"
              color={COMMON.primary}
            />
          </StyledIconLink>
        </StyledIconContainer>
      </StyledContactContainer>
    </StyledPage>
  );
};
