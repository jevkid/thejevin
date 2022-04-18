import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, COMMON } from '../constants';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: 'button' | 'submit';
  loading?: boolean;
}

const StyledButton = styled.button`
  border: 2px solid ${COLORS.black};
  background: ${COMMON.background};
  color: ${COLORS.black};
  padding: 12px;
  &:hover {
    cursor: pointer;
    background: ${COLORS.black};
    color: ${COMMON.background};
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

const StyledButtonContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const StyledButtonAsLink = styled.a`
  text-decoration: none;
  border: 2px solid ${COLORS.black};
  background: ${COMMON.background};
  color: ${COLORS.black};
  padding: 12px;
  &:hover {
    cursor: pointer;
    background: ${COLORS.black};
    color: ${COMMON.background};
  }

  display: inline-block;
  position: relative;
  overflow: hidden;
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
  &:hover::before {
    left: 150px;
    transition: all 0.85s;
  }
`;

export const ButtonAsLink: React.FC<ButtonAsLinkProps> = (props) => {
  return (
    <StyledButtonContainer>
      <StyledButtonAsLink href={props.href} target="_blank">
        {props.children}
      </StyledButtonAsLink>
    </StyledButtonContainer>
  );
};
