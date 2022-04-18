import * as React from 'react';
import styled from 'styled-components';
import { COLORS, COMMON } from '../constants';

const StyledContentCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${COLORS.black};
  background-color: #f7f7f7;
  width: 300px;
  height: 200px;
  margin-bottom: 24px;

  @media (min-width: 812px) {
    margin-right: 24px;
  }
`;

const StyledContentCardTop = styled.div`
  max-width: 300px;
  height: 150px;
`;

const StyledLogo = styled.img`
  width: -webkit-fill-available;
  max-width: 300px;
  height: auto;
  max-height: 150px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  background-color: ${COLORS.black};
`;

const StyledTitleAsLogo = styled.h1`
  margin: 0;
  color: white;
  padding: 12px;
`;

const StyledDescription = styled.div`
  height: 140px;
  max-height: 140px;
  max-width: 300px;
  padding: 0 12px;
  padding-top: 12px;
`;

const StyledContentCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  height: 54px;
  max-height: 54px;
`;

const StyledContentTitle = styled.span`
  color: black;
  font-weight: bold;
`;

const StyledContentLink = styled.a`
  text-decoration: none;
  color: ${COMMON.secondary};
`;

interface ContentCardProps {
  src?: string;
  href: string;
  subtitle: string;
  description: string;
}

export const ContentCard: React.FC<ContentCardProps> = (props) => {
  const [showDescription, setShowDescription] = React.useState(false);

  return (
    <StyledContentCard>
      <StyledContentCardTop
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        {showDescription ? (
          <StyledDescription>{props.description}</StyledDescription>
        ) : (
          <>
            {props.src ? (
              <StyledLogo src={props.src} alt={props.subtitle} />
            ) : (
              <StyledTitleContainer>
                <StyledTitleAsLogo>{props.subtitle}</StyledTitleAsLogo>
              </StyledTitleContainer>
            )}
          </>
        )}
      </StyledContentCardTop>
      <StyledContentCardBottom>
        <StyledContentTitle>{props.subtitle}</StyledContentTitle>
        <StyledContentLink href={props.href} target="_blank">
          {props.href.split('www.')[1]}
        </StyledContentLink>
      </StyledContentCardBottom>
    </StyledContentCard>
  );
};
