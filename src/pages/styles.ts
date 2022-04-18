import styled from 'styled-components';
import { COLORS, FONTS } from '../constants';

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 768px;
  height: 100%;
`;

export const StyledBGPage = styled.div<{ backgroundImg: string; }>`
  display: flex;

  @media (max-width: 812px) {
    flex-direction: column;
  }

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
  width: 50%;
  height: 100%;
  min-height: fit-content;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 812px) {
    width: 100%;
  }
`;

  export const StyledPageTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 812px) {
    width: 100%;
    height: 350px;
    background-image: url('images/greenBg.jpg');
  }
`;

export const StyledPageTitle = styled.h2`
  color: ${COLORS.black};
  font-family: BourtonScriptBold;
  font-weight: 700;
  font-size: 64px;
  margin: 0;
`;

export const StyledPageSubtitle = styled.h4`
  color: ${COLORS.black};
  font-family: ${FONTS.manrope};
  font-weight: 400;
  margin: 12px 0;
`;

export const StyledNavigationContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
`;


export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 64px;

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
`;