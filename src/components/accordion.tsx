import * as React from 'react';
import styled from 'styled-components';

const StyledAccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 12px 0;
  @media (max-width: 812px) {
    width: 85%;
  }
`;

const StyledAccordionTitle = styled.div<{ open?: boolean }>`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  border-bottom: 1px solid black;
  padding: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledAccordionContent = styled.div`
  padding: 12px;
`;

const StyledArrow = styled.i<{ direction: 'up' | 'down' }>`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  height: 5px;
  width: 5px;
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

export const Accordion: React.FC<AccordionProps> = (props) => {
  const [contentShown, setContentShown] = React.useState<boolean>(false);
  return (
    <StyledAccordionContainer>
      <StyledAccordionTitle
        open={contentShown}
        onClick={() => setContentShown(!contentShown)}
      >
        {props.title}{' '}
        <StyledArrow direction={contentShown ? 'up' : 'down'}></StyledArrow>
      </StyledAccordionTitle>
      {contentShown && (
        <StyledAccordionContent>{props.children}</StyledAccordionContent>
      )}
    </StyledAccordionContainer>
  );
};
