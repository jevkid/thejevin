import * as React from 'react';
import styled from 'styled-components';
import { portfolio } from '../api/data';
// import { ContentCard } from '../components/contentCard';
import {
  StyledPage,
  StyledPageTitle,
  StyledPageTitleContainer,
} from './styles';

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 310px;
`;

// const StyledCards = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

export const Portfolio: React.FC = () => {
  return (
    <StyledPage id="portfolio" className="page">
      <StyledPortfolioContainer>
        <StyledPageTitleContainer>
          <StyledPageTitle>{portfolio.title}</StyledPageTitle>
        </StyledPageTitleContainer>
        {/* <StyledPageContent>
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
      </StyledPageContent> */}
      </StyledPortfolioContainer>
    </StyledPage>
  );
};
