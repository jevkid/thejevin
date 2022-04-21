import * as React from 'react';
import { about } from '../api/data';
import styled from 'styled-components';
import {
  StyledP,
  StyledPage,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
} from './styles';

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 310px;
`;

export const About: React.FC = () => {
  return (
    <StyledPage id="about" className="page">
      <StyledAboutContainer>
        <StyledPageTitleContainer>
          <StyledPageTitle>{about.title}</StyledPageTitle>
          <StyledPageSubtitle>
            Hello! I'm Megan, a Cardiff based Team Lead/Frontend Engineer at{' '}
            <a
              href="https://www.crowdcube.com"
              target="_blank"
              rel="noreferrer"
            >
              Crowdcube
            </a>
            .
          </StyledPageSubtitle>
          <StyledP>Fond of travel, coffee, and good UIs.</StyledP>
        </StyledPageTitleContainer>
      </StyledAboutContainer>
    </StyledPage>
  );
};

// export const About: React.FC = () => {
//   return (
//     <StyledBGPage id="about">
//       <StyledPageTitleContainer>
//         <StyledPageTitle>{about.title}</StyledPageTitle>
//       </StyledPageTitleContainer>
//       <StyledPageContent>
//         {about.content.map((content) => (
//           <StyledSection>
//             <StyledSectionTitle>{content.title}</StyledSectionTitle>
//             <StyledP>{content.body}</StyledP>
//           </StyledSection>
//         ))}
//       </StyledPageContent>
//     </StyledBGPage>
//   );
// };
