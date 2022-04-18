import * as React from 'react';
import styled from 'styled-components';
import { home } from '../api/data';
import { ButtonAsLink } from '../components/buttons';
import { DesktopNavigation } from '../components/desktopNavigation';
import { COLORS, FONTS } from '../constants';

const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 768px;
  height: 100%;
  background-image: url(https://wallpaper.dog/large/20358818.jpg);
  /* Full height */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

const StyledHeadingTitle = styled.h1`
  font-size: 100px;
  color: ${COLORS.black};
  font-family: ${FONTS.questrial};
  font-weight: 700;
  margin: 12px 0;
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

export const Title: React.FC = () => {
  return (
    <StyledHomeContent>
      <StyledHomeContainer>
        <StyledHeadingTitle>{home.title}</StyledHeadingTitle>
        <StyledHeadingSubtitle>{home.subtitle}</StyledHeadingSubtitle>
        <StyledButtonContainer>
          <ButtonAsLink href={home.connectLink}>{home.connect}</ButtonAsLink>
        </StyledButtonContainer>
      </StyledHomeContainer>
      <DesktopNavigation centered={true} />
    </StyledHomeContent>
  );
};
