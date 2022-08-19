import styled from "styled-components";

/*
font-family: 'Asap', sans-serif;
font-family: 'Merriweather', serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
*/


export const Text = styled.p`

    margin-top: 0.5em;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 600px)
    {    
        font-size: 15px;
    }
`
export const Title = styled.h2`

    margin-top: 0.5em;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 600px)
    {    
        font-size: 1.5em;
        margin-top: -5em;
    }
`
export const Image = styled.img`
    width: 60%;
    height: auto;
    background-image: linear-gradient(to left, rgba(5, 20, 24, 0.8), #080f15);
    padding: 10px;
  
`