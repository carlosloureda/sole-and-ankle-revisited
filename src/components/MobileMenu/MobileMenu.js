/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content aria-label="menu-content">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(var(--gray-hue) var(--gray-intense), 0.8);
  height: 100%;
`;

const Content = styled(DialogContent)`
  width: 330px;
  background: var(--color-white);
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;
  /* padding-top: 288px; */
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 22px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: absolute;
  bottom: 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;
  font-size: 0.875rem;
`;

export default MobileMenu;
