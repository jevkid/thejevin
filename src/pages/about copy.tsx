import * as React from 'react';
import { about } from '../api/data';
import styled from 'styled-components';
import {
  StyledP,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
} from './styles';

const StyledAboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 768px;
  /* Full height */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 310px;
`;

export const About: React.FC = () => {
  return (
    <StyledAboutContent>
      <StyledAboutContainer>
        <StyledPageTitleContainer>
          <StyledPageTitle>{about.title}</StyledPageTitle>
          <StyledPageSubtitle>
            Hello! I'm Megan, a Cardiff based Team Lead/Frontend Engineer at{' '}
            <a href="https://www.crowdcube.com" target="_blank">
              Crowdcube
            </a>
            .
          </StyledPageSubtitle>
          <StyledP>
            I've been designing and programming websites since the MySpace
            era... or at least, that's what got me started. I actually started
            university studying the very generic "Communications". To tell you
            the truth, it wasn't for me. I actually dropped out of university to
            study part time at a community college and work full time for a
            while. When I had a better idea of what I wanted to do, I started
            re-applying to schools. While I was researching where to apply, I
            focused on schools that had a good study abroad program. It was
            shortly after that I realised, "Hey, I can do my entire degree
            abroad!". My family and friends thought I was insane, but less than
            a year later I was on a plane to London, beginning my studies at
            Cardiff University.
          </StyledP>
          <StyledP>
            During my 3 years at Cardiff University where I studied Computer
            Science and Software Engineering, I learned the basics of various
            programming languages such as Java, Python, C/C++, etc. I also took
            modules about data structures and algorithms, knowledge management,
            and the software development lifecycle. In addition to my studies, I
            was also active in various societies and the student senate. In my
            second and third year I was elected President of the Computer
            Science Society, and in my third year I was elected the
            International Student's Officer. I learned so much about people,
            leadership, organisation, and working closely people of all
            different backgrounds.
          </StyledP>
          <StyledP>
            The summer following my second year, I was lucky enough to complete
            a internship for{' '}
            <a href="https://www.skyscanner.net" target="_blank">
              Skyscanner
            </a>{' '}
            in Barcelona. I worked within their Data Squad and built internal
            dashboards monitoring automated processes such as hotel
            deduplication. This experience in the travel industry is what helped
            me land my first job as a Junior Frontend Developer at{' '}
            <a href="https://www.inspiretec.com" target="_blank">
              Inspiretec
            </a>
            . During my time at Inspiretec, I worked primarily on a white-label
            travel booking solution for various companies in Canada. This
            software integrated with the company's platform to allow customer's
            to seamlessly book flights, hotels, cruises, and rental cars using
            points from their bank or cash. In addition to this, I worked on an
            in-house CMS system as well as built email templates for various
            clients.
          </StyledP>
        </StyledPageTitleContainer>
      </StyledAboutContainer>
    </StyledAboutContent>
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
