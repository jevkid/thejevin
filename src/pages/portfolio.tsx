import * as React from 'react';
import styled from 'styled-components/macro';
import { portfolio } from '../api/data';
import { RoundedCard } from '../components/roundedCard';
import {
  StyledBorder,
  StyledPageContent,
  StyledPage,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
} from './styles';

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  @media (max-width: 812px) {
    justify-content: center;
  }
`;

export const Portfolio: React.FC = () => {
  return (
    <StyledPage id="portfolio" className="page">
      <StyledPageContent>
        <StyledPageTitleContainer>
          <StyledPageTitle>{portfolio.title}</StyledPageTitle>
        </StyledPageTitleContainer>
        <StyledBorder />
        <StyledPageSubtitle>{portfolio.subtitle}</StyledPageSubtitle>
        <StyledCards>
          {portfolio.content.map((content) => (
            <RoundedCard
              src={content.src ? content.src : undefined}
              key={content.href}
              subtitle={content.subtitle}
              href={content.href}
              description={content.description}
            />
          ))}
        </StyledCards>
      </StyledPageContent>
    </StyledPage>
  );
};
