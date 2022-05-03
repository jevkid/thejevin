import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import { trackEvent } from '../analytics/trackEvent';
import { COMMON } from '../constants';

const StyledAccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 12px 0;
  @media (max-width: 812px) {
    width: 85%;
  }
`;

const StyledAccordionTitle = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: ${COMMON.subtitleColor};
  border-bottom: 1px solid ${COMMON.subtitleColor};
  padding: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledAccordionContent = styled(motion.div)`
  padding: 12px;
`;

const StyledArrow = styled.i<{ direction: 'up' | 'down' }>`
  border: solid ${COMMON.subtitleColor};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  height: 5px;
  width: 5px;
  transition: 0.5s;
  ${({ direction }) =>
    direction === 'up' &&
    `
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    z-index: 1;
  `};
  ${({ direction }) =>
    direction === 'down' &&
    `
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    z-index: 1;
  `};
`;

export interface AccordionProps
  extends React.DetailedHTMLProps<
    React.AllHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
}

const tagVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  collapsed: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const Accordion: React.FC<AccordionProps> = (props) => {
  const [contentShown, setContentShown] = React.useState<boolean>(false);

  const handleToggle = (isOpen: boolean) => {
    if (isOpen) {
      trackEvent({
        category: 'Accordion toggled',
        action: `${props.title} opened`,
      });
    }
  };

  return (
    <StyledAccordionContainer>
      <StyledAccordionTitle
        onClick={() => {
          handleToggle(contentShown);
          setContentShown(!contentShown);
        }}
      >
        {props.title}{' '}
        <motion.div>
          <StyledArrow direction={contentShown ? 'up' : 'down'}></StyledArrow>
        </motion.div>
      </StyledAccordionTitle>
      <AnimatePresence initial={false}>
        {contentShown && (
          <StyledAccordionContent
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={tagVariants}
          >
            {props.children}
          </StyledAccordionContent>
        )}
      </AnimatePresence>
    </StyledAccordionContainer>
  );
};
