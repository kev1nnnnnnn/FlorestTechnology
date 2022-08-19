import styled from "styled-components";
/*
font-family: 'Asap', sans-serif;
font-family: 'Merriweather', serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
*/

export const subTitle = styled.h3`
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
`
export const Title = styled.h2`
    font-family: 'Poppins', sans-serif;
`
export const Text = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1.2px;
    letter-spacing: 2px;
    font-size: 18px;
`
export const Button = styled.a`
    display: flex;
    flex-direction: row;
    width: 55%;
    justify-content: space-evenly;
    background-color: #34af23 ;
    border-radius: 10px;
    padding: 15px 30px;
    text-decoration: none;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        background-color: #1c1c1c;
        color: #f5f5f5;
        border: 2px solid #0ff777;
    }
    @media (max-width: 600px)
    {    
        width: 100%;
        font-size: 20px;
        padding: 10px 10px;
        margin: 1em 0;
    }
`
export const Image = styled.img`
    border-radius: 10px;
`
export const TextButton = styled.a`
    color: #F5F5F5;
    text-decoration: none;
    font-size: 20px;
  
    &:hover {
        color: #f5f5f5;
    }
`