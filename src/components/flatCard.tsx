import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components/macro';
import { COLORS, COMMON } from '../constants';
import { StyledLink } from '../pages/styles';

const StyledFlatCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  width: 375px;
  height: auto;
  max-height: 295px;
  @media (max-width: 500px) {
    width: 350px;
    max-height: 280px;
  }
`;

const StyledLogo = styled.img`
  width: -webkit-fill-available;
  max-width: 375px;
  height: 295px;
`;

const StyledTitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

const StyledTitle = styled.h2`
  margin: 0;
  color: ${COMMON.titleColor};
  padding: 12px;
`;

const StyledDescription = styled(motion.div)`
  height: 140px;
  max-height: 140px;
  max-width: 375px;
  padding: 12px 22px;
`;

const StyledFlatCardBottom = styled.div`
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
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

interface FlatCardProps {
  src?: string;
  href: string;
  subtitle: string;
  description: string;
}

export const FlatCard: React.FC<FlatCardProps> = (props) => {
  const [showDescription, setShowDescription] = React.useState(false);

  return (
    <StyledFlatCard
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      {showDescription ? (
        <AnimatePresence>
          <StyledTitleContainer
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ y: 30 }}
          >
            <StyledTitle>{props.subtitle}</StyledTitle>
            <StyledLink href={props.href} target="_blank">
              {props.href.split('www.')[1]}
            </StyledLink>
          </StyledTitleContainer>
          <StyledDescription
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ y: -30 }}
          >
            {props.description}
          </StyledDescription>
        </AnimatePresence>
      ) : (
        <>
          {props.src ? (
            <StyledLogo src={props.src} alt={props.subtitle} />
          ) : (
            <StyledFlatCardBottom>
              <StyledContentTitle>{props.subtitle}</StyledContentTitle>
              <StyledContentLink href={props.href} target="_blank">
                {props.href.split('www.')[1]}
              </StyledContentLink>
            </StyledFlatCardBottom>
          )}
        </>
      )}
    </StyledFlatCard>
  );
};
