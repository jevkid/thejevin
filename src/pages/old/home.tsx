import * as React from 'react';
import styled from 'styled-components';
import { ButtonAsLink } from '../../components/buttons';
import { COMMON, FONTS } from '../../constants';

const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  @media (min-width: 811px) {
    position: relative;
  }
`;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  position: absolute;
  @media (min-width: 811px) {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  @media (max-width: 812px) {
    top: 10%;
  }
`;

const StyledHeadingTitle = styled.h1`
  font-size: 100px;
  color: ${COMMON.primary};
  font-family: ${FONTS.questrial};
  font-weight: 700;
  margin: 12px 0;
`;

const StyledHeadingSubtitle = styled.h2`
  color: ${COMMON.secondary};
  font-family: ${FONTS.manrope};
  font-weight: 400;
  margin: 0;
`;

const StyledWorkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 0;
  @media (max-width: 812px) {
    flex-direction: column;
    padding: 22px;
  }
`;

const StyledWorkField = styled.div`
  width: 30%;
  @media (max-width: 812px) {
    padding: 6px 0;
    width: 100%;
  }
`;

const StyledButtonContainer = styled.div`
  margin: 18px 0;
`;

export const Home: React.FC = () => {
  return (
    <StyledHomeContent>
      <StyledHomeContainer>
        <StyledHeadingTitle>Megan Jevin</StyledHeadingTitle>
        <StyledHeadingSubtitle>
          Team Lead / Frontend Engineer
        </StyledHeadingSubtitle>
        <StyledWorkContainer>
          <StyledWorkField>
            <b>Currently</b> a Team Lead and Frontend Engineer at Crowdcube
            where I manage some fantastic people and help fund the wonderful.
          </StyledWorkField>
          <StyledWorkField>
            <b>Previously</b> worked at Cardiff University, Inspiretec, and
            Skyscanner where I've gained invaluable experience in the fintech,
            travel, and education industries.
          </StyledWorkField>
        </StyledWorkContainer>
        <StyledButtonContainer>
          <ButtonAsLink href="https://www.linkedin.com/in/megan-jevin-51b76254/">
            Connect
          </ButtonAsLink>
        </StyledButtonContainer>
      </StyledHomeContainer>
    </StyledHomeContent>
  );
};