import * as React from 'react';
import { about } from '../api/data';
import { Accordion } from '../components/accordion';
import {
  StyledBorder,
  StyledPageContent,
  StyledP,
  StyledPage,
  StyledPageSubtitle,
  StyledPageTitle,
  StyledPageTitleContainer,
  StyledList,
  StyledListItem,
  StyledLink,
} from './styles';

export const About: React.FC = () => {
  return (
    <StyledPage id="about" className="page">
      <StyledPageContent>
        <StyledPageTitleContainer>
          <StyledPageTitle>{about.title}</StyledPageTitle>
          <StyledBorder />
          <StyledPageSubtitle>
            Hello! I'm Megan, a Cardiff based Team Lead/Frontend Engineer at{' '}
            <StyledLink
              href="https://www.crowdcube.com"
              target="_blank"
              rel="noreferrer"
            >
              Crowdcube
            </StyledLink>
            .
          </StyledPageSubtitle>
          <StyledP>
            I'm originally from Nashville, Tennessee but have lived in the UK
            for 8+ years now. Outside of work I enjoy walks with my two dogs,
            travel, cooking, and getting my nose stuck in a good (audio)book.
            The TL;DR is in bullet points, but feel free to expand the below for
            the full story.
          </StyledP>
          <StyledList>
            <StyledListItem>
              I'm a Frontend Engineer specialising in React and Typescript, as
              well as a Team Lead in charge of line managing a small team of
              engineers.
            </StyledListItem>
            <StyledListItem>
              I'm really passionate about trying to close the gender gap in this
              industry as well as helping women pursue careers in technology.
            </StyledListItem>
            <StyledListItem>
              I love getting involved in things: mentoring, coaching,
              volunteering- you name it.
            </StyledListItem>
            <StyledListItem>
              I believe in programming with intention- I always view what I'm
              working on through the eyes of the user. Just because something
              looks good doesn't mean that it provides a good user experience.
            </StyledListItem>
            <StyledListItem>
              I love to travel, but equally I love photographing my travels. I
              try to keep my{' '}
              <StyledLink
                href="https://www.flickr.com/photos/nashwales/albums"
                target="_blank"
                rel="noreferrer"
              >
                Flickr
              </StyledLink>{' '}
              up to date as I go!
            </StyledListItem>
          </StyledList>
          <Accordion title="Prologue">
            <StyledP fullWidth={true}>
              I've been designing and programming websites since the MySpace
              era...or at least, that's what got me started. I actually started
              university studying a very generic "Communications" degree. No
              surprise, "Communications" wasn't for me. I actually dropped out
              of university to study part time at a community college and work
              full time for a while (at a store called Best Buy, doing
              everything from customer service, hiring, supervising, sales, and
              computer repair). When I had a better idea of what I wanted to do,
              I started re-applying to schools. While I was researching where to
              apply, I focused on schools that had good study abroad programs.
              It was shortly after that that I realised "Hey, I could do my
              entire degree abroad!". My family and friends thought I was
              insane, but less than a year later I was on a plane to London to
              begin my studies at Cardiff University.
            </StyledP>
          </Accordion>
          <Accordion title="University days">
            <StyledP fullWidth={true}>
              During my 3 years at Cardiff University (where I studied Computer
              Science and Software Engineering), I learned the basics of various
              programming languages such as Java, Python, C/C++, etc. I also
              took modules about data structures and algorithms, knowledge
              management, and the software development lifecycle. In addition to
              my studies, I was also active in various societies and the student
              senate. I was President of the Computer Science Society for two
              years, and in my third year I was elected the International
              Students' Officer. During this time, I learned so much about
              leadership, organisation, and working closely people of all
              different backgrounds.
            </StyledP>
            <StyledP fullWidth={true}>
              The summer following my second year I was lucky enough to complete
              a internship for{' '}
              <StyledLink
                href="https://www.skyscanner.net"
                target="_blank"
                rel="noreferrer"
              >
                Skyscanner
              </StyledLink>
              , in Barcelona. I worked within their Data Squad and built
              internal dashboards monitoring automated processes such as hotel
              de-duplication. This experience in the travel industry is what
              actually helped me land my first job as a Junior Frontend
              Developer at{' '}
              <StyledLink
                href="https://www.inspiretec.com"
                target="_blank"
                rel="noreferrer"
              >
                Inspiretec
              </StyledLink>
              .
            </StyledP>
          </Accordion>
          <Accordion title="Professional experience">
            <StyledP fullWidth={true}>
              During my time at Inspiretec, I worked primarily on a white-label
              travel booking solution used by various financial institutions in
              Canada. This software integrated with the company's platform to
              allow customers to seamlessly book flights, hotels, cruises, and
              rental cars using points from their bank. In addition to this, I
              worked on an in-house CMS system and also built email templates
              for various clients.
            </StyledP>
            <StyledP fullWidth={true}>
              After Inspiretec I did a short stint at Cardiff University where I
              developed their Student App- an app for students to check their
              timetable, get directions, view upcoming events, and more. I was
              hired to write the app in React Native, but when I started the
              position it turned out that the department had just signed on to
              use a third-party software which rendered React into mobile apps.
              I originally wrote the app using this software, but I felt it was
              lacking in features essential to providing the best app for the
              students, so I re-wrote it in React Native in my own time. I then
              presented it to various stakeholders and while it took some time,
              eventually the department went for my React Native implementation
              which is still in use today.
            </StyledP>
            <StyledP fullWidth={true}>
              In my current position at Crowdcube I lead a team of engineers,
              help manage the day to day of a squad, and carry out both product
              and tech debt work. My squad focuses primarily on live investment
              opportunities and have recently helped internationalise the
              majority of the platform. In addition to this we've been slowly
              re-writing legacy pages to use React/Typescript, Styled Components
              and Redux Toolkit. I enjoy being able to split my time between
              managing people and engineering- my favourite part of the job is
              helping the engineers in my team realise their full potential and
              progress in their career. It gives me great pleasure to be part of
              such a happy, high functioning team.
            </StyledP>
            <StyledP fullWidth={true}>
              Outside of work, I'm very active in the dev community both locally
              and nationally. I've been volunteering in classrooms, at
              hackathons and virtual events since I was in university. I co-host
              a local meetup,{' '}
              <StyledLink
                href="https://www.meetup.com/uxwales/"
                target="_blank"
                rel="noreferrer"
              >
                UX Wales
              </StyledLink>
              , and enjoy volunteering at events held by organisations such as
              the Stemettes, or any opportunity to help young women learn to
              code. I just love teaching others and seeing them realise what
              they can do!
            </StyledP>
          </Accordion>
        </StyledPageTitleContainer>
      </StyledPageContent>
    </StyledPage>
  );
};
