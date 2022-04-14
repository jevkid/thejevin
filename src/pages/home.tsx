import * as React from 'react';
import styled from 'styled-components';
import { ButtonAsLink } from '../components/buttons';
import { COMMON, FONTS } from '../constants';

const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  height: 600px;
`;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

const StyledHeadingTitle = styled.h1`
  color: ${COMMON.primary};
  font-family: ${FONTS.vazirmatn};
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
  justify-content: center;
  padding: 30px 0;
`;

const StyledWorkField = styled.div`
  width: 30%;
`;

const StyledButtonContainer = styled.div`
  margin: 18px;
`;

export const Home: React.FC = () => {
  return (
    <StyledHomeContent>
      <StyledHomeContainer>
        <StyledHeadingTitle>Megan Jevin</StyledHeadingTitle>
        <StyledHeadingSubtitle>
          Team Lead / Senior Frontend Engineer
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
        <br />
        <br />
        <i>Under Construction</i>
      </StyledHomeContainer>
    </StyledHomeContent>
  );
};
