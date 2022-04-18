import * as React from 'react';
import styled from 'styled-components';
import { portfolio } from '../api/data';
import { ContentCard } from '../components/contentCard';
import { DesktopNavigation } from '../components/desktopNavigation';
import {
  StyledBGPage,
  StyledNavigationContainer,
  StyledP,
  StyledPageContent,
  StyledPageTitle,
  StyledPageTitleContainer,
  StyledSection,
  StyledSectionTitle,
} from './styles';

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MyWork: React.FC = () => {
  return (
    <StyledBGPage
      id="portfolio"
      backgroundImg="images/inverseHalfOffWhiteBg.jpg"
    >
      <StyledPageTitleContainer>
        <StyledPageTitle>{portfolio.title}</StyledPageTitle>
        <StyledNavigationContainer>
          <DesktopNavigation />
        </StyledNavigationContainer>
      </StyledPageTitleContainer>
      <StyledPageContent>
        <StyledSection>
          <StyledSectionTitle>
            {portfolio.professional.title}
          </StyledSectionTitle>
          <StyledCards>
            {portfolio.professional.content.map((content) => (
              <ContentCard
                src={content.src}
                subtitle={content.subtitle}
                href={content.href}
                description={content.description}
              />
            ))}
          </StyledCards>
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>{portfolio.personal.title}</StyledSectionTitle>
          <StyledCards>
            {portfolio.personal.content.map((content) => (
              <ContentCard
                subtitle={content.subtitle}
                href={content.href}
                description={content.description}
              />
            ))}
          </StyledCards>
        </StyledSection>
      </StyledPageContent>
    </StyledBGPage>
  );
};
