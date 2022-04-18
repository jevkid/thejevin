import * as React from 'react';
import styled from 'styled-components';
import { ContentCard } from '../../components/contentCard';
import { DesktopNavigation } from '../../components/desktopNavigation';
import {
  StyledP,
  StyledPage,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
  StyledSection,
  StyledSectionTitle,
} from '../styles';

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 812px) {
    flex-direction: column;
  }
`;

export const Portfolio: React.FC = () => {
  // Professional- Crowdcube, Cardiff University Student's App, Canadian Auto Association, ScotiaBank, Bank of Montreal, Skyscanner
  // Personal- Portfolio, DnD app, Murdle, DnD Character builder app, wedding website
  return (
    <StyledPage id="portfolio">
      <StyledPageTitleContainer>
        <StyledPageTitle>Portfolio</StyledPageTitle>
        <StyledPageSubtitle>
          For my up to date work, please visit my{' '}
          <StyledLink href="https://github.com/jevkid" target="_blank">
            Github
          </StyledLink>
          .
        </StyledPageSubtitle>
      </StyledPageTitleContainer>
      <StyledSection>
        <StyledSectionTitle>Professional</StyledSectionTitle>
        <StyledCards>
          <ContentCard
            src="https://cdn-content-hub.crowdcube.com/files/cover-images/_1024x512_crop_center-center_82_none/Crowdcube_Homepage.jpg"
            subtitle="Crowdcube"
            href="https://www.crowdcube.com"
            description="Most recently at Crowdcube I've helped internationalise a large part of the platform, in addition to re-writing entire areas of the site in a more modern tech stack."
          />
          <ContentCard
            src="https://cheersnhs.com/social/cheers-meta-100.jpg"
            subtitle="Cheers NHS"
            href="https://www.cheersnhs.com/"
            description="At the start of the pandemic, I volunteered my time to help a friend build his idea 'Cheers NHS', where people could purchase a JustEat voucher which would be sent to a registered NHS worker."
          />
          <ContentCard
            src="https://blogs.cardiff.ac.uk/university-executive-board/wp-content/uploads/sites/581/2018/09/student-app-bg-1.jpg"
            subtitle="Cardiff Student App"
            href="https://www.cardiff.ac.uk"
            description="I single handedly engineered and developed Cardiff University's Student App, first in a third-party web wrapper using React, followed by React Native."
          />
          <ContentCard
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/CAA_logo.svg/1200px-CAA_logo.svg.png"
            subtitle="Canadian Automobile Association"
            href="https://www.caa.ca"
            description="During my time in the travel software industry, I helped create and build white-label solutions for online travel booking via various Canadian banks."
          />
          <ContentCard
            src="https://www.companieshistory.com/wp-content/uploads/2013/10/Scotiabank.png"
            subtitle="Scotiabank"
            href="https://www.scotiabank.com/"
            description="During my time in the travel software industry, I helped create and build white-label solutions for online travel booking via various Canadian banks."
          />
          <ContentCard
            src="https://www.crwflags.com/fotw/images/c/ca$bmo.gif"
            subtitle="Bank of Montreal"
            href="https://www.scotiabank.com/"
            description="During my time in the travel software industry, I helped create and build white-label solutions for online travel booking via various Canadian banks."
          />
          <ContentCard
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11YOmDi_bzFUwSuE1NbamW6vw8UERXb4nUA&usqp=CAU"
            subtitle="Skyscanner"
            href="https://www.skyscanner.net"
            description="While interning at Skyscanner I worked within the Data Squad where we built tools and wrote programs that dealt with things such as hotel deduplication."
          />
        </StyledCards>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Personal</StyledSectionTitle>
        <StyledP>
          <StyledCards>
            <ContentCard
              subtitle="Wedding Website"
              href="https://www.github.com/jevkid/wedding-website"
              description="My partner and I's wedding website where guests will be able to RSVP, submit meal choices, dietary requirements, and find information related to the day."
            />
            <ContentCard
              subtitle="Murdle"
              href="https://www.github.com/jevkid/murdle"
              description="A Wordle parody built in React, TS, and RTK which combines the idea of Wordle with hangman."
            />
            <ContentCard
              subtitle="D&D Character Builder"
              href="https://www.github.com/jevkid/character-builder"
              description="A D&D5e character randomiser built in React, TS, and RTK powered by the DND5e API."
            />
            <ContentCard
              subtitle="D&D Pocket Guide"
              href="https://www.github.com/jevkid/dnd-app"
              description="A React Native app which allows the user to quickly access D&D5e content such as classes, races, weapons, etc."
            />
          </StyledCards>
        </StyledP>
      </StyledSection>
      <DesktopNavigation />
    </StyledPage>
  );
};
