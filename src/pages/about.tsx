import * as React from 'react';
import { about } from '../api/data';
import styled from 'styled-components/macro';
import {
  StyledBorder,
  StyledP,
  StyledPage,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
} from './styles';
import { DESKTOP_PADDING } from '../constants';
import { Accordion } from '../components/accordion';

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 ${DESKTOP_PADDING};
  width: 85%;
  @media (max-width: 812px) {
    align-items: center;
    margin: 0 16px;
    text-align: center;
    width: 100%;
    margin-top: 100px;
  }
`;

const StyledList = styled.ul`
  padding-left: 14px;
  margin-top: 0px;
  text-align: left;
`;

const StyledListItem = styled.li`
  margin: 8px 0;
  font-size: 16px;
`;

export const About: React.FC = () => {
  return (
    <StyledPage id="about" className="page">
      <StyledAboutContainer>
        <StyledPageTitleContainer>
          <StyledPageTitle>{about.title}</StyledPageTitle>
          <StyledBorder />
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
          <StyledP>
            I'm originally from Nashville, Tennessee, but have lived in the UK
            for 8+ years now. Outside of work, I enjoy walks with my two dogs,
            travel, cooking, and getting my nose stuck in a good (audio)book.
            The TL;DR is in bullet points, but feel free to expand the below for
            the full story.
          </StyledP>
          <StyledList>
            <StyledListItem>
              I'm a Frontend Engineer specialising in React and Typescript, as
              well as a Team Lead in charge of line mangaging a small team of
              engineers.
            </StyledListItem>
            <StyledListItem>
              I'm really passionate about trying to close the gender gap and
              helping women and minorities pursue careers in technology.
            </StyledListItem>
            <StyledListItem>
              I love getting involved in things, mentoring, coaching, and
              volunteering.
            </StyledListItem>
            <StyledListItem>
              I believe in programming with intention, and always view what I'm
              working on through the eyes of the user. Just because something
              looks cool doesn't mean it provides a good experience.
            </StyledListItem>
            <StyledListItem>
              I love to travel, but equally I love photographing my travels. I
              try to keep my{' '}
              <a
                href="https://www.flickr.com/photos/nashwales/albums"
                target="_blank"
                rel="noreferrer"
              >
                Flickr
              </a>{' '}
              up to date as I go!
            </StyledListItem>
          </StyledList>
          <Accordion title="Prologue">
            <StyledP>
              I've been designing and programming websites since the MySpace
              era... or at least, that's what got me started. I actually started
              university studying a very generic "Communications" degree- I
              originally looked at studying Computer Science but...I didn't have
              the math grades. Shockingly, "Communications" wasn't for me. I
              actually dropped out of university to study part time at a
              community college and work full time for a while (nearly 5 years
              at Best Buy, doing everything from customer service, hiring,
              supervising, sales, and computer repair). When I had a better idea
              of what I wanted to do, I started re-applying to schools. While I
              was researching where to apply, I focused on schools that had a
              good study abroad program. It was shortly after that that I
              realised "Hey, I can do my entire degree abroad!". My family and
              friends thought I was insane, but less than a year later I was on
              a plane to London to begin my studies at Cardiff University.
            </StyledP>
          </Accordion>
          <Accordion title="University days">
            <StyledP>
              During my 3 years at Cardiff University (where I studied Computer
              Science and Software Engineering), I learned the basics of various
              programming languages such as Java, Python, C/C++, etc. I also
              took modules about data structures and algorithms, knowledge
              management, and the software development lifecycle. In addition to
              my studies, I was also active in various societies and the student
              senate. In my second and third year I was elected President of the
              Computer Science Society, and in my third year I was elected the
              International Student's Officer. During this time, I learned so
              much about leadership, organisation, and working closely people of
              all different backgrounds.
            </StyledP>
            <StyledP>
              The summer following my second year, I was lucky enough to
              complete a internship for{' '}
              <a
                href="https://www.skyscanner.net"
                target="_blank"
                rel="noreferrer"
              >
                Skyscanner
              </a>{' '}
              in Barcelona. I worked within their Data Squad and built internal
              dashboards monitoring automated processes such as hotel
              deduplication. This experience in the travel industry is what
              actually what helped me land my first job as a Junior Frontend
              Developer at{' '}
              <a
                href="https://www.inspiretec.com"
                target="_blank"
                rel="noreferrer"
              >
                Inspiretec
              </a>
              .
            </StyledP>
          </Accordion>
          <Accordion title="Professional experience">
            <StyledP>
              During my time at Inspiretec, I worked primarily on a white-label
              travel booking solution used by various financial institutions in
              Canada. This software integrated with the company's platform to
              allow customer's to seamlessly book flights, hotels, cruises, and
              rental cars using points from their bank, or cash. In addition to
              this, I worked on an in-house CMS system and also built email
              templates for various clients.
            </StyledP>
            <StyledP>
              After Inspiretec I did a short stint at Cardiff University, where
              I developed their Student App- an app for students to check their
              timetable, get directions, view upcoming events, and more. I was
              hired to write the app in React Native, but when I started the
              position it turns out that the department had just signed on to
              use a third-party software which rendered React into mobile apps.
              I originally wrote the app using this software, but I felt it was
              lacking in essential features, so I re-wrote it in React Native in
              my own time. It took some time, but eventually the department went
              for my React Native implementation which is still in use today.
            </StyledP>
            <StyledP>
              In my current position at Crowdcube, I lead a team of engineers
              and help manage the day to day of a squad as well. We work
              primarily on live investment opportunities, and have recently
              helped internationalise the platform. In addition to this, we've
              been slowly re-writing legacy pages to use React/Typescript,
              Styled Components and Redux Toolkit. I enjoy being able to split
              my time between managing people and engineering- my favourite part
              of the job is helping my engineers realise their full potential
              and progress in their career. It gives me great pleasure to be a
              part of such a happy, high functioning team.
            </StyledP>
            <StyledP>
              I'm very active in the dev community, both locally and nationally.
              I've been volunteering in classrooms, at hackathons, and virtual
              events since I was in university. I co-host a local meetup,{' '}
              <a
                href="https://www.meetup.com/uxwales/"
                target="_blank"
                rel="noreferrer"
              >
                UX Wales
              </a>
              , and enjoy volunteering at events held by organisations such as
              the Stemettes, or any opportunity to help young women learn to
              code. I just love teaching others and seeing them realise what
              they can do!
            </StyledP>
          </Accordion>
        </StyledPageTitleContainer>
      </StyledAboutContainer>
    </StyledPage>
  );
};
