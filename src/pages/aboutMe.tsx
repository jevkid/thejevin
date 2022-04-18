import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPeopleGroup,
  faLaptopCode,
  faCalendarDays,
  faGraduationCap,
  faPaw,
  faPassport,
  faFlagUsa,
} from '@fortawesome/free-solid-svg-icons';
import {
  StyledBGPage,
  StyledP,
  StyledPageContent,
  StyledPageTitle,
  StyledPageTitleContainer,
  StyledSection,
  StyledSectionTitle,
  StyledNavigationContainer,
} from './styles';
import { COLORS } from '../constants';
import { DesktopNavigation } from '../components/desktopNavigation';
import { about } from '../api/data';

export const AboutMe: React.FC = () => {
  return (
    <StyledBGPage id="about" backgroundImg="images/halfOffWhiteBg.jpg">
      <StyledPageTitleContainer>
        <StyledPageTitle>{about.title}</StyledPageTitle>
        <StyledNavigationContainer>
          <DesktopNavigation />
        </StyledNavigationContainer>
      </StyledPageTitleContainer>
      <StyledPageContent>
        {about.content.map((content) => (
          <StyledSection>
            <StyledSectionTitle>{content.title}</StyledSectionTitle>
            <StyledP>{content.body}</StyledP>
          </StyledSection>
        ))}
      </StyledPageContent>
    </StyledBGPage>
  );
};
