import styled from "styled-components";

/*
font-family: 'Asap', sans-serif;
font-family: 'Merriweather', serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
*/

export const Title = styled.h2`
   font-family: 'Asap', sans-serif;
   font-weight: 600;
   font-size: 30px;

`
export const Text = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    text-align: center;
    padding: 1em;
`
export const TitleTop = styled.h1`
    color: #F5F5F5;
    text-align: center;
    margin-top: 2em;
    font-size: 2.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;



`
export const SubTitleTop = styled.h2`
    text-align: center;
    font-size: 20px;
    color: #f5f5f5;
    margin-bottom: 2em;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;

`
export const Image = styled.img`
    width: 50%;
    background-color: #00F777;
    padding: 20px;
    border-radius: 50%;

`

export const Button = styled.a`
    background-color: #012026;
    color: #f5f5f5;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 17px;
    font-family: 'Poppins', sans-serif;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        background-color: #F5F5F5;
        color: #012026;
        border: 1px solid #012026;
        
    }

`