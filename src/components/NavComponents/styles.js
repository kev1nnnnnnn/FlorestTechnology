import styled from "styled-components";
/*
font-family: 'Asap', sans-serif;
font-family: 'Merriweather', serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
*/

export const Image = styled.img`
    width: 10%;
    height: auto;
`
export const Button = styled.a`
    background-color: #0FF777;
    padding: 0.5em 1em;
    border-radius: 2em;
    color: rgba(5, 20, 24, 1);
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid #0FF777;
    transition: 0.5s;
    &:hover {
        background-color: rgba(5, 20, 24, 1);
        color: #f5f5f5;
    }
`