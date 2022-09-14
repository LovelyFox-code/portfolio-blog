import React from "react";
import styled from "styled-components";
import Button, { NestedBtn, SVG } from "../Button";
import { H1 } from "../Common/Typography";

export const HeroMain = styled.div`
  position: relative;
  margin: 80px 0;
  width: 80%;
  margin: auto;
`;
export const HeroImgBox = styled.div`
  width: 100%;
`;
export const HeroImg = styled.img`
  width: 100%;
`;
export const HeroContent = styled.div`
  position: absolute;
  left: 0%;
  bottom: 0%;
  height: 357px;
  width: 445px;
  border-radius: 0px;
  background: #fafafa;
`;
interface HeroProps {
    src: string;
}
const Hero: React.FC<HeroProps> = (props) => {
    return (
        <HeroMain>
            <HeroImgBox>
                <HeroImg src={props.src} />
            </HeroImgBox>
            <HeroContent>
                <H1>Hey, I’m Alex Spencer and I love building beautiful websites</H1>
                <Button>
                    <NestedBtn>
                        <SVG xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                            <g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
                                <path d="M0 9l8 4 8-4" />
                                <path opacity=".7" d="M0 5l8 4 8-4" />
                                <path opacity=".25" d="M0 1l8 4 8-4" />
                            </g>
                        </SVG>
                    </NestedBtn>
                    About me
                </Button>
            </HeroContent>
        </HeroMain>
    );
};
export default Hero;