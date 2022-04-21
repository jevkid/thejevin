import * as React from 'react';
import styled from 'styled-components';
import {
  StyledPage,
  StyledPageTitle,
  StyledPageTitleContainer,
} from './styles';

const StyledSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 310px;
`;

const StyledSkillsRow = styled.div`
  display: flex;
`;

const StyledSkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledList = styled.ul``;

const StyledListItem = styled.li``;

export const Skills: React.FC = () => {
  return (
    <StyledPage id="skills" className="page">
      <StyledSkillsContainer>
        <StyledPageTitleContainer>
          <StyledPageTitle>Skills</StyledPageTitle>
          <StyledSkillsRow>
            <StyledSkillsColumn>
              <StyledList>
                <StyledListItem>Javascript</StyledListItem>
                <StyledListItem>Typescript</StyledListItem>
                <StyledListItem>React</StyledListItem>
                <StyledListItem>Redux</StyledListItem>
              </StyledList>
            </StyledSkillsColumn>
            <StyledSkillsColumn>
              <StyledList>
                <StyledListItem>Javascript</StyledListItem>
                <StyledListItem>Typescript</StyledListItem>
                <StyledListItem>React</StyledListItem>
                <StyledListItem>Redux</StyledListItem>
              </StyledList>
            </StyledSkillsColumn>
          </StyledSkillsRow>
        </StyledPageTitleContainer>
      </StyledSkillsContainer>
    </StyledPage>
  );
};
