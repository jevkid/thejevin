import * as React from 'react';
import {
  StyledP,
  StyledPage,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
  StyledSection,
  StyledSectionTitle,
} from './styles';

export const About: React.FC = () => {
  return (
    <StyledPage>
      <StyledPageTitleContainer>
        <StyledPageTitle>Hi, I'm Megan.</StyledPageTitle>
        <StyledPageSubtitle>
          Here's a bit more about me, both professionaly and personally.
        </StyledPageSubtitle>
      </StyledPageTitleContainer>
      <StyledSection>
        <StyledSectionTitle>Leader</StyledSectionTitle>
        <StyledP>
          I currently manage a team of engineers, and love every minute of it.
          Management is so different from engineering and requires such a wide
          set of skills- I find myself incredibly lucky to be able to grow my
          talents and abilities in such different areas. I truly enjoy helping
          my devs not only day to day but also in their career progression
          journey.
        </StyledP>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Engineer</StyledSectionTitle>
        <StyledP>
          In my dev time, I help design and implement beautiful, responsive,
          accessible UIs. My main focus is always on the end user and UX is
          always at the front of my mind. That being said, I'm also a stickler
          for modular, reusable code and think that having a set of coding
          practises within the team is invaluable. I'm a big fan of Agile
          development and enjoy participating in all of the various SCRUM
          ceremonies. In addition to this I'm well versed in planning, gathering
          requirements, and refining tickets. I work closely with my team and
          project manager to ensure that deliverables are met in a timely and
          efficient manner.
        </StyledP>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Organiser</StyledSectionTitle>
        <StyledP>
          I tend to find myself at the centre of things and quite enjoy
          organising everything from team lunches to office socials. I've also
          gotten several of the companies I've worked for involved in volunteer
          initiaties, mostly helping women and minorities learn to code.
        </StyledP>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Forever Student</StyledSectionTitle>
        <StyledP>
          I went to 3 universities before finally getting my degree, but being
          an engineer means you're never not a "student". One thing I enjoy
          about engineering is the fact that things are constantly changing-
          what's the "best" today might not be the "best" tomorrow, and
          frameworks/languages are always being changed and created.
        </StyledP>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Dog mom</StyledSectionTitle>
        <StyledP>
          I have two huge dogs who I love more than anything. They keep me sane
          and are my reason for getting outdoors. Even though it was my
          partner's idea to have two, I think I'm crazy enough to get a third if
          we had the space...
        </StyledP>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Travel Enthusiast</StyledSectionTitle>
        <StyledP>
          Even though travelling has been on hold during the pandemic, I still
          think about it constantly and am always planning one trip or another.
          To this day I've been to 20+ countries and counting- my favourite kind
          of trip is a city break with a carry on bag and my camera!
        </StyledP>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Expat</StyledSectionTitle>
        <StyledP>
          I'm originally from Nashville, Tennessee. I moved to Wales to attend
          Cardiff University, and was lucky enough to find a job that would
          sponsor me after graduation. I've been here for going on 9 years and
          have now obtained "Indefinite Leave to Remain", meaning I'm able to
          reside in the UK permanently, which is a huge relief to my fiancee and
          two pups!
        </StyledP>
      </StyledSection>
    </StyledPage>
  );
};
