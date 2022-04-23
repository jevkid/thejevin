import * as React from 'react';
import styled from 'styled-components/macro';
import { home } from '../api/data';
import { ButtonAsLink } from '../components/buttons';
import { COLORS, DESKTOP_PADDING, FONTS } from '../constants';
import { StyledPage } from './styles';

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 ${DESKTOP_PADDING};
  @media (max-width: 812px) {
    align-items: center;
    text-align: center;
    margin: 0 30px;
  }
`;

const StyledHeadingTitle = styled.h1`
  font-size: 100px;
  color: ${COLORS.black};
  font-family: ${FONTS.questrial};
  font-weight: 700;
  margin: 12px 0;
  @media (max-width: 812px) {
    font-size: 72px;
  }
`;

const StyledHeadingSubtitle = styled.h2`
  color: ${COLORS.black};
  font-family: ${FONTS.manrope};
  font-weight: 400;
  margin: 0;
`;

const StyledButtonContainer = styled.div`
  margin: 18px 0;
`;

export const Home: React.FC = () => {
  return (
    <StyledPage id="home" className="page" centered={true}>
      <StyledHomeContainer>
        <StyledHeadingTitle>{home.title}</StyledHeadingTitle>
        <StyledHeadingSubtitle>{home.subtitle}</StyledHeadingSubtitle>
        <StyledButtonContainer>
          <ButtonAsLink href={home.connectLink}>{home.connect}</ButtonAsLink>
        </StyledButtonContainer>
      </StyledHomeContainer>
    </StyledPage>
  );
};
