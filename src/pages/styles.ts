import styled from 'styled-components';
import { COMMON, FONTS } from '../constants';

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPageTitleContainer = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPageTitle = styled.h2`
  color: ${COMMON.secondary};
  font-family: ${FONTS.manrope};
  font-weight: 400;
  margin: 0;
`;

export const StyledPageSubtitle = styled.h4`
  color: ${COMMON.secondary};
  font-family: ${FONTS.manrope};
  font-weight: 400;
  margin: 12px 0;
`;

export const StyledSection = styled.div``;

export const StyledSectionTitle = styled.h3`
  color: ${COMMON.primary};
  font-family: ${FONTS.manrope};
  font-weight: bold;
`;

export const StyledP = styled.p`
  color: ${COMMON.primary};
`;