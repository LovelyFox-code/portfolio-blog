import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { GrayishDarkBlue } from "../Common/Colors";

export const Nav = styled.nav`
  width: 80%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
`;
export const Logo = styled.div`
height: 70px;
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledLink = styled.a`
  margin: 10px;
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${GrayishDarkBlue};
`;


const Navbar = () => {

    return (
        <Nav>
            <div>
                <Logo>
                    <StyledLink href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
                            <path
                                fill="#33323D"
                                // fillRule="evenodd"
                                d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
                            />
                        </svg>
                    </StyledLink>
                </Logo>
            </div>
            <div>
                <FlexContainer>
                    <StyledLink href="/">Home</StyledLink>
                    <StyledLink href="/projects">Portfolio</StyledLink>
                    <StyledLink href="/">Contact me</StyledLink>
                </FlexContainer>
            </div>
        </Nav>
    );
};
export default Navbar;
