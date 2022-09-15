import React from "react";
import styled from "styled-components";
import { GrayishDarkBlue } from "../Common/Colors";

export const Nav = styled.nav`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
`;
export const Logo = styled.svg`
height: 70px;
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Link = styled.div`
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
                        <path
                            fill="#33323D"
                            fill-rule="evenodd"
                            d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
                        />
                    </svg>
                </Logo>
            </div>
            <div>
                <FlexContainer>
                    <Link>Home</Link>
                    <Link>Portfolio</Link>
                    <Link>Contact me</Link>
                </FlexContainer>
            </div>
        </Nav>
    );
};
export default Navbar;
