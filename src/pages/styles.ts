import styled from 'styled-components/macro';
import { BORDER_RADIUS, COLORS, COMMON, FONTS } from '../constants';

export const StyledPage = styled.div<{ centered?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${({ centered }) => centered ? 'center' : 'flex-start'};
  min-height: ${({ centered }) => centered ? '768px' : '768px'};
  ${({ centered }) => centered ? `
    height: 100%;
  ` : ''};
  @media (max-width: 500px) {
    max-width: 400px;
  }
`;

export const StyledBGPage = styled.div<{ backgroundImg?: string; }>`
  display: flex;
  flex-direction: column;
  @media (min-width: 812px) {
    background-image: ${({ backgroundImg }) => backgroundImg ? `url(${backgroundImg})` : ''};
    /* Full height */
    min-height: auto;
    position: relative;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const StyledPageContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: fit-content;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 812px) {
    width: 100%;
  }
`;

export const StyledBorder = styled.hr`
  border-bottom: 0.5px solid #000000;
  width: 100%;
  border-style: solid;
  color: black;
  @media (max-width: 812px) {
    width: 85%;
  }
`;

export const shiny = `
  border-radius: ${BORDER_RADIUS};
  padding: 12px;
  display: inline-block;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    background: ${COLORS.black};
    color: ${COMMON.background};
    a {
      color: ${COMMON.background};
    }
  }

  &:hover::before {
    left: 150px;
    transition: all 0.85s;
  }

  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: -80px;
    height: 100px;
    width: 70px;
    background: rgba(255, 255, 255, 0.7);
    transform: rotate(20deg);
  }
`;

export const StyledPageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 812px) {
    width: 90%;
    align-items: center;
  }
`;

export const StyledPageTitle = styled.h2`
  color: ${COLORS.black};
  font-family: ${FONTS.questrial};
  font-weight: 700;
  font-size: 64px;
  margin: 36px 0;
  @media (max-width: 812px) {
    margin: 16px 0;
  }
`;

export const StyledPageSubtitle = styled.h4`
  color: ${COLORS.black};
  font-family: ${FONTS.manrope};
  font-weight: 400;
  font-size: 24px;
  margin: 0;
`;

export const StyledNavigationContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 0;
`;

export const StyledSectionTitle = styled.h3`
  color: ${COLORS.black};
  font-family: ${FONTS.vazirmatn};
  font-weight: bold;
  svg {
    margin-right: 12px;
  }
`;

export const StyledP = styled.p`
  color: ${COLORS.black};
  font-size: 18px;
`;