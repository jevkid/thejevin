import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components/macro';
import { home } from '../api/data';
import { ButtonAsLink } from '../components/buttons';
import { COMMON, DESKTOP_PADDING, FONTS } from '../constants';
import { StyledPage } from './styles';

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 ${DESKTOP_PADDING};
  @media (max-width: 812px) {
    align-items: center;
    text-align: center;
    margin: 0 30px;
  }
`;

const StyledHeadingTitle = styled(motion.h1)`
  font-size: 100px;
  color: ${COMMON.titleColor};
  font-family: ${FONTS.questrial};
  font-weight: 700;
  margin: 12px 0;
  @media (max-width: 812px) {
    font-size: 72px;
  }
`;

const StyledHeadingSubtitle = styled(motion.h2)`
  color: ${COMMON.subtitleColor};
  font-family: ${FONTS.questrial};
  font-weight: 700;
  font-size: 52px;
  margin: 0;
  @media (max-width: 812px) {
    font-size: 32px;
  }
`;

const StyledButtonContainer = styled.div`
  margin: 48px 0;
`;

export const Home: React.FC = () => {
  return (
    <StyledPage id="home" className="page" centered={true}>
      <StyledHomeContainer>
        <AnimatePresence>
          <StyledHeadingTitle
            initial={{ y: -200 }} // what it starts at
            animate={{ y: 0 }} // what we want to animate to
            transition={{ duration: 0.5 }}
            exit={{ y: 200 }} // when the component umounts
          >
            {home.title}
          </StyledHeadingTitle>
          <StyledHeadingSubtitle
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ y: -200 }}
          >
            {home.subtitle}
          </StyledHeadingSubtitle>
          <StyledButtonContainer>
            <ButtonAsLink href={home.connectLink}>{home.connect}</ButtonAsLink>
          </StyledButtonContainer>
        </AnimatePresence>
      </StyledHomeContainer>
    </StyledPage>
  );
};
