import styled, {css} from 'styled-components';
import {Cyan, DarkBlue, GrayishDarkBlue, VeryLightGray} from './Common/Colors'

interface IButton {
    variant?: "primary" | "secondary" | "attached" 
}
export const NestedBtn = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  bottom: 0%;
  background-color: #1d3444;;
  padding: 16px 18px;
  text-align: center;
`
export const SVG = styled.svg`
    width: 100%;
`
const Button = styled.button<IButton>`
  padding: 17px 32px 17px 82px;
  background-color: ${DarkBlue};
  border: none;
  color: white;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  &:hover{
      background-color: ${Cyan};
  }
  &:hover ${NestedBtn}{
    background-color: #55a292;
  }
  &:hover ${SVG}{  
          g{
            stroke: ${VeryLightGray};
          }
    }
  ${(props)=>{
      if(props.variant === "secondary"){
          return css`
          background-color: white;
          border: 1px solid ${GrayishDarkBlue};
          color: ${GrayishDarkBlue};
          padding: 17px 32px;
          &:hover{
              background-color: ${GrayishDarkBlue};
              color: white;
          }
          `
      }if(props.variant === "attached"){
        return css`
        padding: 16px 22px;
        background-color: black;
        opacity: 0.1;
        position: absolute;
        left: 0%;
        right: 76%;
        top: 0%;
        bottom: 0%;
        &:hover{
            background-color: ${Cyan};
            opacity: 0.1;
            color: white;
        }
        `
    }


  }}
`;

export default Button;