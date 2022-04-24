import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BORDER_RADIUS, COLORS, COMMON } from '../constants';
import { shiny } from '../pages/styles';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: 'button' | 'submit';
  loading?: boolean;
}

const StyledButton = styled.button`
  border: 2px solid ${COMMON.subtitleColor};
  background: transparent;
  color: ${COMMON.subtitleColor};
  border-radius: ${BORDER_RADIUS};
  padding: 12px;
  &:hover {
    cursor: pointer;
    background: ${COMMON.subtitleColor};
    color: ${COLORS.offWhite};
  }
`;

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton type={props.type} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

interface LinkButtonProps {
  text: string;
  href: string;
}

const StyledLinkButton = styled(Link)``;

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return <StyledLinkButton to={props.href}>{props.text}</StyledLinkButton>;
};

interface ButtonAsLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

const StyledButtonAsLink = styled.a`
  text-decoration: none;
  border: 2px solid ${COMMON.subtitleColor};
  background: transparent;
  color: ${COMMON.subtitleColor};
  font-size: 20px;
  font-weight: 600;
  ${shiny}
`;

export const ButtonAsLink: React.FC<ButtonAsLinkProps> = (props) => {
  return (
    <StyledButtonAsLink href={props.href} target="_blank">
      {props.children}
    </StyledButtonAsLink>
  );
};
