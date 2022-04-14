import * as React from 'react';
import styled from 'styled-components';
import {
  StyledP,
  StyledPage,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
  StyledSection,
  StyledSectionTitle,
} from './styles';

const StyledLink = styled.a`
  text-decoration: none;
`;

export const Portfolio: React.FC = () => {
  // Professional- Crowdcube, Cardiff University Student's App, Canadian Auto Association, ScotiaBank, Bank of Montreal, Skyscanner
  // Personal- Portfolio, DnD app, Murdle, DnD Character builder app, wedding website
  return (
    <StyledPage>
      <StyledPageTitleContainer>
        <StyledPageTitle>Portfolio</StyledPageTitle>
        <StyledPageSubtitle>
          For my up to date work, please visit my{' '}
          <StyledLink href="https://github.com/jevkid" target="_blank">
            Github
          </StyledLink>
          .
        </StyledPageSubtitle>
      </StyledPageTitleContainer>
      <StyledSection>
        <StyledSectionTitle>Professional</StyledSectionTitle>
        <StyledP>
          Crowdcube, Cardiff University Student's App, Canadian Auto
          Association, ScotiaBank, Bank of Montreal, Skyscanner
        </StyledP>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Personal</StyledSectionTitle>
        <StyledP>
          Portfolio, DnD app, Murdle, DnD Character builder app, wedding website
        </StyledP>
      </StyledSection>
    </StyledPage>
  );
};
