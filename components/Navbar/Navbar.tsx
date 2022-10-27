import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { GrayishDarkBlue, VeryLightGray } from "../Common/Colors";
import { mediaQueriesMax } from "../Common/media";

export const Nav = styled.nav`
  width: 90%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
`;
export const Logo = styled.div`
height: 70px;
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const StyledLink = styled.a`
  /* margin: 10px; */
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  
`;
export const NavLinks = styled.div`
color: ${GrayishDarkBlue};
      ${mediaQueriesMax("mobileL")`
     display: none;
  `};
`
export const HamburgerMenu = styled.div`
display: none;
          ${mediaQueriesMax("mobileL")`
        display: inline;
        position: absolute;
        right: 6%;
        z-index: 999;
  `};
`
export const FlexHamburger = styled.div`
    display: flex;
    flex-direction: column;
    color: ${VeryLightGray};
    background-color: ${GrayishDarkBlue};
    gap: 15px;
    padding: 15px;
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    & svg{
        margin-bottom: 30px;
    }
    
`

interface INavbar {

    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const Navbar: React.FC<INavbar> = (props) => {
    const [open, setIsOpen] = useState(true);
    function switcher() {
        setIsOpen(!open)
    }
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
            <NavLinks>
                <FlexContainer>
                    <StyledLink href="/">Home</StyledLink>
                    <StyledLink href="/projects">Portfolio</StyledLink>
                    <StyledLink href="/contact">Contact me</StyledLink>
                </FlexContainer>
            </NavLinks>
            <HamburgerMenu onClick={() => switcher()}>
                {open ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13"><g fill="#33323D" fillRule="evenodd"><path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" /></g></svg> : <Box>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><path fill="#33323D" fillRule="evenodd" d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z" /></svg>
                    <FlexHamburger>
                        <StyledLink href="/">Home</StyledLink>
                        <StyledLink href="/projects">Portfolio</StyledLink>
                        <StyledLink href="/contact">Contact me</StyledLink>
                    </FlexHamburger>
                </Box>}

            </HamburgerMenu>
        </Nav>
    );
};
export default Navbar;
