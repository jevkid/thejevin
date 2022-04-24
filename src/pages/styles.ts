import styled from 'styled-components/macro';
import { BORDER_RADIUS, COLORS, COMMON, DESKTOP_PADDING, FONTS } from '../constants';

export const StyledPage = styled.div<{ centered?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${({ centered }) => centered ? 'center' : 'flex-start'};
  min-height: 885px;
  ${({ centered }) => centered ? `
    height: 100%;
  ` : ''};
  @media (max-width: 500px) {
    max-width: 400px;
  }
`;

export const StyledPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 ${DESKTOP_PADDING};
  margin-bottom: 36px;
  width: 100%;
  @media (max-width: 812px) {
    align-items: center;
    margin: 0 16px;
    text-align: center;
    width: 100%;
    margin-top: 100px;
  }
`;

export const StyledBorder = styled.div`
  border-bottom: 1px solid ${COMMON.subtitleColor};
  width: 75%;
  margin-bottom: 12px;
  color: ${COMMON.subtitleColor};
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
    background: ${COMMON.subtitleColor};
    color: ${COLORS.offWhite};
    a {
      color: ${COLORS.offWhite};
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
  color: ${COMMON.titleColor};
  font-family: ${FONTS.questrial};
  font-weight: 700;
  font-size: 64px;
  margin: 36px 0;
  @media (max-width: 812px) {
    margin: 16px 0;
  }
`;

export const StyledPageSubtitle = styled.h4`
  color: ${COMMON.subtitleColor};
  font-family: ${FONTS.manrope};
  font-weight: 400;
  width: 75%;
  font-size: 24px;
  margin: 0;
`;

export const StyledP = styled.p<{ fullWidth?: boolean }>`
  color: ${COMMON.bodyColor};
  font-size: 18px;
  width: ${({ fullWidth }) => fullWidth ? '100%' : '75%'};
`;

export const StyledList = styled.ul`
  padding-left: 14px;
  width: 75%;
  margin-top: 0px;
  text-align: left;
`;

export const StyledListItem = styled.li`
  margin: 8px 0;
  font-size: 16px;
  color: ${COMMON.bodyColor}
`;

export const StyledLink = styled.a`
  font-size: inherit;
  text-decoration: none;
  font-weight: bold;
  color: ${COMMON.linkColor};
  &:hover {
    color: ${COMMON.subtitleColor};
    text-decoration: underline;
  }
`;