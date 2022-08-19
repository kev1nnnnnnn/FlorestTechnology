import styled, { keyframes } from "styled-components";

const rotate = keyframes`
 0% {
    transform: translateY(0);
 }
 50% {
    transform: translateX(-15px);
 }
 100% {
    transform: translateY(0);
 }
`
export const Button = styled.a`
    position: fixed;
    bottom: 0;
    right: 0;
    padding-bottom: 10px;
    padding-right: 10px;
    animation: ${rotate} 0s linear infinite;
    animation-duration: 2s;
    animation-iteration-count: infinite;
 
`
