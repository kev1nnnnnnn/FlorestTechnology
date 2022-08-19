import styled from "styled-components";

/*
font-family: 'Asap', sans-serif;
font-family: 'Merriweather', serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
*/

export const Title = styled.h2`
    color: #012026;
    font-size: 1.5em;
    font-family: 'Asap', sans-serif;

`
export const Text = styled.p`
    color: #012026;
    font-family: 'Poppins', sans-serif;

`
export const TitleTop = styled.h1`
    text-align: center;
    margin-top: 2em;
    font-size: 2.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #012026;
    @media (max-width: 600px)
    {    
        font-size: 1.5em;
    }

`
export const SubTitleTop = styled.h2`
    text-align: center;
    font-size: 20px;
    color: #012026;
    margin-bottom: 2em;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    @media (max-width: 600px)
    {    
        font-size: 1em;
    }

`
export const Image = styled.img`
    width: 60%;
    height: 15em;
    border-radius: 50%;
    margin: auto;
    padding: 10px;

`

export const CardIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4em;
`

export const Button = styled.a`


`