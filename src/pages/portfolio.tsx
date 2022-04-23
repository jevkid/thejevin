import * as React from 'react';
import styled from 'styled-components/macro';
import { portfolio } from '../api/data';
import { FlatCard } from '../components/flatCard';
import { DESKTOP_PADDING } from '../constants';
import {
  StyledBorder,
  StyledPage,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
  StyledSection,
} from './styles';

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 ${DESKTOP_PADDING};
  margin-bottom: 36px;
  @media (max-width: 812px) {
    align-items: center;
    margin: 0 16px;
    text-align: center;
    width: 100%;
    margin-top: 100px;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 812px) {
    justify-content: center;
  }
`;

export const Portfolio: React.FC = () => {
  return (
    <StyledPage id="portfolio" className="page">
      <StyledPortfolioContainer>
        <StyledPageTitleContainer>
          <StyledPageTitle>{portfolio.title}</StyledPageTitle>
        </StyledPageTitleContainer>
        <StyledBorder />
        <StyledPageSubtitle>
          Below are some personal and professional projects that I've worked on.
          Hover over the image to get some more information.
        </StyledPageSubtitle>
        <StyledSection>
          <StyledCards>
            {portfolio.professional.content.map((content) => (
              <FlatCard
                key={content.href}
                src={content.src}
                subtitle={content.subtitle}
                href={content.href}
                description={content.description}
              />
            ))}
            {portfolio.personal.content.map((content) => (
              <FlatCard
                src={content.src ? content.src : undefined}
                key={content.href}
                subtitle={content.subtitle}
                href={content.href}
                description={content.description}
              />
            ))}
          </StyledCards>
        </StyledSection>
      </StyledPortfolioContainer>
    </StyledPage>
  );
};
